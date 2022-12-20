// Simple react hook for authentication
export default function useAuth() {
    let auth = false;
    // taking user info from local storage 
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // if user is not logged in then redirect to login page
    if (user) {
        return auth = true;
    }
    return auth;

}