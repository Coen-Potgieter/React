
export default function UserView({ label, InputElem, isDisabled, className, startingValue, ...props }) {

    if (isDisabled) {
        className += " bg-transparent"
    } else {

        className += " animate-pulseText bg-my-beige"
    }

    const valueProp = isDisabled ? { value: startingValue} : { defaultValue: startingValue};

    return (
        <div
            className="flex flex-col items-center text-my-dark-orange pt-4 justify-center"
        >
            <label
                className="text-2xl font-mono"
            >
                {label}
            </label>
            <InputElem 
                disabled={isDisabled}
                {...valueProp}
                {...props}
                className={`
py-2 px-4 text-center 
font-mono text-xl text-black 
rounded-lg 
focus:animate-none focus:bg-my-green
focus:outline-none

${className}`}
            />
        </div>
    );
}
