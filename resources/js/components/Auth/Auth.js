import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

const Auth = () => {

    const [switchMode, setSwitchMode] = useState(true);

    const handleSwitch = () => setSwitchMode(!switchMode);

    return (
        <Container className="d-flex justify-content-center">
            {
                switchMode
                    ?
                    <Login onSwitch={handleSwitch}/>
                    :
                    <Register onSwitch={handleSwitch}/>
            }
        </Container>
    )
}

export default Auth;
