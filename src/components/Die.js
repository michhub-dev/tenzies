
export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#a3fa6a80" : "#ffffff"
    }
    return (
        <div className="die-item-container" style={styles}>
            <h1 className='die-item'>{props.value}</h1>
        </div>
    )
}