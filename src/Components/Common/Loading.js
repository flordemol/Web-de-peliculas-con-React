import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return ( 
        <ClipLoader 
        color={"green"} 
        css={{display: "block", margin: "0 auto"}} 
        size={150} /> 
     );
}
 
export default Loading;