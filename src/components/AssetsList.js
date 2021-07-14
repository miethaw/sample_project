import React from 'react';
import { Button } from './Button';


const AssetsList = props => {
    const { handleShow, edit }= props

    return (
        <div className="text-light">
            <div className='d-flex justify-content-between align-items-center'>
                <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Asset Lists</span>
                {
                    !edit && <Button text={"Add New Asset Lists"} icon={"fa fa-plus-square"} handleShow={handleShow} />
                }
                
            </div>
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between align-items-center py-3 px-3' style={{ fontSize: 13, fontWeight:500, color:'gray' }}>
                   
                    <div className='col'>
                        Chiller
                    </div>
                    <div className='col'>
                        Capacity
                    </div>
                    <div className='col'>
                         Type
                    </div>
                    <div className='col'>
                        Brand
                    </div>
                    <div className='col'>
                        Model
                    </div>
                    <div className='col-2' style={{  }}>
                        Year of Install
                    </div>
                    {
                        edit && 
                        <div className='px-2 col-3'>
                            
                        </div>
                    }
                </div>

                <div className='px-2' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>
                    {
                        AssetsLists && AssetsLists.map((v,k)=>{
                            return(
                                <MissingSensorItem key={v.id} edit={edit} chiller={v.chiller} index={k} capacity={v.capacity} brand={v.brand} type={v.type} model={v.model} yrOfInstall={v.yrOfInstall} />

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default AssetsList;

const MissingSensorItem = ({ chiller, capacity, key,index, model,brand,yrOfInstall,type, edit }) => {
  
    return (
        <div className='d-flex justify-content-between py-2 px-2 align-items-center align-self-center' key={key} style={{ borderTop: `${index === 0 ? "none": '1px solid gray'}` }}>
           
            <div  className='col'>
                {chiller}
            </div>
            <div className='col '>
                {capacity}
            </div>
            <div className='col '>
                {type}
            </div>
            <div className='col '>
                {brand}
            </div>
            <div className='col '>
                {model}
            </div>
            <div className='col-2'>
                {yrOfInstall}
            </div>
            {
                edit &&
                <div className='col-3 d-flex flex-wrap justify-content-between px-0  align-items-center'>
                    <Button text={"Edit"} buttonColor={'#10173a' } />
                 
                    <Button text={"Delete"}  buttonColor={'#A11938' }  />
              
                </div>

            }
        </div>
    )
}

const AssetsLists = [
    { id: 1, chiller: "Chiller 1", capacity: "225 Rt", type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 2, chiller: "Chiller 2", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 3, chiller: "Chiller 3", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 4, chiller: "Chiller 4", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 5, chiller: "Evaporator Water Pumps 1", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 6, chiller: "Evaporator Water Pumps 1Chiller 2", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 7, chiller: "Evaporator Water Pumps 3", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },


]