import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import BasicExample from './version5/Basic';
import UrlParams from './version5/UrlParams';
import NestingPath from './version5/NestedRoutes/NestingPath';
import Redirects from './version5/Redirects';
import CustomLink from './version5/CustomLink';
import BlockingForm from './version5/BlockingForm';
import NotFound from './version5/NotFound';
import DynamicRecursePaths from './version5/DynamicRecursePaths';
import DynamicallynestedRoute from './version5/DynamicallynestedRoute';
import Dynamic_nested_Routes_Data from './version5/Dynamic_nested_Routes_Data';
const navObj = {
  "version 5": false,
  "BasicExample": true,
  "UrlParams": false,
  "NestingPath": false,
  "Redirects": false,
  "CustomLink": false,
  "BlockingForm": false,
  "NotFound": false,
  "DynamicRecursePaths": false,
  "DynamicallynestedRoute": false,
  "Dynamic_nested_Routes_Data": false,

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
      {nav.NotFound && <NotFound />}
      {nav.DynamicRecursePaths && <DynamicRecursePaths />}
      {nav.DynamicallynestedRoute && <DynamicallynestedRoute />}
      {nav.Dynamic_nested_Routes_Data && <Dynamic_nested_Routes_Data />}
    </div>
  );


}

export default App;
