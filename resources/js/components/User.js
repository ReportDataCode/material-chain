import React from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h4>Users Data</h4>
                            <Link to="/add-user" className="btn btn-primary">Add User</Link>

                        </Card.Header>
                    </Card>
                </Col>
            </Row>

        </Container>


    )
}



export default User;;