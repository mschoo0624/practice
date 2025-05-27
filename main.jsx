import React from 'react';
import ReactDOM from 'react-dom/client'; // Needed for rendering the app
import TaskTracker from './TaskTracker'; // Connecting the main functionality .jsx file
import './style.css'; // Importing the .css file

function App() {
  return ( // calling the TaskTracker. 
    <div className="app">
      <TaskTracker /> 
    </div>
  );
}

// Create root and render App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);