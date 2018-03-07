import React from 'react';

class About extends React.Component {
    render() {

        return (
            <div>
                <h1>The founder of statham pizza is no other than JSON Statham</h1>
                <div>
                    <h2>Jason Sjálfur</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oKQNEjCDSqJsNjOeiCFzur9PB0t9q8pibc-o1HYLLluNfC5r" className="hvr-buzz"/>
                    <audio autoPlay loop>
                    <source src="../../../statham.mp3" type="audio/mp3"/>
                </audio>
                </div>
            </div>
        )
    }
}
export default About;