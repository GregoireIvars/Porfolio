import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import "../css/home.css";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//Animation d'une section apparant par la gauche 
const slideInLeft = (elem: any, delay: any, duration: any) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            x: -200,
        },
        {
            opacity: 1,
            x: 0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }
        }
    )
}

//Animation d'une section apparant par le Haut
const slideInTop = (elem: any, delay: any, duration: any) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y: -200,
        },
        {
            opacity: 1,
            y: 0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }
        }
    )
}

//Animation touchant le texte (peut manipuler également le css dynamiquement)
const OnLoad = () => {
    gsap.timeline().fromTo(".letter", {
        x: -100,
        opacity: 0,
    },
        {
            x: 0,
            opacity: 1,
            stagger: 0.33,
            delay: 0.7,
        }
    ).to(".title", {
        y: 45,
        delay: 0.7,
    })
    .to(window, {
        duration: 2,
        scrollTo: "#nextSection"
    })
}


function HomeContent() {
    useEffect(() => {
        OnLoad();
        slideInTop("#box1", 0.4, 0.6);
        slideInLeft("#box2", 0.8, 1);
    }, [])
    return (
        <>
                <h1 className='title' >
                    <span className='letter'>H</span>
                    <span className='letter'>E</span>
                    <span className='letter'>L</span>
                    <span className='letter'>L</span>
                    <span className='letter'>O</span>
                </h1>
            <section id='nextSection'>
                <div id='box1' className='box'>
                    <p>Block Top</p>
                </div>
                <div id='box2' className='box'>
                <p>Block Left</p>
                </div>
            </section>
        </>
    );
};
export default HomeContent;
