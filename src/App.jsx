import React from "react";
import {
    Misc,
    Basics,
    Drei,
    Debug,
    EnvStaging,
    Models,
    Text,
    Portal,
    MouseEvents,
    PostProcessing,
    HTMLRenderer,
    Physics
} from "./resources";

const App = () => {
    return (
        <React.StrictMode>
            <Physics />
        </React.StrictMode>
    );
};
export default App;