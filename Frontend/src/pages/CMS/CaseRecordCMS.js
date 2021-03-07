
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container,Col,Row } from "reactstrap";
import judgments from "../../assets/Images/cr1.jpg";
import { useForm } from 'react-hook-form';
import pdf from "../../assets/Images/pdf.PNG"
import * as ReactBootStrap from  "react-bootstrap"
import affidavitone from "../../pdfs/Affidavit_h.pdf"
import affidavittwo from "../../pdfs/Affidavit_a.pdf"
import affidavitthree from "../../pdfs/Affidavit_f.pdf"
import affidavitfour from "../../pdfs/Affidavit_d.pdf"
import affidavitfive from "../../pdfs/Affidavit_mn.pdf"
import vakalatnamaone from "../../pdfs/vakalat_kundi.pdf"

import vakalatnamatwo from "../../pdfs/vakalat_amjad.pdf"
import vakalatnamathree from "../../pdfs/vakalat_tanveer.pdf"
import vakalatnamafour from "../../pdfs/vakalat_imran.pdf"
import vakalatnamafive from "../../pdfs/vakalat_afnan.pdf"

import witnesstwo from "../../pdfs/Witness_2_services.pdf"
import witnessfive from "../../pdfs/Witness_afnan_5.pdf"



import "./Record.css";


const CaseRecordCMS = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [data, setData] = useState([]);
  const [uploadAffidavit, setuploadAffidavit] = useState();
  const [uploadVaqalat, setuploadVaqalat] = useState();
  const [uploadWitness, setuploadWitness] = useState();
  const[loading,setloading]=useState(false);


  const [isLoading, setIsLoading] = useState(true);
  const[Namefield,setNameField]=useState();
  const[Partyfield,setPartyField]=useState();
  const [uploadPlaint, setuploadPlaint] = useState();
  const [uploadDocx, setuploadDocx] = useState();
  const [affidavitone, setaffidavitone] = useState();
  const [affidavitTwo, setaffidavitTwo] = useState();
  const [affidavitThree, setaffidavitThree] = useState();
  const [affidavitFour, setaffidavitFour] = useState();
  const [affidavitFive, setaffidavitFive] = useState();

  const [Vaqalatone, setVaqalatone] = useState();
  const [Vaqalattwo, setVaqalattwo] = useState();
  const [Vaqalatthree, setVaqalatthree] = useState();
  const [Vaqalatfour, setVaqalatfour] = useState();
  const [Vaqalatfive, setVaqalatfive] = useState();

  const [Witnessone, setWitnessone] = useState();
  const [Witnesstwo, setWitnesstwo] = useState();
  const [Witnessthree, setWitnessthree] = useState();
  const [Witnessfour, setWitnessfour] = useState();
  const [Witnessfive, setWitnessfive] = useState();





  
  const send = event => {
    const filesArray = [];
    filesArray.push(affidavitone);
    filesArray.push(affidavitTwo);

    filesArray.push(affidavitThree);
    filesArray.push(affidavitFour);
    filesArray.push(affidavitFive);
    filesArray.push(affidavitone);

    filesArray.push(Vaqalatone);
    filesArray.push(Vaqalattwo);
    filesArray.push(Vaqalatthree);
    filesArray.push(Vaqalatfour);
    filesArray.push(Vaqalatfive);
    filesArray.push(Witnessone);
    filesArray.push(Witnesstwo);
    filesArray.push(Witnessthree);
    filesArray.push(Witnessfour);
    filesArray.push(Witnessfive);



   
    const formdata = new FormData();
    filesArray.map((file) => formdata.append("image", file));
  
   
    axios.post("http://localhost:2000/api/admin/doc", formdata
    ).then(res => {
      console.log(res);
      alert("Your case has been filed!")

    }).catch(err => {
      console.log(err)
    })
  }


  const[input,setInput]=useState("");
  const onSubmit = (id) => {
    console.log(id, Namefield, Partyfield);
    const newData = {};
    if (Namefield !== "") {
      newData.Name =  Namefield;
    };
    if (Partyfield !== "") {
      newData.Party = Partyfield;
    };
   
    console.log(newData);
    axios
      .patch(`http://localhost:2000/api/CMS/update/caseRecord/dattaa/${id}`, newData)
      .then((res) => {
        data.map(dataa => {
          if (dataa._id === id) {
            if (Namefield !== "") {
              dataa.Name = Namefield;
            };
            if (Partyfield !== "") {
              dataa.Party = Partyfield;
            };
          
          }
        });
       
      })
      .catch((err) => {
      });
  };



  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/CMS/data/updaterecord")
      .then((res) => {
        console.log(res.dataList)
        setData(res.data.dataList);
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
            <img className="caseinfo-image" src={judgments} />

    <h4 className="cause-list-search">Update Case Records:</h4>
    <br/>
    <br/>
    
    <Container >
      <div >
        {isLoading ? (
                     <ReactBootStrap.Spinner animation="border" />

        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="namecms">Lawyer Name</span>
              </div>

              <div className="partycms">
                <span>Party Name</span>
              </div>
              <div className="afficms">
                <span>Affidavit</span>
              </div>
              <div className="vaqalat-caserecordscms">
                <span>Vaqalat Nama</span>
              </div>
              <div className="witness-caserecordscms">
                <span>Witness</span>
              </div>



             
              <div >
              </div>
            </div>



            <div >

            
              {data.map((list) => {
                const {
                  Name,
                   Party,
                   Affidavit,
                   VaqalatNama,
                   witness
                } = list;
             
                return (
                 
                  
                    <div
                    key={Name}
                    className="row justify-content-around p-3 align-items-center shadow-sm">
            
                    
                     
            <div className="text-left">
                        <textarea  
                         
                          type="textnameCaserecord"
                          name="Name"
                          placeholder={Name}
                          onChange={(e) => setNameField(e.target.value)}
                        />
                       
                        </div>
                     
                      <div className="text-left">
                        <textarea
                         
                          type="textpartynamecaserecord"
                          name="Party"
                          placeholder={Party}
                          onChange={(e) => setPartyField(e.target.value)}
                        />
                      </div> 
                     
                      <div class="col-md-1">
                        <div className="btn-update-cmsss" type="submit" onClick={() => onSubmit(list._id)} >Update</div>
                      </div>
                   
          
                    
                    
          
                   </div>
                )
                
              })}
             
              
            </div>
            
           
          </div>
        )}
      </div>
      
    
    <form>
      <div className="affone">
      <a href={affidavitone }><img className="pdfone-aff"  src={pdf}/></a>

        <input  type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitone = event.target.files[0]
          setaffidavitone(affidavitone)
          console.log(affidavitone)
        }} />
        </div>
        <br />
        <div className="vaqalone">
        
        <a href={vakalatnamaone}><img className="pdf-vq" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatone = event.target.files[0]
          setVaqalatone(Vaqalatone)
          console.log(Vaqalatone)
        }} />
        </div>
        <div className="wone">
        <a href={witnesstwo}><img className="pdf-witness-one" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

