import React from 'react'
import { AddModal } from './Modal'
import InputBox from './InputBox';


 const AddInfoBox = props => {
    const { title,data }=props
    return (
      <div className="m-0">
        {/* <div className=' p-3' style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, background: '#10173a', }}>
          <div style={{ fontSize: 16, }}>{title}</div>
        </div>
        */}
        <div className='py-3 px-2' style={{ fontSize:12,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          {
            data.map((d,index)=>(
              <InputBox placeholder={""} title={d.title} placeholder={d.placeholder} type={d.type} />
            ))
          }
          </div>
      </div>
    )
  }

  export default AddInfoBox