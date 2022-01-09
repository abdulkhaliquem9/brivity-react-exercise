import React, { useState } from "react";


const ToDo = () => {

    // const [toDoList, setToDoList] = useState(['One','Two','Three'])
    const [inputValue, setInputValue] = useState('')
    const [toDoList, setToDoList] = useState([
        { label: "one", editMode: false },
        { label: "Two", editMode: false },
        { label: "Three", editMode: false }
    ])

    const onAddToDo = (e) => {
        const TempArray = [...toDoList]
        TempArray.push(inputValue)
        setToDoList(TempArray)
        setInputValue('')
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        console.log('-----', inputValue)

    }
    const handleEditValue = (e, index) => {

        setInputValue(e.target.value)


    }

    const removeToDo = (index) => {
        const TempArray = [...toDoList]
        TempArray.splice(index, 1)
        setToDoList(TempArray)

        // console.log('----removeTodo', index)

    }


    const editToDo = (index) => {
        const TempArray = [...toDoList]
        TempArray[index] = { ...TempArray[index], editMode: true }
        setToDoList(TempArray)
        console.log('---edittodo', index)


    }

    const saveToDo = (index) => {
        const TempArray = [...toDoList]
        TempArray[index] = { ...TempArray[index], editMode: false, label: inputValue }
        setToDoList(TempArray)
        console.log('---edittodo', index)

    }



    console.log('-------toDoList', toDoList)
    return (

        <div>
            <label> Add ToDo</label>
            <input type='text' onChange={handleOnChange} value={inputValue}></input>
            <button onClick={onAddToDo}>Add Data</button>
            <ul>
                {toDoList.map((item, index) => {
                    console.log('----temprint', item)
                    return <li key={index}>
                        {/* {item} */}
                        {!item.editMode && item.label}
                        {item.editMode && <input onChange={(e) => { handleEditValue(e, index) }} value={inputValue}></input>}
                        <button onClick={() => { removeToDo(index) }}> x </button>
                        {!item.editMode && <button onClick={() => { editToDo(index) }}> Edit </button>}
                        {item.editMode && <button onClick={() => { saveToDo(index) }}> Save </button>}
                    </li>

                })}
            </ul>

        </div>



    )
}

export default ToDo;