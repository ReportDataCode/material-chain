import React, { useEffect, useState } from 'react';
import { Card, FloatingLabel, Form, Button } from 'react-bootstrap';

const Register = ({ onSwitch }) => {

    // Button Loading
    const [isLoading, setLoading] = useState(false);

    const handleClick = () => setLoading(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered Successtfully')
    }

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
                <h3>Sign Up</h3>
            </Card.Header>
            <Card.Img variant="top" src={"https://i.imgur.com/EWCNhCQ.png"} />
            <Card.Body>
                <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <FloatingLabel
                        type="text"
                        controlId="name"
                        label="Full Name"
                        className="mb-2 col-12"
                    >
                        <Form.Control type="email" placeholder="Full Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        type="email"
                        controlId="email"
                        label="Email address"
                        className="mb-2 col-12"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        type="password"
                        controlId="password"
                        label="Password"
                        className="mb-1 col-12"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="link" onClick={onSwitch}>
                        Already have account? Login here.
                    </Button>
                    <Button
                        type="submit"
                        name="submit"
                        className="col-10"
                        disabled={isLoading}
                        // onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? 'Loading…' : 'Sign Up'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Register
