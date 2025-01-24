import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './assets/components/Header';
import MsnComponent from './assets/components/MsnComponent';
import { useState } from 'react';

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [showModal, setShowModal] = useState(false);



  const handleComponentChange = (component) => {
    setCurrentComponent(component)
  };

  return (
    <>
    <Header onComponentChange={handleComponentChange} />
    <div className='component-display'>
      {currentComponent}
      </div>

    </>
  )
}

export default App
