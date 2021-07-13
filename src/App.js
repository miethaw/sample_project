import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import routes, { routeName } from "./routes"
import SideBar from './components/sideBar';
import MissingSensors from './components/MissingSensors'
import AssetsList from './components/AssetsList'
import SensorStatus from './components/SensorStatus'
import VendorInformation from './components/VendorInformation'


const App = props => {
  const [sidebarOpen, setSideBarOpen] = useState(true);

  const appRoutes = routes.map((v, i) => (
    <Route
      key={i}
      path={v.path}
      exact={v.exact}
      render={props => <v.component {...props} />} />
  ))

  return (
    <BrowserRouter >
				<SideBar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen}  />
        <div className='pt-4' style={{ paddingLeft: sidebarOpen ? 80 : 270 }}>
          <Switch>
						{ appRoutes}
						<Redirect to={routeName.learning} />
					</Switch>

        </div>
				
			</BrowserRouter>
    
  );
}

export default App;

// <div className="">

// <SideBar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} site={"President Bakery"} />
// <div className='pt-4' style={{ paddingLeft: sidebarOpen ? 80 : 270 }}>
//   <div className='d-flex flex-md-wrap flex-sm-wrap flex-xl-nowrap p-0 m-1' style={{ borderBottom: '1px solid gray' }}>
//     <div className='col-xl-4 col-lg-4 flex-fill m-2' style={{  minWidth: 300 }}>
//       <MissingSensors />
//     </div>
//     <div className='col-xl-8 col-lg-8 flex-fill m-2' style={{ minWidth: 500 }}>
//       <AssetsList />
//     </div>

//   </div>
//   <div className='d-flex py-2 flex-md-wrap flex-xl-nowrap flex-sm-wrap flex-lg-wrap m-1'>
//     <div className='col-6 flex-fill m-2' style={{ }}>
//       <SensorStatus />
//     </div>
//     <div className='col-6 flex-fill m-2' style={{ minWidth: 350 }}>
//       <VendorInformation />
//     </div>
//   </div>

// </div>

// </div>
