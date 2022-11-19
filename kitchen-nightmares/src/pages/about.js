import React from "react";
import screenshot from "../img/gordon-ramsay-life.png"

export default function About() {
    return (
        <div class = "center">
            <h1 class = "framed">About Gordon Ramsay</h1>
            <img src={screenshot} alt={"Gordon's beautiful face."} width={100} height={100}/>
            <br/> <a href="https://www.gordonramsay.com/" target="_blank" rel="noopener noreferrer"> His Honor </a>
            <p> Gordon Ramsay, born November 8, 1966, Johnstone, Scotland, Scottish chef and restaurateur known for his highly acclaimed restaurants and cookbooks but perhaps best known in the early 21st century for the profanity and fiery temper that he freely displayed on television cooking programs. </p>
        </div>
    );
};