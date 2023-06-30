//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";



export function TrafficLight (){
    const [color, setColor] = useState("")
    const [activePurple, setActivePurple] = useState(false)

const selectedColor = (lightColor) =>{
    if (lightColor === color){
        setColor("")
    } else{
        setColor(lightColor)
    }
}
    return(
        <React.Fragment>
            <div className="holder"></div>
		    <div className="traffic-light">
                <div className={`light-red ${
                    color === "red" ? "shadows" : ""  
                }`} onClick={(event)=>{
                    console.log("red")
                    selectedColor("red")
                }}>
                </div>
                <div className={`light-yellow ${
                    color=="yellow" ? "shadows" : ""  
                }`} onClick={(event)=>{
                    console.log("yellow")
                    selectedColor("yellow")
                }}>
                </div>
                <div className={`light-green ${
                    color=="green" ? "shadows" : ""  
                }`} onClick={(event)=>{
                    console.log("green")
                    selectedColor("green")
                }}>
                </div>
                {activePurple === true ? (<div className={`light-green ${
                    color=="green" ? "shadows" : ""  
                }`} onClick={(event)=>{
                    console.log("green")
                    selectedColor("green")
                }}>
                </div>) : null }
		    </div>
            <div>
                <button className="btn btn-primary" onClick={() => setActivePurple(!activePurple)}> {activePurple ? "Desactivar" : "Activar"} </button>
            </div>
        </React.Fragment> 
    )
}
