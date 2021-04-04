import React, { useState, useEffect } from "react";
import './InputBox.css';

const InputBox = (props)=>{
    useEffect(() => {
    },[])
const handleInput= (e)=>{
    let sum = []
    let flag = false
    const inp = e.target.value.split(",")
    if(inp.includes('=')){
        for(let i=0; i<inp.length; i++){
            if(inp[i]!=="="){
                let el = document.getElementById(inp[i])
                if(typeof(el) != 'undefined' && el != null && el.value!=='' && el.value!==undefined && el.value!==null){
                    sum.push(parseInt(el.value))
                }
                if(i===inp.length - 2){
                    flag = true
                }
            }
        }
    }
    if(flag===true){
        e.target.value = sum.reduce((a, b) => a + b, 0)
    }

}

return <div className="input_box">
            <input id={props.col_id+props.row_id} onChange= {handleInput}/>
       </div>
}

export default InputBox;