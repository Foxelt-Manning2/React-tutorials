
function Button (){
    const styles ={
        backgroundColor:" hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer",
        boxShadow: "5px 2px 3px hsl(323, 100%, 50%)",
    }
    return(<>
    <br />
    <button style={styles}>Click Me</button>
    </>);
}
export default Button