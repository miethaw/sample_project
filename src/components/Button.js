import React from 'react'

export const Button = props =>{
    const { text, icon, iconColor, color, fontSize, buttonColor, handleShow, minWidth } = props
    return(
        <div className='text-center px-2 my-1 py-1 align-items-center' onClick={handleShow} style={{ borderRadius:10, background: buttonColor ? buttonColor : '#293365',minWidth : minWidth? minWidth : 80 }}>
            {
                icon &&
                <i className={icon} style={{ color : iconColor }} />
            }
            <span className='px-1 text-center align-items-center' style={{ color : color ? color : "#fff", fontSize : fontSize ? fontSize : 13 }}>{text}</span>

        </div>
    )
}