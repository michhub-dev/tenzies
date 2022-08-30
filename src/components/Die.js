
export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#a3fa6a80" : "#ffffff"
    }
    return (
        <section className={props.darkMode ? "dark" : "#eeeeee"}>
        <div className="die-item-container" 
            style={styles}
            onClick={props.holdDice}>
            <h1 className='die-item'>{props.value}</h1>
        </div>
        </section>
    )
}