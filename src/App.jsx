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
    Physics,
    Game,
    Configurator,
    Landing,
    Shaders,
    ExplodingMesh,
} from "./resources";

const App = () => {
    return (
        <React.StrictMode>
            <ExplodingMesh />
        </React.StrictMode>
    );
};
export default App;