const Witnessone = event.target.files[0]
setWitnessone(Witnessone)
console.log(Witnessone)
}} />

</div>
{/* //secon */}
<div className="afftwo">
<a href={affidavittwo}><img className="pdf-afftwo" src={pdf}/></a>

        <input  type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitTwo = event.target.files[0]
          setaffidavitTwo(affidavitTwo)
          console.log(affidavitTwo)
        }} />
        </div>
        <br />
        <div className="vaqaltwo">
        <a href={vakalatnamatwo}><img className="pdf-vqtwo" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalattwo = event.target.files[0]
          setVaqalattwo(Vaqalattwo)
          console.log(Vaqalattwo)
        }} />
        </div>
        <div className="wtwo">
        <a href={witnesstwo}><img className="pdf-witnesstwo" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

const Witnesstwo = event.target.files[0]
setWitnessone(Witnesstwo)
console.log(Witnesstwo)
}} />
</div>
{/* //third */}
<div className="affthree">

<a href={affidavitthree}><img className="pdf-affthree" src={pdf}/></a>

        <input  type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitThree = event.target.files[0]
          setaffidavitThree(affidavitThree)
          console.log(affidavitThree)
        }} />
        </div>
        <br />
        <div className="vaqalthree">
        <a href={vakalatnamathree}><img className="pdf-vaqaltthree" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatthree = event.target.files[0]
          setVaqalatthree(Vaqalatthree)
          console.log(Vaqalatthree)
        }} />
        </div>
        <div className="wtthree">
        <a href={witnessfive}><img className="pdf-witthree" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

const Witnessthree = event.target.files[0]
setWitnessthree(Witnessthree)
console.log(Witnessthree)
}} />
</div>
{/* //four */}
<div className="afffour">
<a href={affidavitfour}><img className="pdf-afffour" src={pdf}/></a>

        <input  type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitFour = event.target.files[0]
          setaffidavitFour(affidavitFour)
          console.log(affidavitFour)
        }} />
        </div>
        <br />
        <div className="vaqalfour">
        <a href={vakalatnamafour}><img className="pdf-vaqalfour" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatfour = event.target.files[0]
          setVaqalatfour(Vaqalatfour)
          console.log(Vaqalatfour)
        }} />
        </div>
        <div className="wfour">
        <a href={witnesstwo}><img className="pdff-witfour" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

const Witnessfour = event.target.files[0]
setWitnessfour(Witnessfour)
console.log(Witnessfour)
}} />
</div>
{/* //five */}
<div className="aff">
<a href={affidavitfive}><img className="pdf-afffive" src={pdf}/></a>

        <input  type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitFive = event.target.files[0]
          setaffidavitFive(affidavitFive)
          console.log(affidavitFive)
        }} />
        </div>
        <br />
        
        <div className="vaqalfive">
        <a href={vakalatnamafive}><img className="pdf-vfive" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatfive = event.target.files[0]
          setVaqalatfive(Vaqalatfive)
          console.log(Vaqalatfive)
        }} />
        </div>
        <div className="wfive">
        <a href={Witnessfive}><img className="pdff-wfive" src={pdf}/></a>

        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

const Witnessfive = event.target.files[0]
setWitnessfive(Witnessfive)
console.log(Witnessfive)
}} />
</div>
      </form>
      </Container>
      <button onClick={send} 
      className="cmsupdatedfileupload"
      
      
      >Submit Updated Files</button>
    </div>
   
  );
};
export default CaseRecordCMS ;










