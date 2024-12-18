
import quizLogo from "../assets/quiz-logo.png";


export default function Header() {

    return (
        <section
            className={`bg-violet-950 bg-opacity-20
flex flex-col items-center justify-start gap-5 p-5
mt-5 size-fit mx-auto 
rounded-lg 
`}
        >
            <img 
                src={quizLogo} 
                alt="quiz logo" 
                className="size-48"/>
            <h1
                className="text-5xl font-fingerPaint text-my-teal"
            >
                Coeni's Quiz Game
            </h1>
        </section>
    );
}
