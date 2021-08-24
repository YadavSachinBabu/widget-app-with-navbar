import React, { useState,useEffect,useRef} from 'react'

export default function DropDown( { label,options,select,setSelectChange }) {
    const [show,setShow]=useState(false)
    const ref=useRef();

    const onBodyClick = (event)=>{
        if(ref.current.contains(event.target)){
            return;
        }
        
        setShow(false)
    }

    useEffect(()=>{
        document.body.addEventListener('click',onBodyClick,{capture:true})

        return ()=>{
            document.body.removeEventListener('click',onBodyClick,{capture:true})
        }
    },[])

    const renderOptions = options.map((option)=> {
        if(option.value === select.value)
        {
            return null;
        }
        return(
            <div key={option.value} 
                className="item"
                onClick={()=>{
                    setSelectChange(option)
            }}>
                {option.label}
            </div>
        )
    }) 
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div onClick={()=>setShow(!show)} className={`ui selection dropdown ${show ?"visible acive":""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{select.label}</div>
                    <div className={`menu ${show ?"visible transition":""}`}>{renderOptions}</div>
                </div>
            </div>
        </div>
        
    )
}
