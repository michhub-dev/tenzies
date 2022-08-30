{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
*/} 

export default function Navbar(props){
    return (
        <nav>
            { /*<i class="fa-solid fa-dice" className="nav-logo " />*/}
             
                <h2 className="nav-logo-text">Play Tenzies</h2>
            
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