
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Viewfile.css"
import { Container,Col,Row } from "reactstrap";
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
import judgments from "../../../assets/Images/ve3.jpg";
import pdf from "../../../assets/Images/pdf.PNG"
import {Spinner} from "react-bootstrap"


export const ViewEFiling = (props) => {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");
  const [LawyerNameField, setLawyerNameField] = useState("");
  const [PartyNameField, setPartyNameField] = useState("");
  const [uploadPlaintField, setuploadPlaintField] = useState("");
  const [uploadDocxField, setuploadDocxField] = useState("");





  

  const onSubmit = (id) => {
   
    axios.delete(`http://localhost:2000/api/lawyer/delete/file/${id}`)
      .then((res) => {
       console.log(res)
      })
      .catch((err) => {
      });
  };
  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/record")
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
     <img className="fileview-image" src={judgments} />
    <h2 className="cause-list-search">View EFiling:</h2>
   
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
         
            <Spinner animation="grow" />
          
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text-capitalize h5 font-weight-bold">LawyerName</span>
              </div>

              <div className="col-md-2 d-flex h5 font-weight-bold">
                <span>PartyName</span>
              </div>

              <div className="col-md-2 font-weight-bold h5">
                <span >Plaint</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span >Case Docx</span>
              </div>

              <div className="col-md-2 font-weight-bold h5">
                <span >Accept</span>
              </div>
             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {data.map((list) => {
                const {
                   LawyerName,
                   PartyName,
                  
                  pathu,
                  pathq,
                   uploadDocx

                } = list;
                return (
                 
                  
                  <div className="row">
                  <div className="col-md-12 mb-3 d-flex">
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="text-capitalize">{LawyerName}</span>
                    </div>
                  
                    <div className="col-md-4 d-flex">
                      <span>{PartyName}</span>
                    </div>
                   
                  

                   
                    
                    <div className="col-md-2 ">
                      <a href={pathu}><img className="pdf-affiii" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2 ">
                      <a href={pathq}><img className="pdf-affiii" src={pdf}/></a>
                    </div> 
                    <div className="col-md-2 ">
                      <button  className="button-viewfilingacceptcase"  onClick={() => {
                props.history.push("/AcceptCase");
              }}
                      >Accept Case</button>
                      </div>
                     {/* <div className="col-md-2 ">
                    <a href= {uploadPlaint}><img className="pdf-affi" src={pdf}/></a>

                    </div>  */}
                   

                    
                    
          
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
export default ViewEFiling;










