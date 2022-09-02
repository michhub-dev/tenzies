//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

export default function Navbar(props){
    return (
        <nav>
            {/*<FontAwesomeIcon icon={"fa-duotone fa-dice"} className='nav-logo Die-shaking' />*/}
     
                <h3 className="nav-logo-text">Play Tenzies</h3>
            
            <div className="toggler" >
                   <p className="toggle-text">Game made easy - Try it</p>
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}