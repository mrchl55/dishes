import React from "react";
import classes from './Result.module.css'
interface ResultProps {
    id: number,
    name: string,
    preparation_time: string,
    type: string,
    no_of_slices?: number,
    diameter?: number,
    spiciness_scale?: number,
    slices_of_bread?: number,
}


const Result: React.FC<ResultProps> = props => {
    const {id, name, preparation_time, type} = props
    return <div className={classes.result}>
   <ul>
    <li>id: {id}</li>
    <li>name: {name}</li>
    <li>preparation_time: {preparation_time}</li>
    <li>type: {type}</li>
   </ul>
    </div>

}

export default Result