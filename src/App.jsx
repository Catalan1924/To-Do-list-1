import React from 'react';
import { TodoProvider } from './Context/TodoContext.jsx';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './index.css';
import './Components/Card.jsx'
const App = () => {
  return (
    <TodoProvider>
      <Navbar />
       <Card className="container mx-auto p-4">
            <Home/>
        </Card>
      <Home />
    </TodoProvider>
  );
};

export default App;