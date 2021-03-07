
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// // import "./Latest.css";
// import judgment from "../../assets/Images/summ.jpg";
// import Box from "../../components/BoxSummon"
//  import "./ESummon.css"

// const ESummonCMS= () => {

//   const [caseNumber, setcaseNumber] = useState("");
//   const [data, setData] = useState([]);
//   const [DateofHearing, setDateofHearing] = useState([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     axios
//       .get('http://localhost:2000/api/lawyer/viewaccept')
//       .then((res) => {
//         setData(res.data.dataL);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  
  




//   return (

//     <div>
//       <img className="resss-image" src={judgment} />

//       <h3 className="j-search">Case Status:</h3>
//       <br />
//       <Box />
//       <br />

//       <form className="d-flex flex-column justify-content-center align-items-center">

//         <label className="summon-name-case-no">Case No:</label>
      

//       </form>
//       <br/>
//       <br/>
      
//       <br/>
//       <br/>
//       {show ? (
//         <>

//           <div className="row">
//             <div className="col-md-2 mb-3 d-flex">
             

             
            
              
//               <div className="n-cssss">
//                 <span >List of Accepted Case:</span>
//               </div>
              
//             </div>
//             <div className="col-md-1 mb-3 h-80vh">

//               {data.map((list) => {
//                 const {
//                  caseNumber,
//                  DateofHearing
                 

//                 } = list;
//                 return (


//                   <div
//                     key={caseNumber}
//                     className="row justify-content-around p-3 align-items-center shadow-sm"
//                   >

                   
//                     <div className="casestatus">
//                     <span >{caseNumber}</span>
//                     </div>
//                     <div className="casestatus">
//                     <span >{DateofHearing}</span>
//                     </div>
                   
                    




//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </>) : null}
      //  <p>Want to generate online summon?<a href="/GenerateSummon">Click here to go to page that generate online summon </a></p>

       
//     </div>

//   )
// }
// export default ESummonCMS;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container,Col,Row } from "reactstrap";
import judgment from "../../assets/Images/es.jpg";
import Box from "../../components/BoxSummon"
 import "./ESummon.css"

export const ESummonCMS = () => {
  let [dataJudgment, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/viewaccept")
      .then((res) => {
        console.log(res.dataJudgment)
        setData(res.data.dataL);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

 
  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value);
    
  
  }
  

  


  return (
    <div>
     <img className="resss-image" src={judgment} />
    <h2 className="cause-list-search">List of Accepted Case:</h2>
  
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <>
            
          </>
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div >

                <span className="acceptedcasenumber">Case number</span>
              </div>

              <div className="accepteddateofhearing">
                <span>Date of hearing</span>
              </div>

             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {dataJudgment.map((list) => {
                const {
                    caseNumber,
                    DateofHearing
                } = list;
                return (
                 
                  
                    <div
                    key={caseNumber}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >
                    
                     
                    <div className="casenumacc">
                    
                      <span className="text-capitalize">{caseNumber}</span>
                    </div>
                  
                    <div className="hearingdate">
                      <span>{DateofHearing}</span>
                    </div>

                   
          
                    
                    
          
                   </div>
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
        <br/>
        <br/>
               <p>Want to generate online summon?<a href="/GenerateSummon">Click here to go to page that generate online summon </a></p>

      </div>
      
    </Container>
    </div>
  );
};
export default ESummonCMS;













