import React from 'react';
import Header from './Header';
import Chatbot from './Chatobot/Chatbot';
import {CoverBot} from './Assests/Images/CoverBot.jpg'
import Title from "./Title/Tittle";
function App() {
    return (
        <div className="Container-fluid">
            <div className="col-container row">
                <div className="header-container col s12">
                    <Header/>
                </div>
                <div className="home-container col s12">
                    <div className="home-contents-container row">
                        <div className="chatbot-content-container col l4">
                            <Title/>
                        </div>
                        <div className="chatbot-content-container col l4">
                            <img src={require('../src/Assests/Images/CoverBot.jpg')} width="auto" height="500"/>
                        </div>
                        <div className="chatbot-content-container col l4">
                            <Chatbot/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
