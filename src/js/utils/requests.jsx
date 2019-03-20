//Gestion des imports bibliothèques
import axios from 'axios'

const deleteAccount = (apiAdress) => {
    axios.get(apiAdress+'prospect/delete').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const handleSubscribe = (apiAdress) => {
    axios.get(apiAdress+'prospect/subscribe_mails').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const login = (apiAdress, email, password) => {
    axios.get(apiAdress+'prospect/login?username='+email+'&password='+password).then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const logout = (apiAdress) => {
    axios.get(apiAdress+'logout').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const saveNewInfos = (apiAdress) => {
    axios.get(apiAdress+'prospect/update').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const saveNewPassword = (apiAdress) => {
    axios.get(apiAdress+'prospect/password').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const signup = (apiAdress) => {
    axios.get(apiAdress+'prospect/signup').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const whoIam = (apiAdress) => {
    axios.get(apiAdress + "prospect/whoiam").then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export { deleteAccount, handleSubscribe, login, logout, saveNewInfos, saveNewPassword, signup, whoIam };