import React from "react";

import img from "../img/fanart30.jpeg";

export default function Awards() {
    return (
        <div>
            <h1>Awards</h1>
            <ul>
                <li>
                    Gordon Ramsay in London voted top restuarant United Kindom and has 3 Michellin stars
                </li>
                <li>
                    Officer of the order of the british empire (appointed by Queen Elizabeth) Rest in Peace
                </li>
                <li>
                    Guiness world record for fastest time to fillet a fish: 1 MINUTE 5 seconds
                </li>
                <li>
                    <img src={img}/>
                </li>
                <li>
                    Guiness world record for longest pasta sheet rolled in 60 seconds: 1.45 meters
                </li>
                <li>
                    List of 100 most powerful people
                </li>
            </ul>
        </div>
    );
};