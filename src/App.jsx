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
} from "./resources";

const App = () => {
    return (
        <React.StrictMode>
            <Game />
        </React.StrictMode>
    );
};
export default App;