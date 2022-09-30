import React from 'react';
import Footer from './components/Footer';
import Navbarmenu from './components/Navbarmenu';
import { UserForm } from './components/UserForm';

const App = () => {
  return (
    <div className="App">
      <Navbarmenu />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
