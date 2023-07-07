import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import BasicExample from './version5/Basic';
import UrlParams from './version5/UrlParams';
import NestingPath from './version5/NestedRoutes/NestingPath';
import Redirects from './version5/Redirects';
import CustomLink from './version5/CustomLink';
import BlockingForm from './version5/BlockingForm';

const navObj = {
  "BasicExample": true,
  "UrlParams": false,
  "NestingPath": false,
  "Redirects": false,
  "CustomLink": false,
  "BlockingForm": false,

}

function App() {

  const [nav, setNav] = useState(navObj)


  return (
    <div className="App main">
      <Navbar navObj={nav} setNav={setNav} />

      {nav.BasicExample && <BasicExample />}
      {nav.UrlParams && <UrlParams />}
      {nav.NestingPath && <NestingPath />}
      {nav.Redirects && <Redirects />}
      {nav.CustomLink && <CustomLink />}
      {nav.BlockingForm && <BlockingForm />}
    </div>
  );


}

export default App;
