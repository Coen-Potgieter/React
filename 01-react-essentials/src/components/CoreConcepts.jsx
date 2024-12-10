
import { CONCEPT_ITEMS } from "../data";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CONCEPT_ITEMS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            </ul>
        </Section>
    );
}
