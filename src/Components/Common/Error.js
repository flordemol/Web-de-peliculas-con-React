const Error = ({info}) => {

    const styleError = {
        background: "cadetblue",
        display: "inline",
        padding: "10px",
        borderRadius: "25px",
        
    }

    return ( 
        <div style={{margin: "30px"}}>
            <h4 style={styleError}>{info}</h4>
        </div>
     );
}
 
export default Error;