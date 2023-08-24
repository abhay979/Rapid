export const TabItem = ({ title, index, active, setActive}) => {
    const style = active? {
        color: "#04048C",
        padding:"15px",
        backgroundColor:"#E4E4E4"
    }:{
      color:"#A4A4A4"
    }
    return (
            <button className="tabbtn" onClick={() => setActive(title)} >
                <span style={style}>
                     <b> {title.toUpperCase()} </b>
                </span>
            </button>
    )
}