import React from 'react';
import Home from './Components/Home'
import Image1 from './Images/Fuji.jpg'
import Image2 from './Images/France.jpg'
import Image3 from './Images/Italy.jpg'
import Image4 from './Images/JackSparrow.jpg'
import Image5 from './Images/Sonic.jpg'
import Image6 from './Images/Homer.jpeg'
import './App.css';

function App() {
  return (
    <div id="bodyDiv">
      <Home img={Image1} stars={5} comment="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." ava={Image4} name="Jack Sparrow" country="Japan"/>
      <Home img={Image2} stars={5} comment="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." ava={Image5} name="Sonic Hedgehog" country="France"/>
      <Home img={Image3} stars={5} comment="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." ava={Image6} name="Homer Simpson" country="Italy"/>
      
    </div>
  );
}

export default App;
