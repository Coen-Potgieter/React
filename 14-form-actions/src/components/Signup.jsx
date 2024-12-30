import { useActionState } from "react";

import { isEmail, isNotEmpty, isEqualToOtherValue, hasMinLength } from "../util/validation.js";

function signupAction(prevFormState, fd) {
    const data = Object.fromEntries(fd.entries());
    const acquisitionArr = fd.getAll("acquisition");
    data.acquisition = acquisitionArr;
    let errors = [];

    if (!isEmail(data.email)) {
        errors.push("Invalid Email Address.");
    }
    if (!isNotEmpty(data.password) || !hasMinLength(data.password, 6)) {
        errors.push("You must enter a password with at least six characters.");
    }

    if (!isEqualToOtherValue(data.password, data["confirm-password"])) {
        errors.push("Passwords Must be Matching.");
    }

    if (!isNotEmpty(data["first-name"])) {
        errors.push("Must Fill in First Name");
    }
    if (!isNotEmpty(data["last-name"])) {
        errors.push("Must Fill in Last Name");
    }
    if (!isNotEmpty(data.role)) {
        errors.push("Please Select a Role");
    }
    if (!data.terms) {
        errors.push("Must Accept Terms & Conditions");
    }

    if (data.acquisition.length === 0) {
        errors.push("Please Select at Least One Acquisition Channel");
    }

    if (errors.length > 0) {
        return {
            errors, 
            enteredVals: data,
        };
    }
    return {errors: null};
}

export default function Signup() {
    const [ formState, formAction ] = useActionState(signupAction, {errors: null});

    return (
        <form action={formAction}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>

            <div className="control">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    defaultValue={formState.enteredVals?.email}
                />
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        defaultValue={formState.enteredVals?.password}
                    />
                </div>

                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                        defaultValue={formState.enteredVals?.["confirm-password"]}
                    />
                </div>
            </div>

            <hr />

            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        name="first-name" 
                        defaultValue={formState.enteredVals?.["first-name"]}
                    />
                </div>

                <div className="control">
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        name="last-name" 
                        defaultValue={formState.enteredVals?.["last-name"]}
                    />
                </div>
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select id="role" name="role" defaultValue={formState.enteredVals?.role}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="acquisition"
                        value="google"
                        defaultChecked={formState.enteredVals?.acquisition.includes("google")}
                    />
                    <label htmlFor="google">Google</label>
                </div>

                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value="friend"
                        defaultChecked={formState.enteredVals?.acquisition.includes("friend")}
                    />
                    <label htmlFor="friend">Referred by friend</label>
                </div>

                <div className="control">
                    <input 
                        type="checkbox" 
                        id="other" 
                        name="acquisition" 
                        value="other" 
                        defaultChecked={formState.enteredVals?.acquisition.includes("other")}
                    />
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>

            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input 
                        type="checkbox" 
                        id="terms-and-conditions" 
                        name="terms" 
                        defaultChecked={(formState.enteredVals?.terms === "on") ? true : false}
                    />I
                    agree to the terms and conditions
                </label>
            </div>

            {formState.errors && (
                <ul className="error">
                    {formState.errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button className="button">Sign up</button>
            </p>
        </form>
    );
}
