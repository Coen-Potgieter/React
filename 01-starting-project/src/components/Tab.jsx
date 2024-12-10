
export default function Tab({ children, additionalJSX, Container = "menu"}) {
    return (
        <>
            <Container>
                {additionalJSX}
            </Container>
            {children}
        </>
    );
}
