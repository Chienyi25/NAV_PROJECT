import react from 'react'

function Hero(){
    return(
    <div style={{
        backgroundColor:"blue",
        width:"100%",
        height:"500px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }}>
        <p style={{
            color:"white",
            fontSize:"30px",
        }}>
            The perfect lightweight theme for your next project.
        </p>
    </div>);
}
export default Hero;