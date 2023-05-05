import '../css/header.css';
export default function Header() {
    
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul className='navBody'>
                        <a href={""}><h1>Portfolio</h1></a>
                        <li>
                            <a href={"/home/1"}>Accueil</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>Boutique</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>Nouveauté</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>À propos</a>
                        </li>
                        <li>
                            <a href={"/home/1"}>Contact</a>
                        </li>
                        <li>
                            <a className="profil" href={"/home/1"}>Profils</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}