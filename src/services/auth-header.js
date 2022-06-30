export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token){
        console.log(`Bearer ${user.token}`);
        return { 'Authorize': `Bearer ${user.token}` };
    } else{
        console.log('No token available');
        return {};
    }
}
