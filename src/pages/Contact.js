import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from "../utils/helpers";
const divStyles = {
    border: "1px solid black",
    maxWidth: "1000px",
    margin: "10px auto",
}
function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" })
    const [formErrors, setFormErrors] = useState({message:"", name: "", email: ""})
    const handleInputChange = (e) => {
        console.log(e.target.name, e.target.value)
        //    the above needs to be modified
        setFormState({
            ...formState,
        [e.target.name]: e.target.value
        })
    };
    const handleBlur = (e) => {
        if (e.target.value === ""){
            setFormErrors({
                ...formErrors,
                [e.target.name]:"This Field is Required"

            })
            return
        }
        if(e.target.name === "email"){
            const isValid = validateEmail(e.target.value)
            if(!isValid){
                setFormErrors({
                    ...formErrors,
                    email: "email is not correctly formatted"
                })
            }
        }
    }
    const handleFocus = (e) => {
       
            setFormErrors({
                ...formErrors,
                [e.target.name]:""

            })
    }
    return (
        <div className = "page" style={divStyles}>
            <h1>Contact</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange} 
                        onBlur = {handleBlur}
                        onFocus = {handleFocus}
                        />
                        {formErrors.name &&<Form.Text>{formErrors.name}</Form.Text>}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control

                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        onBlur = {handleBlur}
                        onFocus = {handleFocus} />
                         {formErrors.email &&<Form.Text>{formErrors.email}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter message"
                        value={formState.message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur = {handleBlur}
                        onFocus = {handleFocus} />
                         {formErrors.message &&<Form.Text>{formErrors.message}</Form.Text>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Contact