
export default function Headaer() {
    return (
        <header className="flex flex-col items-center w-screen gap-8">
            <img 
                src="logo.png" alt="logo-png" 
                className="mt-14 size-28"
            />
            <h2 className="text-2xl font-mono text-my-dark-orange mb-14">
                Project Manager
            </h2>
        </header>
    )
}
