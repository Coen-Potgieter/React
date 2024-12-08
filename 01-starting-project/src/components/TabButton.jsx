
export default function TabButton({ children, onSelect }) {
    console.log("TABBUTTON BEING RENDERED");
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

