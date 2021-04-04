import React, { useState, useEffect } from "react";
import Api from '../../data';
import InputBox from '../InputBox/InputBox';
import './Column.css';

const Column = (props)=>{

    useEffect(() => {

    },[])

return <div className="column">
        <span className="col_id">{props.col_id}</span>
    {props.rows!==undefined && props.rows!==null ? props.rows.map((data,i)=>{
              return <InputBox row_id = {data} col_id = {props.col_id}/>
    }) : null}
       </div>
}

export default Column;