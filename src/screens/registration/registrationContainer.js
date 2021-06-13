import React from 'react';
import RegistrationView from './registrationView';

const RegistrationContainer = () => {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return <RegistrationView handleSubmit={handleSubmit} />

}

export default RegistrationContainer;