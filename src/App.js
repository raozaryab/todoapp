import React, { useState } from 'react'
import ToDoList from './ToDoList'

const App = () => {
  const [inputList, setInputList] = useState("")


  const [Items, setItems] = useState([])




  const inputEvent = (e) => {
    setInputList(e.target.value);

  };



  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");

  }

  const deleteItems=(id)=>{
    // console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((curElem , index)=>{
        return index !== id;

      })
    })
}



  return (
    <>
      <div className="main-div">
        <div className="center-div">

          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={inputEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}


            {/* return <li>{itemval}</li> */}
            {Items.map((itemval, index) => {
              return <ToDoList
                key={index}
                id={index}
                text={itemval} 
                onSelect={deleteItems}
                />

            })}

          </ol>

        </div>
      </div>
    </>
  );

}

export default App;