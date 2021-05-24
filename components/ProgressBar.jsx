/* This component represents Progress bar shown in About.js*/

const ProgressBar = (props) => {
    const { percentage } = props;

     /*style for whole bar*/
    const containerStyle = {
        height: 10,
        backgroundColor: "#CDE1F8",
        marginTop:8,
        marginBottom: 19.2,
        marginLeft: 20,
        marginRight:20,
    }

    /*style for child div */
    const filterStyles = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: "#313F9F",
        borderRadius: 'inherit',
        textAlign: 'right',   
    }

    return ( 
        /*main parent div: represents the whole bar, child div represents percentage */
        <div style={containerStyle}>
            <div style={filterStyles}></div>
        </div>
     );
}
 
export default ProgressBar;