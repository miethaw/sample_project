import React, { useState } from 'react';
import { routeName, routeTo } from "../routes"
import AddInfoBox from '../components/AddInfoBox';
import MissingSensors from '../components/MissingSensors';
import SensorStatus from '../components/SensorStatus';
import VendorInformation from '../components/VendorInformation';
import AssetsList from '../components/AssetsList';

const EditInformationPage = () => {
  const location = window.location.pathname;
  console.log("Location",location)

  return (
    <div className=' text-light p-2' style={{}}>
      <div className='d-flex flex-wrap flex-xl-nowrap m-1' style={{ borderBottom: '1px solid gray' }}>
        <div className='col-xl-4 flex-fill ' style={{ minWidth: 300 }}>
          <MissingSensors edit={location.includes('edit') ? true : false} />
         
        </div>
        <div className='col-xl-8 flex-fill ' style={{ minWidth: 500 }}>
          <AssetsList edit={location.includes('edit') ? true : false} />
         
        </div>

      </div>
      <div className='d-flex py-2 flex-wrap flex-xl-nowrap flex-lg-nowrap flex-fill w-100 m-1'>
        <div className='col-xl-5 flex-fill' style={{}}>
          <SensorStatus edit={location.includes('edit') ? true : false} />
          
        </div>
        <div className='col-xl-5 flex-fill' style={{ minWidth: 350 }}>
          <VendorInformation edit={location.includes('edit') ? true : false} />
         
        </div>
      </div>

    </div>
  );
}

export default EditInformationPage;


