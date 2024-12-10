function CoreConcept({ img, title, description }) {
    return (
    <li>
        <img src={img} alt={`${title}} Image`} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
);
}

export default CoreConcept;
