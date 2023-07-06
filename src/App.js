import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import BasicExample from './version5/Basic';
import UrlParams from './version5/UrlParams';





const navObj = {
  "BasicExample": true,
  "UrlParams": false,

}

function App() {

  const [nav, setNav] = useState(navObj)


  return (
    <div className="App main">
      <Navbar navObj={nav} setNav={setNav} />
      <h1>This is version 5 react router dom</h1>
      {nav.BasicExample && <>
        <h5>Basic Example v5</h5>
        <BasicExample />
      </>}
      {nav.UrlParams && <>
        <h5>Url params v5</h5>
        <UrlParams />
      </>}
    </div>
  );
}

export default App;
