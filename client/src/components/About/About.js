import React from 'react';

class About extends React.Component {
    render() {

        return (
            <div className="about-wrapper">
                <h1 className="pageTitle"> - About Us - </h1>
                <div>
                    <h2>Our pizzas</h2>
                    <p>Our pizzas are world class and will guarantee you satisfaction on a physical level as well as psychological.
                    </p>
                    <h2>Our founder</h2>                    
                    <img className="about-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oKQNEjCDSqJsNjOeiCFzur9PB0t9q8pibc-o1HYLLluNfC5r" className="hvr-buzz"/>
                    <h3>Jason Statham</h3>
                    <p>The place was founded in 1982 by famous actor and olympic diver Jason Statham. 
                        He was only 12 years old at the time but that didn't stop him.
                    </p>
                    <audio autoPlay loop>
                        <source src="../../../statham.mp3" type="audio/mp3"/>
                    </audio>
                </div>
            </div>
        )
    }
}
export default About;