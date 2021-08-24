import axios from 'axios'
import React, { useEffect } from 'react'

export default function Convert({select,text}) {
    useEffect(()=>{
        axios.post("https://translation.googleapis.com/language/translate/v2",{},{
            params:{
                q:text,
                target:select.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        console.log(select,text);
    },[select,text])
    return (
        <div>
            
        </div>
    )
}
