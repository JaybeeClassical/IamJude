import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import Subscribe from '../components/mailChimpEmail';

function Hire() {
    return (
        <div className="container">
            <Link
                className="btn btn-outline-light rounded-pill mx-5 my-3"
                to="/">
                Back to Home
            </Link>

            <div style={{ margin: 'auto', maxWidth: '500px' }}>
                <h2 className="text-center text-white">Hire/Contact me</h2>
                <p className="text-center">Want to ask for something, work, business or anything. Please reach out </p>
                <Form className="shadow-lg p-5 mb-5 bg-white rounded">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" className="text-center">
                        Submit
                    </Button>
                </Form>
            </div>
            <Subscribe />
        </div>
    )
}

export default Hire;
