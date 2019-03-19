//Gestion des imports bibliothèques
import axios from 'axios'

/////////////////////////////////////////////////////////////////////////////////////////

const createAccessToken = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "";
}

const deleteCookie = (cname) => {
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

/////////////////////////////////////////////////////////////////////////////////////////

const login = (apiAdress, email, password) => {
    axios.get(apiAdress+'prospect/login?username='+email+'&password='+password).then(response => {
        console.log(response.data);
        /*user.token = createAccessToken();
        setCookie("userID", user.id, 1);
        setCookie("userToken", user.token, 1);*/
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const logout = (apiAdress) => {
    axios.get(apiAdress+'logout').then(response => {
        console.log(response.data);
        /*getCookie("userID");
        deleteCookie("userID");
        deleteCookie("userToken");*/
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const whoIam = (apiAdress) => {
    axios.get(apiAdress + "prospect/whoIam/").then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}

export { login, logout, whoIam };