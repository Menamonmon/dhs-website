import React from 'react';
import NavBar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <NavBar
        navLinks={
          [
            { link: '#', pageName: 'About', },
            {
              link: '#',
              pageName: 'Contact',
            },
            {
              link: '#',
              pageName: 'Announcemnets',
            },
            {
              link: '#',
              pageName: 'Forms',
            },
            {
              link: "#",
              pageName: "Google"
            }
          ]
        }
      />
    </div>
  );
}

export default App;
