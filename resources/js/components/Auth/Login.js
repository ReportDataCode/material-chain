import React, { useEffect, useState } from 'react';
import { Card, FloatingLabel, Form, Button } from 'react-bootstrap';

const Login = ({ onSwitch }) => {

    // Button Loading
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Logged in Successtfully')
    }

    const handleClick = () => setLoading(true);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);


    return (
        <Card className="col-10 col-md-7 col-lg-5">
            <Card.Header className="d-flex justify-content-center">
                <h3>Sign In</h3>
            </Card.Header>
            <Card.Img variant="top" src={"https://i.imgur.com/EWCNhCQ.png"} />
            <Card.Body>
                <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="email"
                        label="Email address"
                        className="mb-2 col-12"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="password"
                        label="Password"
                        className="mb-1 col-12"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="link" onClick={onSwitch}>
                        Don't have account? Register here.
                    </Button>
                    <Button
                        type="submit"
                        name="submit"
                        className="col-10"
                        disabled={isLoading}
                        // onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? 'Loading…' : 'Sign In'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Login
