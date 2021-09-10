import React from 'react';



export default function Score(props) {
return (

props.studentObj.scores.map((scoreObj) =>
   <> <p>{scoreObj.score}</p>
    <p>{scoreObj.date}</p></>
)

)
}