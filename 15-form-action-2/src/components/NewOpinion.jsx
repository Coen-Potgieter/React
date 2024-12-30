import { useActionState, useContext } from "react";

import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {

    const { addOpinion } = useContext(OpinionsContext);

    async function shareOpinionAction(prevFormState, fd) {

        // Collect Info
        const data = Object.fromEntries(fd.entries());

        // Validate Info
        let errors = [];
        if (data.userName.trim().length === 0) {
            errors.push("Please Provide a User Name");
        }
        if (data.title.trim().length < 5) {
            errors.push("Title Must Be At Least 5 Characters Long");
        }
        if (data.body.trim().length < 10 || data.body.trim().length > 300) {
            errors.push("Body Must be Between 10 and 300 Characters Long");
        }

        if (errors.length > 0) {
            return ({
                errors,
                enteredVals: data,
            });
        }

        await addOpinion(data);
        return {errors: null};
    }

    const [ formState, formAction ] = useActionState(shareOpinionAction, {errors: null});
    return (
        <div id="new-opinion">
            <h2>Share your opinion!</h2>
            <form action={formAction}>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="userName">Your Name</label>
                        <input 
                            type="text" 
                            id="userName" 
                            name="userName" 
                            defaultValue={formState.enteredVals?.userName}
                        />
                    </p>

                    <p className="control">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            defaultValue={formState.enteredVals?.title}
                        />
                    </p>
                </div>
                <p className="control">
                    <label htmlFor="body">Your Opinion</label>
                    <textarea 
                        id="body" 
                        name="body" 
                        rows={5}
                        defaultValue={formState.enteredVals?.body}
                    ></textarea>
                </p>

                {formState.errors && (
                    <ul className="errors">
                        {formState.errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>)}

                <Submit />
            </form>
        </div>
    );
}
