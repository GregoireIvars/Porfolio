import '../css/header.css';
import { TEXT_HEADER_P1, TEXT_HEADER_P2, TEXT_HEADER_P3, TEXT_HEADER_P4, TEXT_HEADER_TITLE } from "../constante/constantes";
export default function Header() {

    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul className='navBody'>
                        <a href={""}><h1>{TEXT_HEADER_TITLE}</h1></a>
                        <li>
                            <a href={"/home/1"}>{TEXT_HEADER_P1}</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>{TEXT_HEADER_P2}</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>{TEXT_HEADER_P3}</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>{TEXT_HEADER_P4}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}