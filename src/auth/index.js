// isLoggdIn =>

export const isLoggedIn = () =>{
    let data = localStorage.getItem("data");
    if(data == null){
        return false;
    }
    else{
        return true;
    }
}


//doLogin=>   data=> set to localStorage

export const doLogin = (userData) =>{
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("authenticated", true);

};


// doLogout=> remove from localStorage

export const doLogout = () =>{
    localStorage.removeItem("userData");
    localStorage.removeItem("authenticated");
}

//get currentUser

export const getCurrentUserDetails = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("userData"))?.user;
    }
    else{
        return undefined;
    }
}
