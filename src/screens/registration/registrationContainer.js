import React, { useState } from 'react';
import RegistrationView from './registrationView';

const RegistrationContainer = () => {

    const [registrationFormData, setRegistrationFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: '',
    });

    return <RegistrationView />

}

export default RegistrationContainer;