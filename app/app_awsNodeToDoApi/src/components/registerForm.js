"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { COMPLETE_CHALLENGE_ERROR, LOGIN, POOL_DATA, STANDARD_ERROR } from '../constants';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { Row } from 'react-bootstrap';
import { ToasterContext, ENQUEUE_TOAST } from '../../../js/modules/react/toasterComponent';
import { ToolTip } from './tooltip';
import { ConfigContext } from '../../../js/modules/react/configContextProvider';
import ReCAPTCHA from "react-google-recaptcha";
import { XmlHttpRequestUtil } from '../../../js/modules/utils/XMLHttpRequestUtil';

export function RegisterForm() {

    const spinnerContext = React.useContext(SpinnerContext);
    const toasterContext = React.useContext(ToasterContext);
    const configContext = React.useContext(ConfigContext);

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackErrors, setFeedbackErrors ] = useState([]);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ recaptchaToken, setRecaptchaToken ] = useState(null);
    const recaptchaRef = useRef();

    const recaptureSiteKey = configContext.config.grecaptcha.key;
    const recaptureIsActive = configContext.config.grecaptcha.active;
    const VERIFY_ENDPOINT = `${configContext.appConfig.endpoints.base}/${configContext.appConfig.endpoints.verify}`;
    const history = useHistory();
    const isRecaptchValid = () =>  recaptchaToken !== null && recaptchaToken.length > 0;

    useLayoutEffect(() => {

        if (recaptureIsActive && isRecaptchValid()) {
            hideErrors();
        }

    },[recaptchaToken])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.currentTarget.checkValidity() || (recaptureIsActive && !isRecaptchValid())) {
            setShowValidation(true);

            if (recaptureIsActive && !isRecaptchValid()) {
                showErrors(COMPLETE_CHALLENGE_ERROR);
            }

            event.stopPropagation();

        } else {

            spinnerContext.setShow(true);

            if (recaptureIsActive) {

                const payload = JSON.stringify({ token: recaptchaToken });

                const xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = (result) => {

                    const data = result.currentTarget;

                    if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {

                        const grecaptchaResponse = JSON.parse(data.response);

                        if (grecaptchaResponse.result.success) {
                            register();
                        } else {
                            showErrors();
                        }
                    } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {
                        showErrors();
                    }
                };

                xhttp.open("POST", VERIFY_ENDPOINT);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send(payload);

            } else {
                register();
            }
        }
    };

    const showErrors = (error = STANDARD_ERROR) => {

        const errors = [...feedbackErrors];

        if (errors.indexOf(error) === -1) {
            errors.push(error);
        }

        setFeedbackErrors(errors);
        setShowFeedback(true);

        if (recaptureIsActive) {
            setRecaptchaToken(null);
            recaptchaRef.current.reset();
        }

        spinnerContext.setShow(false);
    }

    const hideErrors =  () => {
        setShowFeedback(false);
        setFeedbackErrors([]);
    }

    const register = () => {

        const userPool = new CognitoUserPool(POOL_DATA);

        const attributeList = [
            new CognitoUserAttribute({
                Name: "name",
                Value: name
            })
        ];

        userPool.signUp(username, password, attributeList, null, (err, result) => {

            if (err != null) {

                showErrors(err.message);

            } else {

                setShowValidation(false);
                hideErrors();

                spinnerContext.setShow(false);
                toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Registration Successful!", body: `${name}, you can now login using your credentials.` } } );
                history.push(LOGIN);
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
                                Name <ToolTip message="Make this fictional and not personal" />
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
                                Username <ToolTip message="This is case insensitive" />
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
                                Password <ToolTip message="Alphanumeric and case sensitive. Use a special character!" />
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
                    {recaptureIsActive &&
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    Are you a robot ? <ToolTip message="Please complete the challenge" />
                                </Form.Label>
                                <ReCAPTCHA ref={recaptchaRef} sitekey={recaptureSiteKey} onChange={value => setRecaptchaToken(value)} />
                            </Form.Group>
                        </Form.Row>
                    }
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button className="float-right" id="submit" variant="dark" type="submit">Register</Button>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            {showFeedback &&
                                <>
                                    <h5 className="text-danger">There were errors</h5>
                                    <ul id="errorFeedback" className="text-danger">
                                        {feedbackErrors.map((error, index) => <li key={index}><small>{error}</small></li>)}
                                    </ul>
                                </>
                            }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    )
}