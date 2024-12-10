import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";

import { EXAMPLES } from "../data.js";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please Select a Topic</p>;
    if (selectedTopic) {
        tabContent = (
            <section id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </section>
        );

    }

    return (
        <Section title="Examples" id="examples">
            <Tab Container="menu" additionalJSX={(
                <>
                    <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleClick("components")}> Component</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")}>State</TabButton>
                </>
            )}>
                {tabContent}
            </Tab>
        </Section>
    );
}
