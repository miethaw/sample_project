import React, { useState } from 'react';
import { routeName, routeTo } from "../routes"

import MissingSensors from '../components/MissingSensors'
import AssetsList from '../components/AssetsList'
import SensorStatus from '../components/SensorStatus'
import VendorInformation from '../components/VendorInformation'
import { AddModal } from '../components/Modal';



const LearningPage = props => {
    const [ show, setShow ]=useState(false);
    const [ showSensorStatus, setShowSensorStatus] =useState(false);
    const [ showAssetList, setShowAssetList ] = useState(false)
    const [ showVenderInfo, setShowVenderInfo ]= useState(false)
    const handleClose = () =>{
        if(show) return setShow(false);
        else if(showSensorStatus) return setShowSensorStatus(false);
        else if(showAssetList) return setShowAssetList(false);
        else if(showVenderInfo) return setShowVenderInfo(false);

    }
  
    const handleRouteChange = (routeName, props ) => {
        routeTo({
            routeTo: routeName,
            history: props.history
        })
    }
    
  return (
        <div className='pt-4 ' style={{  }}>
            <div className="d-flex justify-content-end">
                <div className='mx-3 btn py-2 px-3 text-light' onClick={()=> handleRouteChange( routeName.editInformation , props)} style={{background: '#293365',}}>
                <i class="far fa-edit"></i>
                    <span className='px-2' style={{  fontSize:14 }}>Edit Information</span>
                </div>
            </div>
           
            <div className='d-flex flex-wrap flex-xl-nowrap p-0' style={{ borderBottom: '1px solid gray' }}>
                <div className='col-xl-4 col-lg-4 flex-fill py-2' style={{  minWidth: 300 }}>
                <MissingSensors handleShow={()=> setShow(true)} />
                {
                    show &&
                    <AddModal show={show} handleClose={handleClose} modalTitle={"Add Missing Sensors"} data={MissingSensorsData} />
                }
                </div>
                <div className='col-xl-8 col-lg-8 flex-fill py-2' style={{ minWidth: 500 }}>
                <AssetsList  handleShow={()=> setShowAssetList(true)} />
                {
                    showAssetList &&
                    <AddModal show={showAssetList} handleClose={handleClose} modalTitle={"Add Asset Lists"} data={AssetListsData} />
                }
                </div>

            </div>
            <div className='d-flex py-2 flex-wrap flex-xl-nowrap flex-fill'>
                <div className='col-xl-5 col-lg-5 flex-fill py-2' style={{ }}>
                <SensorStatus handleShow={()=> setShowSensorStatus(true)}/>
                {
                    showSensorStatus &&
                    <AddModal show={showSensorStatus} handleClose={handleClose} modalTitle={"Add Sensors Status"} data={SensorsData} />
                }
                </div>
                <div className='col-xl-7 col-lg-7 flex-fill py-2' style={{ minWidth: 350 }}>
                <VendorInformation handleShow={()=> setShowVenderInfo(true)}/>
                {
                    showVenderInfo &&
                    <AddModal show={showVenderInfo} handleClose={handleClose} modalTitle={"Add Vendor Information"} data={VendorInformationData} />
                }
                </div>
            </div>

        </div>
  );
}

export default LearningPage;

const AssetListsData=[
    {title : "Add New Chiller",placeholder:"chiller"  },
    {title : "Add New Capacity",placeholder:"capacity"  },
    {title : "Add New Type",placeholder:"type"  },
    {title : "Add New Brand",placeholder:"brand"  },
    {title : "Add New Model",placeholder:"model"  },
    {title : "Add New Year of Install",placeholder:"year"  }
  ]
  const MissingSensorsData=[
    {title : "Add New Description",placeholder:"description"  },
    {title : "Add New Sensor Type",placeholder:"sensor type"  },
  ]
  const VendorInformationData=[
    {title : "Add New Logo",placeholder:"logo", type :'file'  },
    {title : "Add New Name",placeholder:"name"  },
    {title : "Add New Address",placeholder:"address"  },
    {title : "Add New Contact Person",placeholder:"contact person"  },
  ]
  const SensorsData=[
    {title : "Add New Data Source",placeholder:"data source"},
    {title : "Add New System Status",placeholder:"system status"  },
    {title : "Add Number of Data Points",placeholder:"data points"  }
  ]