
const ClearIcon = ({ lineWidth, ...props }) => (

    <svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="none" 
        viewBox="0 0 24 24" 
        {...props}
    >
        <g strokeWidth="0"/>
        <g strokeLinecap="round" strokeLinejoin="round"/>
        <g stroke="currentColor" strokeWidth={lineWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 9 6 6m0-6-6 6"/>
            <circle cx="12" cy="12" r="9"/>
        </g>
    </svg>
)

export default ClearIcon;
