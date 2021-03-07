import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import "./Generate.css"
import gensummon from "../../assets/Images/gensummon.jpg"
import {Link} from "react-router-dom"

class GenerateSummon extends Component {
  state = {
    casename: '',
    judgename: '',
    partyname: '',
    tehsil: '',
    address:'',
    caseStatus:''
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('http://localhost:2000/create-pdf', this.state)
      .then(() => axios.get('http://localhost:2000/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'Summon.pdf');
      })
  }

  render() {
    return (
      <div className="App">
         <img className="resss-image" src={gensummon} />
         <p className="summonpdf">Fill the following fields to generate Online summon document</p>
          <label className="summon-casename">Case Name</label>
        <input  type="summoncasename-text" placeholder="Name" name="casename" onChange={this.handleChange}/>
        <br/>
        <label className="summon-judgename">Judge Name</label>
        <input type="summonjudge-text" placeholder="Judge name" name="judgename" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Party Name</label>
        <input type="summonpart-text" placeholder="Party name" name="partyname" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Tehsil</label>
        <input type="summontehsil-text" placeholder="tehsil" name="tehsil" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Case Status</label>
        <input type="summonstat-text" placeholder="caseStatus" name="caseStatus" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Address</label>
        <input type="summonadd-text" placeholder="address" name="address" onChange={this.handleChange} />
<br/>
<br/>
        <button className="online-summon-generator" onClick={this.createAndDownloadPdf}>Download PDF</button>
        <Link to="/CMS/PoliceCon">Click here to  connect this summon to  police Station</Link>
      </div>
    );
  }
}

export default GenerateSummon;