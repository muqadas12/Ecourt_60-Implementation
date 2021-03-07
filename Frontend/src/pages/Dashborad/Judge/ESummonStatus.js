import React from "react";
import arrestwarrant from "../../../assets/Images/abc.jpg";
import arrestwarranticon from "../../../assets/Images/awi.PNG";
import {Link } from "react-router-dom"
import "./SummonStatus.css"
const ESumonStatus=()=>{
    return(
        <div>
            <img className="arrestwarr-image" src={arrestwarrant}/>
            <h3 className="heading-one-issue-warrant">Esummon Status:</h3>
            <p>If the Summon is serve and person not appeared within due days in court the juge issue arrest warrant</p>
           
           <Link to="/ArrestWarrant"><img className="icon-arrest"  src={arrestwarranticon}/></Link> 
           <Link to="/ArrestWarrant"  className="click-arrest">Click here to issue arrest warrant</Link>


          
        </div>
    )
}
export default ESumonStatus;