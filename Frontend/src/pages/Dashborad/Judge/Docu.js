
import React, { useEffect, useState } from "react";
import axios from "axios";import { Container,Col,Row } from "reactstrap";
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
import judgments from "../../../assets/Images/ve3.jpg";
import pdf from "../../../assets/Images/pdf.PNG"
import {Spinner} from "react-bootstrap"
import Record from "./RecordCase"
import "./Docu.css"

export const Docu = (props) => {
  let [data, setData] = useState([]);
  let [dataa, setDataList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");
  const [LawyerNameField, setLawyerNameField] = useState("");
  const [PartyNameField, setPartyNameField] = useState("");
  const [uploadPlaintField, setuploadPlaintField] = useState("");
  const [uploadDocxField, setuploadDocxField] = useState("");





  

  
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/CMS/data/updaterecord")
      .then((res) => {
        console.log(res.data)
        setDataList(res.data.dataList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
    axios
      .get("http://localhost:2000/api/admin/record")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
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
     
   
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
         
            <Spinner animation="grow" />
          
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              

            <div>
              <span className="affidoc">Affidavit</span>
              </div>
              <div>
              <span className="vaqallat">Vaqalat Nama</span>
              </div>
              <div>
              <span className="wit">Witness</span>
              </div>
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {data.map((list) => {
                const {
                   
               patha,
               pathb,
               pathc,
               pathd,
               pathe,
               pathf,
               pathg,
               pathh,
               pathi,
               pathj,
               pathk,
               pathl,
               pathm,
               pathn,
               patho


                } = list;
                return (
                 
                  
                  <div className="row">
                  <div className="col-md-12 mb-3 d-flex">
                    
                     <Record/>
                   
                  

                 
                    
                    {/* <div className="col-md-2 ">
                      <a href={patha}><img className="pathg" src={pdf}/></a>
                    </div> */}
                     <div className="col-md-2 ">
                      <a href={patha}><img className="aaaone" src={pdf}/></a>
                    </div>
                    <div>
                      <a href={pathb}><img className="atwo" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2 ">
                      <a href={pathc}><img className="b" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2 ">
                      <a href={pathd}><img className="c" src={pdf}/></a>
                    </div>
                    {/* second */}
                    <div className="col-md-2 ">
                      <a href={pathe}><img className="aaa"  src={pdf}/></a>
                    </div>
                    <div className="col-md-2 ">
                      <a href={pathf}><img className="e" src={pdf}/></a>
                    </div>
                    <div className="col-md-2 ">
                      <a href={pathg}><img  className="f" src={pdf}/></a>
                    </div>
                   
                    {/* third */}
                   
                    <div className="col-md-2 ">
                      <a href={pathh}><img className="h"  src={pdf}/></a>
                    </div>
                    <div className="col-md-2 ">
                      <a href={pathi}><img className="i" src={pdf}/></a>
                    </div>
                    <div className="col-md-2 ">
                      <a href={pathj}><img className="j" src={pdf}/></a>
                    </div>
                    
                    <div className="col-md-2 ">
                      <a href={pathk}><img className="l" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2">
                      <a href={pathl}><img className="m" src={pdf}/></a>
                    </div>
                     
                    <div className="col-md-2 ">
                      <a href={pathm}><img className="n" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2" >
                      <a href={pathn}><img className="nn" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2">
                      <a href={patho}><img className="last" src={pdf}/></a>
                    </div> 
                    
                   
                 
                   

                    
                    
          
                   </div>
                   
                   </div>
                   
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
      </div>
      
    </Container>
    </div>
  );
};
export default Docu;








