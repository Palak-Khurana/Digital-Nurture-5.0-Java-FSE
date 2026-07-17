import React from 'react';
import './App.css';
import Posts from './Posts';

// Step 10: Add the Posts component to App component
function App() {
    return (
        <div className="App">
            <h1>Blog App</h1>
            <Posts />
        </div>
    );
}

export default App;