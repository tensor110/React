import React from 'react'

function ListRendering() {
    const name= ["Bruce", "Clark", "Diana", "Bruce"]
    // const nameList= name.map ((names, index)=> <h2>{index} {names}</h2>)
    // return <div>{nameList}</div>
// ---or---
    return (
        <div>
          {name.map((name, index) => (
            <h2 key={index}>{index} {name}</h2>
          ))}
        </div>
      );
}
export default ListRendering