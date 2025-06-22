import React from 'react';
import Board from './components/Board';
import Header from './components/Header';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Board />
        </div>
    );
};

export default App;