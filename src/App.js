import "./App.css";
import React, { useRef, useEffect, useState } from "react";

import apple from "./image/apple_logo.png";
import DateTime from "./components/DateTime";
import Prompt from "./components/Prompt";

function App() {
    const inputRef = useRef();
    const [text, setText] = useState("");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="App">
            <div className="MenuBar">
                <div className="LeftSection">
                    <div className="MenuElementStart">
                        <img className="AppleLogo" src={apple} alt="" />
                    </div>
                    <div className="MenuElement">
                        <p>Terminal</p>
                    </div>
                    <div className="MenuElement">
                        <p>Shell</p>
                    </div>
                    <div className="MenuElement">
                        <p>Edit</p>
                    </div>
                    <div className="MenuElement">
                        <p>View</p>
                    </div>
                    <div className="MenuElement">
                        <p>Session</p>
                    </div>
                </div>
                <div className="RightSection">
                    <div className="MenuElementEnd">
                        <DateTime />
                    </div>
                </div>
            </div>
            <div className="Terminal">
                <div className="Top">
                    <div className="BtnSection">
                        <button className="ControlBtn red"></button>
                        <button className="ControlBtn yellow"></button>
                        <button className="ControlBtn green"></button>
                    </div>
                </div>

                <div className="TextArea">
                    <div className="TextBound">
                        {/* {history.map((text) => {
                            return <div>text</div>;
                        })} */}
                        <div className="Input">
                            <Prompt />
                            <div
                                className="TerminalInput"
                                contentEditable={false}
                                spellCheck={false}
                                ref={inputRef}
                                input={text}
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            ></div>
                            <button className="CaretBlock">&nbsp;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
