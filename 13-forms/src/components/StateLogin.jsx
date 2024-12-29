import { useState } from "react";

import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";

export default function Login() {

    const { 
        value: emailVal, 
        didEdit: didEditEmail,
        handleInputChange: handleEmailChange, 
        handleBlur: handleEmailBlur, 
    } = useInput("");

    const { 
        value: passwordVal, 
        didEdit: didEditPassword,
        handleInputChange: handlePasswordChange, 
        handleBlur: handlePasswordBlur, 
    } = useInput("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredVals.email);
        console.log(enteredVals.password);
    }
    const emailNotValid = didEditEmail && !emailVal.includes("@");
    const passwordNotValid = didEditPassword && (passwordVal.length < 5);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input 
                    id="email"
                    type="email"
                    name="email"
                    label="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailVal}
                    error={emailNotValid && "Email Not Valid"}
                />

                <Input 
                    id="password"
                    type="password"
                    name="password"
                    label="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordVal}
                    error={passwordNotValid && "Password Not Valid"}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" >Login</button>
            </p>
        </form>
    );
}
