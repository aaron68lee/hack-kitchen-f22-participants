import React from 'react';
import fanart1 from '../img/fanart1.png';
import fanart2 from '../img/fanart2.jpeg';
import fanart3 from '../img/fanart3.jpeg';
import fanart4 from '../img/fanart4.jpeg';

export default function Home() {
    
    const tag = ["sexy1", "sexy2", "sexy3", "sexy4"];
    
    return (
        <>
            <h1 class = "framed">Welcome to Gordon Ramsey's fanpage!</h1>

            <iframe width={1250} height={315} src="https://www.youtube.com/embed/rEMXENwQZA4" title="YouTube video player" frameborder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen target="_blank"></iframe>
            
            <br/> <a href="https://www.youtube.com/shorts/4k-b6oQykOw" target="_blank" rel="noopener noreferrer"> My love </a>
            
            <p>Above is a video of my beloved idol, Gordon Ramsey. I hope one day I'll be able to visit Hell's Kitchen in Las Vegas! </p>
                <h3>About Us</h3> 
                We are a team of Gordon Ramsey enthusiasts who love to repost his greatest works (as seen above).
                <p>After looking through this website, we hope you'll come to the same conclusion as we did - that Gordon is love ... Gordon is life. </p>

            <p>
                Below are some images of Gordon that we believe represents him best. Enjoy!
            </p>

            <p class = "center">
            <img src={fanart1} alt={tag[0]} height = "300px"/>
            <img src={fanart2} alt={tag[1]} height = "300px"/>
            <img src={fanart3} alt={tag[2]} height = "300px"/>
            <img src={fanart4} alt={tag[3]} height = "300px"/>
            </p>

            <section>
                <h3>DevLog</h3>
                This website is truly a masterpiece. I'm still in shock as to how we managed to design it with the limited budget ($1,000,000) we were allocated by USAC.

                <h1>
                    Add us on Nintendo Switch: 
                </h1>
                <h3>
                    Kenzie:
                </h3>
                <p>       
                    Add me on Nintendo Switch!! (Especially if you play pokemon) SW-2788-5987-6757
                </p>
                <h3>
                Aaron: 
                </h3>
                    <p>Switch: SW-7266-3681-0613 switch friend code</p>
                    <p>Psekai ID: 269716596207980552</p>
                    <p>Genshin: 609800200</p>
                    <p>Dream ID: 9206-3781-5004</p>
                    
                    <br></br>
                    <a href="https://bit.ly/aaronleemusic" target="_blank" rel="noopener noreferrer"> MuseScore </a>
                
            </section>
        </>
    );
};
