import React, { useState } from 'react'

function Todo() {
    const [tasks, setTask] = useState([]);
    const [curr, setCurr] = useState(0);
    const [newTask, setNewTask] = useState("");

    function handleInputChnage(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== '') {
            setTask(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask)
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]]
            setTask(updatedTask);
        }
    }

    function editTask(index) {
        setNewTask(tasks[index]);
        setCurr(index)
    }

    function updatTask() {
        if(newTask.trim() !== '') {
            const cp = [...tasks];
            cp[curr] = newTask
            setTask(cp);
            setNewTask('');
        }
        setCurr(0);
    }

    function moveTasDown(index) {
        if(index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]]
            setTask(updatedTask);
        }
    }
    return (
        <div className='to-do-list'>
            <h1>Todo App</h1>
            <div>
                <input
                    type='text'
                    value={newTask}
                    onChange={handleInputChnage}
                />
                <button className='add-button' onClick={addTask}>Add</button>
                <button className='move-down-button' onClick={updatTask}>Update</button>
            </div>
            <ol>
                {
                    tasks.map((task, i) => {
                        return (
                            <li key={i}>
                                <span className='text'>{task}</span>
                                <button className='delete-button' onClick={() => deleteTask(i)}>Delete</button>
                                <button className='move-up-button' onClick={() => moveTaskUp(i)}>Move Up</button>
                                <button className='move-down-button' onClick={() => moveTasDown(i)}>Move Down</button>
                                <button className='move-down-button' onClick={() => editTask(i)}>Edit</button>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Todo