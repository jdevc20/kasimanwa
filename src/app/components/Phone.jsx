import React from 'react';
import Message from './Message';
import Paraw from './Paraw';


const Phone = () => {
    return (
        <div className="container">
            <div id="phone">
                <PhoneHeader />
                <PhoneScreen />
                <PhoneFooter />
            </div>
        </div>
    );
};

const PhoneHeader = () => (
    <div id="phoneheader">
        <div id="phonecamera"></div>
        <div id="phonespeaker"></div>
    </div>
);

const PhoneScreen = () => (
    <div id="screen">
        <Paraw/>
        <Message/>

    </div>
);

const PhoneFooter = () => (
    <div id="phonefooter">
        <div id="homebutton"></div>
    </div>
);

export default Phone;
