
const TrashIcon = ({ lineWidth, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={lineWidth}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2v0a2 2 0 002 2h4a2 2 0 002-2v0a2 2 0 00-2-2m-4 0h4M9 11v6m3-6v6m3-6v6"
        />
    </svg>
);

export default TrashIcon;

