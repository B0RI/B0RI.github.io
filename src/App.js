import "./App.css";
import apple from "./image/apple_logo.png";
import DateTime from "./components/DateTime";

function App() {
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
                        <div className="Prompt"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
