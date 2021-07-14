import React, { useState } from 'react';

const InputBox = props => {
    const { placeholder, title,type }=props

  return (
    <div className='d-flex text-light px-1 py-2' style={{}}>
        <div className='col-6 mx-2' style={{ whiteSpace:'nowrap' }}>
            {title}
        </div>
        <input className='px-2'
            style={{ minWidth:100,outline:'none',// background:'none', borderTop:0,borderLeft:0, borderRight:0,borderBottom:`1px solid #10173a`,color: 'white'
            }}
            placeholder={placeholder}
          type={type ? type : "text"}
        />
    </div>
  );
}

export default InputBox;
