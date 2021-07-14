import React from 'react';
import { Button } from './Button';

const MissingSensors = props => {
    const { handleShow,edit } = props

    return (
        <div className="text-light ">
            <div className='d-flex justify-content-between align-items-center'>
                <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Missing Sensor(s)</span>
                { !edit && <Button text={"Add New Sensor"} icon={"fa fa-plus-square"} handleShow={handleShow} />}
            </div>
            
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between p-3 ' style={{ fontSize: 13, fontWeight:500, color:'gray' }}>
                <div className=' col-1'>
                </div>
                    <div className='px-2 col'>
                        Description
                    </div>
                    <div className='px-2 col'>
                        Sensor Type
                    </div>
                    {
                        edit && 
                        <div className='px-2 col-3'>
                            
                        </div>
                    }
                </div>

                <div className='px-2' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>
                    {
                        MissingSensorItemList && MissingSensorItemList.map((v,k)=>{
                            return(
                                <MissingSensorItem key={v.id} description={v.description} index={k} sensorType={v.sensorType} edit={edit} />

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default MissingSensors;

const MissingSensorItem = ({ description, sensorType, key,index, edit }) => {
  
    return (
        <div className='d-flex justify-content-around p-2 align-items-center align-self-center' key={key} style={{ borderTop: `${index === 0 ? "none": '1px solid gray'}` }}>
            <div className='col-1 '>
                <i className="fa fa-exclamation-triangle" style={{ color: 'yellow' }}></i>
            </div>
            <div  className='col px-1'>
                {description}
            </div>
            <div className='col px-1'>
                {sensorType}
            </div>
            {
                edit &&
                <div className='col-3 d-flex flex-wrap justify-content-between px-0 align-items-center'>
                    <Button text={"Edit"} buttonColor={'#10173a' } />
                 
                    <Button text={"Delete"} buttonColor={'#A11938' } />
              
                </div>

            }
        </div>
    )
}

const MissingSensorItemList = [
    { id: 1, description: "Alarm Data Device", sensorType: "BMS Alert" },
    { id: 2, description: "Chiller 2 Evaporator Output", sensorType: "Temperature" }

]