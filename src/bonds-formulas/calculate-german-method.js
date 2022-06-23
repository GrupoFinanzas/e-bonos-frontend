const Units = {
    Years: { i: 0, durationString: 'Años', frecuencyString: 'Anual', forYears: 1, },
    Semesters: { i: 1, durationString: 'Semestres', frecuencyString: 'Semestral', forYears: 2, },
    Quarters: { i: 2, durationString: 'Cuatrimestres', frecuencyString: 'Cuatrimestral', forYears: 3, },
    Trimesters: { i: 3, durationString: 'Trimestres', frecuencyString: 'Trimestral', forYears: 4, },
    Bimesters: { i: 4, durationString: 'Bimestres', frecuencyString: 'Bimestral', forYears: 6, },
    Months: { i: 5, durationString: 'Meses', frecuencyString: 'Mensual', forYears: 12, },
    Fortnights: { i: 6, durationString: 'Quincenas', frecuencyString: 'Quincenal', forYears: 24, },
    Days: { i: 8, durationString: 'Días', frecuencyString: 'Diario', forYears: 360, },
    length: 9,
};

// data = { name, nominalValue, couponRate, paymentPeriod, couponRateFrecuency, expiration, expirationUnit, }

function calculateGermanMethod(data) {
    return germanMethod(data);
}

// function convertUnitsRelativeToYears(data) {
//     for (var i in Units) {
//         if (data.expirationUnit === Units[i].durationString) {
//             data.expiration /= Units[i].forYears;
//         }

//         if (data.paymentPeriod === Units[i].frecuencyString) {
//             for (var j in Units) {
//                 if (data.couponRateFrecuency === Units[j].frecuencyString) {
//                     data.couponRate /= (Units[i].forYears / Units[j].forYears);
//                 }
//             }
//         }
//     }
// }

function printFlows(investment, flows) {
    let debugText = `Flujos:\n [${investment}, `;
    for (let i = 0; i < flows.length; i++) {
        debugText += `${flows[i].toFixed(4)}` + (i == flows.length - 1 ? `` : `, `);
    }
    debugText += `]`;
    console.log(debugText);
}

function germanMethod(data) {

    // find the bonds payment periods
    let numberPeriods = 0;

    let paymentPeriodFrecuency = null;

    for (let i in Units) {
        if (data.paymentPeriod === Units[i].frecuencyString) {
            paymentPeriodFrecuency = i;
            for (let j in Units) {
                if (data.expirationUnit === Units[j].durationString) {
                    numberPeriods = Math.round(data.expiration * Units[i].forYears / Units[j].forYears);
                }
            }
        }
    }

    // convert coupon rate relative to payment frequency

    for (let i in Units) {
        if (data.couponRateFrecuency === Units[i].frecuencyString) {
            data.couponRate =
                Math.pow(1 + parseFloat(data.couponRate / 100), Units[i].forYears / Units[paymentPeriodFrecuency].forYears) - 1;
            break;
        }
    }

    // german method payment program
    let investment = data.nominalValue;
    let amortization = -investment / numberPeriods;
    let futureFlows = [];
    let index = 0;
    let capital = investment;
    let cok = 2.50;

    while (index < numberPeriods) {
        let interest = -capital * (data.couponRate); // falta que la tasa cupón sea relativa a la frecuencia de pago
        futureFlows.push(interest + amortization);
        capital = capital - (-amortization);
        index++;
    }

    printFlows(investment, futureFlows);


    // console.log('tir');
    // calculate the internal rate of return (TIR)
    let van = 0;
    let tir = 0.01;
    do {
        let sum = 0
        for (let i = 0; i < numberPeriods; i++) {
            let denominator = Math.pow(1 + tir, i + 1);
            sum += -futureFlows[i] / denominator;
        }
        van = -investment + sum;
        tir += 0.000001;
    } while (van > 0);

    tir *= 100;

    console.log('tir: ' + tir);
    let tirFrecuency = data.paymentPeriod;

    // console.log('va');
    // calculate the value of the current bond (VA)
    let va = 0;
    for (let i = 0; i < numberPeriods; i++) {
        let denominator = Math.pow(1 + (cok / 100), i + 1);
        va += -futureFlows[i] / denominator;
    }
    console.log('va: ' + va);
    // console.log('van');
    // calculate the net present value (VAN)
    van = va - investment;
    console.log('van: ' + van);

    // calculate the duration and convexity
    let sumVAbyTime = 0;
    let sumConvexityByPeriod = 0;
    for (let i = 0; i < numberPeriods; i++) {
        let VAbyPeriod = -futureFlows[i] / Math.pow(1 + (cok / 100), i + 1)
        let VAbyPeriodxTime = VAbyPeriod * (i + 1);
        sumVAbyTime += VAbyPeriodxTime;

        let convexityByPeriod = VAbyPeriodxTime * (Math.pow(i + 1, 2) + (i + 1));
        sumConvexityByPeriod += convexityByPeriod;
    }

    let duration = sumVAbyTime / va;
    let durationFrecuency = data.paymentPeriod;
    console.log('Duración: ' + duration);

    // calculate the modified duration
    let modifiedDuration = duration / (1 + (cok / 100));
    console.log('Duración Modificada: ' + modifiedDuration);

    // calculate the convexity
    let convexity = sumConvexityByPeriod / (va * Math.pow(1 + (cok / 100), 2));
    console.log('Convexidad: ' + convexity);

    return {
        values: [
            tir.toFixed(3),
            va.toFixed(3),
            van.toFixed(3),
            duration.toFixed(3),
            modifiedDuration.toFixed(3),
            convexity.toFixed(3),
        ],
        frequencies: [
            tirFrecuency,
            durationFrecuency
        ]
    };
}

export { calculateGermanMethod, Units };