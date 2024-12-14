

export default function UserInput({ ref, label, ...props}) {

    return (
        <div className="flex justify-around gap-20"> 
            <label className="text-xl font-mono text-my-dark-orange">
                {label}
            </label>
            <input 
                ref={ref}
                className="border-my-beige border-2 ps-4 bg-transparent text-center text-my-beige"
                {...props}/>
        </div>
    )
}
