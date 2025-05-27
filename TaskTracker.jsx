import React, { useState } from 'react'; // "useState" lets you add state to your functional components.
import './style.css'; 

function TaskTracker() {
    // Space to  array destructuring
    const [tasks, setTasks] = useState([]);  // State to store tasks
    const [inputTasks, setNewTasks] = useState(''); // State for the input field

    // Adding new Tasks. (lambda function.)
    const addTask = () => {
        // Preventing a invalid empty task and if the inputting same task. 
        if ( inputTasks.trim() === '' || tasks.some(task => task.text.trim() === inputTasks.trim())) {
            
            return; // prevent adding   
        }   
        setTasks([...tasks, { text: inputTasks, completed: false }]); // Adding the inputTask into the SetTask. 
        setNewTasks(''); // Clear the input field
    };

    // fucntion for marking the completed task. 
    const markTask = (index) => {
        // Using Array.from
        const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
        );  
        // Updates React state with the new tasks array
        setTasks(updatedTasks);
    };
    
    // Function to remove the tasks.
    const removeTask = (index) => {
        // Remove the specific index of the task. 
        const updatedTasks = tasks.filter((_, i) => i !== index);
        // Keep updating a current task array. 
        setTasks(updatedTasks);
    };
    
    // JSX the UI structure.
    return (
    <div className="task-tracker-container">
        <div className="task-tracker-card">
        <h1>📝 Task Tracker</h1>
        <div className="task-input">
            <input
            type="text"
            value={inputTasks}
            onChange={(e) => setNewTasks(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                   addTask(); // Call addTask when "Enter" is pressed
                }
            }}
            placeholder="Add a new task..."
            />
            <button onClick={addTask}>➕</button>
        </div>
        <ul className="task-list">
            {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
                <span onClick={() => markTask(index)}>
                {task.text}
                </span>
                <button onClick={() => removeTask(index)}>🗑️</button>
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
}

export default TaskTracker;
