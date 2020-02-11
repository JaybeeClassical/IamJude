import React from "react"
import { Form, Button, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Subscribe from "../components/mailChimpEmail"

function Hire() {
  return (
    <div className="container">
      <Link className="btn btn-outline-light rounded-pill mx-5 my-3" to="/">
        Back to Home
      </Link>

      <div style={{ margin: "auto", maxWidth: "500px" }}>
        <h2 className="text-center text-white">Hire/Contact me</h2>
        <p className="text-center">
          Want to ask for something, work, business or anything. Please reach
          out{" "}
        </p>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          className="shadow-lg p-5 mb-5 bg-white rounded"
        >
          <Form.Group>
            <input type="hidden" name="form-name" value="contact" />
            <Form.Row>
              <Col>
                <Form.Control name="name" placeholder="First name" />
              </Col>
              <Col>
                <Form.Control name="name" placeholder="Last name" />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formFile">
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Send your message right here and i will get back
            </Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              id="message"
              rows="4"
              placeholder="shoot me this message.  ):"
            />
          </Form.Group>

          {/* <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I'm not a robot"
              data-netlify-recaptcha="true"
            />
          </Form.Group> */}

          <Button variant="outline-dark" type="submit" className="text-center">
            <i className="fa fa-paper-plane"></i> Send
          </Button>
        </Form>
      </div>
      <Subscribe />
    </div>
  )
}

export default Hire
