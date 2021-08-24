import React,{useState} from 'react'
import DropDown from './DropDown'
import Convert from './Convert'


export default function Translate() {
    const label="Select a language"
    const options=[
        {
          label:"Hindi",
          value:"hi"
        },
        {
          label:"African",
          value:"af"
        },
        {
          label:"Spanish",
          value:"es"
        },
        {
          label:"Dutch",
          value:"nl"
        }
      ]
      const [select,setSelect]=useState("")
      const [text,setText]=useState("")
    return (
        
        <div>
        <div className="ui form">
            <div className="ui field">
                <label>Enter The Text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
        </div>
         <DropDown label={label} select={select} setSelectChange={setSelect} options={options}/>
         <hr/>
         <h3 className="ui header">Output:-</h3>
         <Convert text={text} select={select}/>
        </div>
    )
}
