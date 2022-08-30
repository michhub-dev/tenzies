

export default function Navbar(props){
    return (
        <nav>
              <img src="" alt="" className="" />
                <h2>Play Tenzies</h2>
            
            <div className="toggler" >
                   <p>Game made easy - Try it</p>
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}