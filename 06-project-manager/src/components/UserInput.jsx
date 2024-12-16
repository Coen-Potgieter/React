

export default function UserInput({ ref, label, InputElem, className, ...props}) {

    return (
        <div className="flex justify-around gap-20"> 
            <label className="text-xl font-mono text-my-dark-orange">
                {label}
            </label>
            <InputElem 
                ref={ref}
                className={`
py-1 px-4 bg-transparent text-center text-my-dark-orange 
border-my-light-orange rounded-md border-4 text-xl placeholder-my-light-orange 
focus:outline-my-dark-orange focus:ring-2 focus:ring-my-dark-orange ${className}
`}
                {...props}/>
        </div>
    )
}
