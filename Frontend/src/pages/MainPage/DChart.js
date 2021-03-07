import React, { useEffect, useState } from 'react';
import graph from "../../assets/Images/graph.jpg";
import axios from 'axios';
import "./DChart.css"
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [

];

const DChart = () => {
    const [year, setYear] = useState("");
    const [name, setName] = useState("");
    const [casesData, setCasesData] = useState([]);
    const [data, setData] = useState([]);

    const OnChange = (e) => {
        setYear(e.target.value);
        
    }

    const onSubmit = () => {
        let pendingCases = 0;
        let solvedCases = 0;
        if (casesData.length > 0) {
            pendingCases = casesData.filter(d => d.Caseyear === year && d.caseStatus === 'Pending').length;
            solvedCases = casesData.filter(d => d.Caseyear === year &&  d.caseStatus === 'Solved').length;
            console.log(pendingCases, solvedCases);
        }
        setData([{
            name: year, solved: solvedCases, pending: pendingCases
        }]);
    }



    useEffect(() => {
        axios
            .get('http://localhost:2000/api/lawyer/data/yearchart/')
            .then((res) => {
                setCasesData(res.data.dataStatus);
            })
            .catch((err) => {

            });
    }, []);


    return (
        <div>
            <img className="responssssssive-image" src={graph} />
            <br/>
            <p className="graph-top-heading">Enter Case Year To view Solve and Pending Case Yearwise</p>
        <br/>
        <div className='row mx-5'>

            <div className='col-md-12 col-lg-12 d-flex justify-content-center align-items-center'>
                <label className='graph-enter-year'>Enter Year:</label>
                <input type="teexxtgaph" name="year" onChange={OnChange} />
                
                <button className="graph-search-button" type="submit" onClick={onSubmit}>Search</button>
            </div>
            <div className='col-md-12 col-lg-10 d-flex justify-content-center mt-5'>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pending" fill="#8884d8" />
                    <Bar dataKey="solved" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
        </div>
    );
}

export default DChart;




