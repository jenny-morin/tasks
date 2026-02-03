import React from "react";
import "./App.css";
import img from "./kittenPhoto.jpg";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div
                style={{ width: 200, height: 50, backgroundColor: "red" }}
            ></div>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.Jenny Morin Hello World
            </p>
            <h1>This is my new header</h1>
            <p>This picture of a kitten is</p>
            <img src={img} alt="A picture of a small kitten in grass" />
            <ul>
                <li>amazing</li>
                <li>adorable</li>
                <li>huge</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World!
            </Button>
        </div>
    );
}

export default App;
