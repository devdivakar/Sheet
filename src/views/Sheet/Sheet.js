import React, { useState, useEffect } from "react";
import Column from '../../components/Column/Column'
import { Redirect, useHistory, Link } from "react-router-dom";
import Api from '../../data';
import './Sheet.css';

const Sheet = (props)=>{

    useEffect(() => {
        console.log("-----",props.rows)
    },[])

return <div className="sheet">
        {props.columns!==undefined && props.columns.length!==0 ? props.columns.map((data,col_id)=>{
            return <Column rows= {props.rows} col_id = {data}/>
        }) : null}
              
       </div>
}

export default Sheet;