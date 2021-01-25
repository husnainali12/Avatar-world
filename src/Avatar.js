import React from 'react';
import'./Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';
const Avatar = (props) => {
  const avaratListArray = [
        {
          id: 1,
          name:'husnain',
          work:'webdeveloper'

        },
        {
        id:2,
        name:'Ali',
        work:'front end developer'
        },
        {
            id:3,
            name:'Arslan',
            work:'dataabse'
        },
        {
            id:4,
            name:'Amir',
            work:'Backend'
         } 

  ]
  const arrayavatarcard = avaratListArray.map( (avatarcard, i) =>{
    return  <Avatarlist id={avaratListArray[i].name}  name={avaratListArray[i].name} 
                                                      work={avaratListArray[i].work}/>
  })
    return(
        <div className="mainpage">
          <h1> Welcome to Avatar World </h1>

           {arrayavatarcard}

        <button> Subscribe </button>                   
        </div>
    )
}

export default Avatar;
