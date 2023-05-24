import React from "react"
import { ChangeEvent } from "react";
import { ChangeEventHandler } from "react";

export default function TodoItem(props:any){
    const [isDone, setIsDone] = React.useState(false);
    const changeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setIsDone((e.target.checked))
    };


     const isDoneAttr = {isDone:isDone+""};
    //text-decoration:line-through
    return (<li key={props.i}><input type='checkbox' onChange={changeHandler}/><p {...isDoneAttr}>{props.text}</p><a>[X]</a></li>)
}