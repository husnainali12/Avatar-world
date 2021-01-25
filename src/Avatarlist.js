import React from 'react';
import   './Avatar.css';
const Avatarlist = (props) => {
    return(
        <div classname= "avatarstyle ma4 bg-light-purple din pa4 grow shadow-4 tc">
            <img width="200px" height="200px" src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
        <h1 className=""> {props.name} </h1>
        <p> {props.work} </p>
        </div> )
}

export default Avatarlist;