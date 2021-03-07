import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CauseList.css";
import caseInfo from "../../assets/Images/cau.jpg";
import Box from "../../components/Box"
import {
  GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Filter, Edit, Toolbar, ToolbarItems,
  EditSettingsModel
}
  from "@syncfusion/ej2-react-grids"
import { useForm } from 'react-hook-form';
import { Query } from "@syncfusion/ej2-data"
// import {AgGridReact} from "ag-grid-react"
// import 'ag-grid-community/dist/styles/ag-grid.css';

const CauseListCMS = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
  const [caseNumberField, setCaseNumberField] = useState("");
  const [caseYearField, setCaseYearField] = useState("");
  const [partyNameField, setpartyNameField] = useState("");
  const [FixationTimeField, setFixationTimeField] = useState("");
  const [lawyerField, setLawyerField] = useState("");


  const onSubmit = (id) => {
    console.log(id, caseNumberField, caseYearField, FixationTimeField, partyNameField, lawyerField);
    const newData = {};
    if (caseYearField !== "") {
      newData.caseYear = caseYearField;
    };
    if (FixationTimeField !== "") {
      newData.FixationTime = FixationTimeField;
    };
    if (caseNumberField !== "") {
      newData.caseNumber = caseNumberField;
    };
    if (lawyerField !== "") {
      newData.lawyer = lawyerField;
    };
    if (partyNameField !== "") {
      newData.partyName = partyNameField;
    };
    console.log(newData);
    axios
      .patch(`http://localhost:2000/api/lawyer/update/causelist/data/${id}`, newData)
      .then((res) => {
        data.map(dataa => {
          if (dataa._id === id) {
            if (caseYearField !== "") {
              dataa.caseYear = caseYearField;
            };
            if (FixationTimeField !== "") {
              dataa.FixationTime = FixationTimeField;
            };
            if (caseNumberField !== "") {
              dataa.caseNumber = caseNumberField;
            };
            if (lawyerField !== "") {
              dataa.lawyer = lawyerField;
            };
            if (partyNameField !== "") {
              dataa.partyName = partyNameField;
            };
          }
        });
        handleSubmitt();
        alert("updated!")
      })
      .catch((err) => {
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/list/all')
      .then((res) => {
        setData(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitt = () => {
    const search = data.filter(x => x.caseNumber == Caseno && x.caseYear == caseYear);
    console.log(Caseno, caseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangecaseYear = (e) => {
    console.log(e.target.value);
    setcaseYear(e.target.value);
  }



  return (

    <div>
      <img className="causelists-image" src={caseInfo} />

      <h3 className="j-search">Update Cause List:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-caseinfo">Caseno:</label>
        <select
          className="caseno-cms"
          onChange={handleChangeCaseno}>
          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber}>{el.caseNumber}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">Caseyear:</label>
        <select
          onChange={handleChangecaseYear}
          className="caseyear-cms">
          <option name="select party name" disabled>Select case year</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseYear}>{el.caseYear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmitt} className="cms-update-asd" > Search </ button>
      <br />
      <br />
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">
                Sr No
              </div>

              <div className="case-number">
                <span>CaseNumber</span>
              </div>
              <div className="case-year-cause">
                <span>Caseyear</span>
              </div>

              <div className="party-list-update">
                <span >PartyName</span>
              </div>

              <div className="lawyer-update-list">
                <span >Lawyer</span>
              </div>
              <div className="fix-update-cause">
                <span >Fixation Time</span>
              </div>


            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                  srNo,
                  caseNumber,
                  caseYear,
                  partyName,
                  lawyer,
                  FixationTime
                } = list;
                return (

                  <form >
                    <div
                      key={srNo}
                      className="row justify-content-around p-3 align-items-center shadow-sm"
                    >
                      <div className="col-md-1">
                        <span className="srno-update-list">{srNo}</span>
                      </div>

                      <div className="col-md-2 text-left">
                        <input
                          className="w-50 case-number"
                          type="textcasenumber"
                          name="caseNumber"
                          placeholder={caseNumber}
                          onChange={(e) => setCaseNumberField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1 text-left">
                        <input
                          className="w-75 case-year-cause"
                          type="textcaseyear"
                          name="caseYear"
                          placeholder={caseYear}
                          onChange={(e) => setCaseYearField(e.target.value)}
                        />
                      </div>

                      <div className="col-md-3 text-left">
                        <textarea
                          rows={7}
                          type="textpartyname"
                          className="party-list-update"
                          name="partyName"
                          placeholder={partyName}
                          onChange={(e) => setpartyNameField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 text-left">
                        <textarea
                          rows={7}
                          className=" lawyer-update-list"
                          type="textlawyername"
                          name="lawyer"
                          placeholder={lawyer}
                          onChange={(e) => setLawyerField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 pl-5 text-left">
                        <input
                          className="w-50 fix-update-cause"
                          name="FixationTime"
                          type="textfixtime"
                          placeholder={FixationTime}
                          onChange={(e) => setFixationTimeField(e.target.value)}
                        />
                      </div>
                      <div class="col-md-1">
                        <div className="btn-update-causelist-cms" type="submit" onClick={() => onSubmit(list._id)} >Update</div>
                      </div>

                      {/* <button onClick={()=>update(list._id)} className="update-case-info-cms">Update</button> */}




                      <Inject services={[Page, Edit, Toolbar]} />
                    </div>
                  </form>
                )
              })}
            </div>
          </div>
        </>
      ) : null}
    </div>

  )
}
export default CauseListCMS;






