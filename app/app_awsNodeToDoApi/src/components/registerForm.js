"use strict;"

// - site - 6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3
//- sec - 6LdFJsIaAAAAANksLu53O6eqJsUpjggm22Mg9pX5

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LOGIN, POOL_DATA } from '../constants';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { Row } from 'react-bootstrap';
import { ToasterContext, ENQUEUE_TOAST } from '../../../js/modules/react/toasterComponent';
import { ToolTip } from './tooltip';
import { ConfigContext } from '../../../js/modules/react/configContextProvider';
import ReCAPTCHA from "react-google-recaptcha";

export function RegisterForm() {

    const spinnerContext = React.useContext(SpinnerContext);
    const toasterContext = React.useContext(ToasterContext);
    const configContext = React.useContext(ConfigContext);

    const key = configContext.config.grecaptcha.key;

    const VERIFY_ENDPOINT = `${configContext.appConfig.endpoints.base}/${configContext.appConfig.endpoints.verify}`;

    const history = useHistory();

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackError, setFeedbackError ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ recaptchaToken, setRecaptchaToken ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else {

            spinnerContext.setShow(true);

            const payload = JSON.stringify({ token: recaptchaToken });

            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = (result) => {

                const data = result.currentTarget;

                if (data.status === 200 && data.readyState === 4 && data.response.length > 0) {

                    const grecaptchaResponse = JSON.parse(data.response);

                    if (grecaptchaResponse.result.success) {
                        register();
                    } else {
                        error();
                    }
                }
            };

            xhttp.open("POST", VERIFY_ENDPOINT);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(payload);
        }
    };

    const error = (error = "There was an error") => {
        setFeedbackError(error);
        setShowFeedback(true);
        spinnerContext.setShow(false);
    }

    const register = () => {

        const userPool = new CognitoUserPool(POOL_DATA);

        const attributeList = [];

        const dataName = {
            Name: "name",
            Value: name
        }

        const attributeName = new CognitoUserAttribute(dataName)

        attributeList.push(attributeName);

        userPool.signUp(username, password, attributeList, null, (err, result) => {

            if (err != null) {

                setFeedbackError(err.message);
                setShowFeedback(true);
                spinnerContext.setShow(false);

            } else {

                setShowValidation(false);
                setShowFeedback(false);

                spinnerContext.setShow(false);
                toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Registration Successful!", body: `${name}, you can now login using your credentials.` } } );
                history.push(LOGIN)
            }
        });
    }

    return (
        <Row>
            <Col lg={4}>
                <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Name: <ToolTip message="Make this fictional and not personal" />
                            </Form.Label>
                            <Form.Control
                                name="name"
                                id="name"
                                type="name"
                                onChange={event => setName(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Username: <ToolTip message="This is case insensitive" />
                            </Form.Label>
                            <Form.Control
                                name="username"
                                id="username"
                                type="text"
                                onChange={event => setUsername(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Password: <ToolTip message="Alphanumeric and case sensitive. Use a special character!" />
                            </Form.Label>
                            <Form.Control
                                name="password"
                                id="password"
                                type="password"
                                onChange={event => setPassword(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Are you a robot ?: <ToolTip message="Something" />
                            </Form.Label>
                            <ReCAPTCHA sitekey={key} onChange={value => setRecaptchaToken(value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button className="float-right" id="submit" variant="dark" type="submit">Register</Button>
                            {showFeedback &&
                                <div className="text-danger">
                                    {feedbackError}
                                </div>
                            }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    )
}