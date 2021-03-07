// import React from "react";
// import judgment from "../../../assets/Images/payment.jpg";
// import "./CourtFee.css"
// import PaymentCard from "../../../shared/UIElements/PaymentCard"

// const CourtFee=()=>{
//     return(
//         <div>
//         <img className="resss-image" src={judgment} />
//     <h2 className="c-f">Pay CourtFee</h2>
//     <PaymentCard >
//         <p className="court-fee">Please fill the following fields to pay court fee</p>
//     <form action="#" method="post" enctype="multipart/formdata" >
//         <label className="cf-cn">Case number:</label>
//         <input type="textt" name="casenumber"/>
//         <br/>
//         <br/>
//         <label className="cf-cn">Case year:</label>
//         <input type="textt" name="case year"/>
//     </form>

//     </PaymentCard>
    
//     </div>
//     )
// }
// export default CourtFee;



import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CourtFee.css"
// import "./Latest.css";
import judgment from "../../../assets/Images/payment.jpg";
import Box from "../../../components/BoxFee"
import "./Status.css"
import { MDBInput } from 'mdbreact';
import { Form, Checkbox } from 'semantic-ui-react'
import OnlinePay from "./OnlinePay"


const PayOnline= (props) => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  const [show, setShow] = useState(false);
  const[tncc,settncc]= useState(false);
  const items=[
    {
      label:'Submitted', checked:'true',
      label:'Not Submitted', checked:'false',

    }
  ]

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/fee/all')
      .then((res) => {
        setData(res.data.dataFee);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangeCaseyear = (e) => {
    console.log(e.target.value);
    setCaseyear(e.target.value);
  }
const handlesubmitedfee=(event)=>{
  
  if(event.target.checked){
    alert('You have already submiited Fee')
 } else {
   alert('Please Click on next to pay online fee')
   window.location = "http://localhost:3000/OnlinePay";
 }
    
}



  return (

    <div>
      <img className="ressiis-image" src={judgment} />

      <h3 className="j-search">Court Fee:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="fee-case-no">Case No:</label>
        <select className="option-fee-case-no"
          // className="w-50 py-2"
          onChange={handleChangeCaseno}>
          <option 
          name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="fee-case-year">Case Year:</label>
        <select
          onChange={handleChangeCaseyear}
          className="fee-option-year">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : null}

        </select>
        {/* <label className="check-fee-status">Fee Status: </label>
        <label for="myCheck">Submitted:</label> 
        <input type="Checkbox" name="submitted" onChange={handlesubmitedfee}/> */}

        


      </form>
      <br/>
      <br/>
      {/* <button onClick={handlesubmitedfee}  className="fee-search-btn">Next </ button> */}
      <OnlinePay/>
      <br/>
      <br/>
     
    </div>

  )
}
export default PayOnline;









