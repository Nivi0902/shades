import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names = ['Learn', 'Master', 'Try'];
        const random = Math.floor(Math.random() * 3);
        return(names[random])
    }

    function handleClick(name){
        console.log(name)
    }

  return (
    <main>
        <p>Lets {handleNameChange()} React</p>
        <button onClick={() => handleClick("Nivi")}>Click me</button>
    </main>
  )
}

export default Content


//function update(a,b){
// a+b
// }
//update(10,20)