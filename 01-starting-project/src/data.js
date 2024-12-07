import compImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";


export const CONCEPT_ITEMS = [
    {
        img: compImg,
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components.",
    },
    {
        img: jsxImg,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
    },
    {
        img: propsImg,
        title: "Props",
        description: "Make components configurable (and therfore reusable) by passing input data to them."
    },
    {
        img: stateImg,
        title: "State",
        description: "React-managed data which, when changed, causes the component to re-render & the UI to update."
    },
];