
export default function UserView({ label, InputElem, isDisabled, className, ...props }) {

    if (isDisabled) {
        className += " bg-transparent"
    } else {

        className += " animate-pulseText bg-my-light-orange"
    }

    return (
        <div
            className="flex flex-col items-start bg-my-dark-orange pt-4 justify-center"
        >
            <label>
                {label}
            </label>
            <InputElem 
                disabled={isDisabled}
                className={`items-center bg-stone-100 text-black focus:animate-none ${className}`}
                {...props}
            />
        </div>
    );
}
