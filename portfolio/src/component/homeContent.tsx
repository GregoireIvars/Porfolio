import { useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import "../css/home.css";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//Animation d'une section apparant par la gauche 
// const slideInLeft = (elem: any, delay: any, duration: any) => {
//     gsap.fromTo(
//         elem,
//         {
//             opacity: 0,
//             x: -200,
//         },
//         {
//             opacity: 1,
//             x: 0,
//             delay: delay || 0.4,
//             duration: duration || 0.6,
//             scrollTrigger: {
//                 trigger: elem,
//                 start: "top center",
//                 end: "bottom center"
//             }
//         }
//     )
// }

// //Animation d'une section apparant par le Haut
// const slideInTop = (elem: any, delay: any, duration: any) => {
//     gsap.fromTo(
//         elem,
//         {
//             opacity: 0,
//             y: -200,
//         },
//         {
//             opacity: 1,
//             y: 0,
//             delay: delay || 0.4,
//             duration: duration || 0.6,
//             scrollTrigger: {
//                 trigger: elem,
//                 start: "top center",
//                 end: "bottom center"
//             }
//         }
//     )
// }

// //Animation touchant le texte (peut manipuler également le css dynamiquement)
// const OnLoad = () => {
//     gsap.timeline().fromTo(".text", {
//         x: -100,
//         opacity: 0,
//     },
//         {
//             x: 0,
//             opacity: 1,
//             stagger: 0.33,
//             delay: 0.7,
//         }
//     ).to(".text", {
//         y: -20,
//         delay: 0.7,
//         x: -75,
//         fontSize: 25,
//     })
//         .to(window, {
//             duration: 2,
//             scrollTo: "#nextSection"
//         })
// }


function HomeContent() {
    // useEffect(() => {
    //     OnLoad();
    //     slideInTop("#box1", 0.4, 0.6);
    //     slideInLeft("#box2", 0.8, 1);
    // }, [])
    return (
        <>
            <h1 className='' >
              Bienvenu sur mon portfolio !
            </h1>
            <h3>
            Qui suis je ? 
            </h3>
            <p>
                Text présentant la personne (ajouter une petite animation sur ce texte )
            </p>

            <h3>Mes compétences</h3>
            <p>
                Text présentant la personne (ajouter une petite animation sur ce texte )
            </p>
            <button>there is a button</button>
            <h3>Mes Projet</h3>
            <p>
                Text présentant la personne (ajouter une petite animation sur ce texte )
            </p>
            <button>there is a button</button>
            <h3>Mon Parcours</h3>
            <p>
                Text présentant la personne (ajouter une petite animation sur ce texte )
            </p>
            <button>there is a button</button>

            <h2>Mon CV</h2>
            <p>mettre le cv soit à dl soit afficher directement</p>

            <p>footer</p>

            
        </>
    );
};
export default HomeContent;
