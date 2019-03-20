//Gestion des imports bibliothèques
import axios from 'axios'

//------------------------------------------------------------------------------------------------------------------
//--DELETE--------------------------------------------------------------------------------------------------DELETE--
//------------------------------------------------------------------------------------------------------------------

const deleteAccount = (apiAdress) => {
    axios.delete(apiAdress+'prospect/delete').then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

//------------------------------------------------------------------------------------------------------------------
//--GET--------------------------------------------------------------------------------------------------------GET--
//------------------------------------------------------------------------------------------------------------------

const login = (apiAdress, user) => {
    axios.get(apiAdress+'prospect/login?username='+user.email+'&password='+user.password).then(response => {
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

const whoIam = (apiAdress) => {
    axios.get(apiAdress + "prospect/whoiam").then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

//------------------------------------------------------------------------------------------------------------------
//--PUT--------------------------------------------------------------------------------------------------------PUT--
//------------------------------------------------------------------------------------------------------------------

const handleSubscribe = (apiAdress, subscribe) => {
    const data = {
        subscribe: subscribe
    }
    axios.put(apiAdress+'prospect/subscribe_mails', data).then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const saveNewInfos = (apiAdress, user) => {
    const data = {
        email: user.email,
        username: "",
        nom: user.lastName,
        prenom: user.firstName,
        telephone: user.phoneNumber,
    }
    axios.put(apiAdress+'prospect/update', data).then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

const saveNewPassword = (apiAdress, passwords) => {
    const data = {
        oldpassword: passwords.oldpassword,
        newpassword1: passwords.newPassword,
        newpassword2: passwords.newPasswordConfirmed
    }
    axios.put(apiAdress+'prospect/password', data).then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

//------------------------------------------------------------------------------------------------------------------
//--POST------------------------------------------------------------------------------------------------------POST--
//------------------------------------------------------------------------------------------------------------------

const signup = (apiAdress, user) => {
    const data = {
        email: user.email,
        username: "",
        nom: user.lastName,
        prenom: user.firstName,
        telephone: user.phoneNumber,
        password: user.password
    }
    axios.post(apiAdress+'prospect/signup', data).then(response => {
        console.log(response.data);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export { deleteAccount, handleSubscribe, login, logout, saveNewInfos, saveNewPassword, signup, whoIam };