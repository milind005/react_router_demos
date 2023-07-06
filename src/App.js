import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import BasicExample from './version5/Basic';
import UrlParams from './version5/UrlParams';
import NestingPath from './version5/NestingPath';




const navObj = {
  "BasicExample": true,
  "UrlParams": false,
  "NestingPath": false,

}

function App() {

  const [nav, setNav] = useState(navObj)


  return (
    <div className="App main">
      <Navbar navObj={nav} setNav={setNav} />

      {nav.BasicExample && <BasicExample />}
      {nav.UrlParams && <UrlParams />}
      {nav.NestingPath && <NestingPath />}
    </div>
  );


}

export default App;
