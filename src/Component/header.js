import react from 'react'
import design from '../App';
function Header(){
    return(
        <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
                width:"100%",
                height:"100px",
                backgroundColor:"black"
    }}
    >
            <div style={{display:"flex",
                width:"50%",
                justifyContent:"space-around",
                
            }}>
        <a style={{
            color:"white",
            textDecoration:"none",
        }}
        href='#'>Home
        </a>
        <a style={{
            color:"white",
            textDecoration:"none",
        }}
        href='#'>About
        </a>
        <a style={{
            color:"white",
            textDecoration:"none",
        }}
        href='#'>Best Deals
        </a>
        <a style={{
            color:"white",
            textDecoration:"none",
        }}
        href='#'>Tools
        </a>
        <a style={{
            color:"white",
            textDecoration:"none",
        }}
        href='#'>Contact
        </a>
            </div>
        
      </div>
    );
    }
    export default Header