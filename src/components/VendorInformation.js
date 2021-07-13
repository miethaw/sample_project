import React from 'react'
import { Button } from './Button'

const VendorInformation = props => {
    const { handleShow, edit } = props

    return (
        <div className='text-light' >
            <div className='d-flex justify-content-between align-items-center'>
                <span className='px-1' style={{ fontWeight: 600, fontSize: 16 }}>Vendor Information</span>
                {!edit && <Button text={"Add New Vendor Information"} icon={"fa fa-plus-square"} handleShow={handleShow} />}
            </div>
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between p-3 align-items-center' style={{ fontSize: 13, fontWeight: 500, color: 'gray' }}>
                    <div className='px-2 col-1  '>
                        Logo
                    </div>
                    <div className='px-2 col '>
                        Name
                    </div>
                    <div className='px-2 col '>
                        Address
                    </div>
                    <div className='px-2 col '>
                        Contact Person
                    </div>
                    {
                        edit &&
                        <div className='px-2 col-3'>

                        </div>
                    }
                </div>

                <div className='' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                    {
                        InformationCardList && InformationCardList.map((c, index) => {
                            return (
                                <InformationCard edit={edit} image={c.ImageUrl} name={c.name} index={index} address={c.address} contactPerson={c.contactPerson} phno={c.phno} />
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}

export default VendorInformation

const InformationCard = ({ image, name, address, contactPerson, phno, edit, key, index }) => {
    return (
        <>
            {
                edit ?
                    <div className='d-flex justify-content-around p-2 align-items-center align-self-center' style={{ borderTop: `${index === 0 ? "none" : '1px solid gray'}` }}>
                        <div className='col-1  d-flex justify-content-center h-100' style={{ marginLeft: -3 }}>
                            <img src={image} alt="Card-logo" style={{ maxWidth: 40 }} />
                        </div>
                        <div className='col px-1 '>
                            {name}
                        </div>
                        <div className='col px-1 '>

                            <span className='px-1 r'><i className="fas fa-circle" style={{ color: 'gray' }}></i></span>
                            {address}
                        </div>
                        <div className='col px-1 '>
                            {contactPerson}
                            <div>{phno}</div>
                        </div>
                        <div className='col-3  d-flex flex-wrap justify-content-between px-0 align-items-center'>
                            <Button text={"Edit"} buttonColor={'#10173a'} />

                            <Button text={"Delete"}  buttonColor={'#A11938' }  />

                        </div>

                    </div>
                    :
                    <div className='d-flex my-2 ' style={{ borderRadius: 10, background: '#10173a', }}>
                        <div className='col-5 d-flex justify-content-center align-self-center h-100 ' style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <img src={image} alt="Card-logo" style={{ maxWidth: 150 }} />
                        </div>
                        <div className='col-7 p-1' style={{ background: '#293365', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                            <div className='p-2 mx-2' style={{ borderBottom: '1px solid gray' }}>
                                <div style={{ fontSize: 12, fontWeight: 'bold' }}>NAME</div>
                                <div style={{ fontSize: 11, color: 'gray', fontWeight: 500 }}>{name}</div>
                            </div>
                            <div className='p-2 mx-2' style={{ borderBottom: '1px solid gray' }}>
                                <div style={{ fontSize: 12, fontWeight: 'bold' }}>ADDRESS</div>
                                <div style={{ fontSize: 11, color: 'gray', fontWeight: 500 }}>{address}</div>
                            </div>
                            <div className='p-2 mx-2' style={{}}>
                                <div style={{ fontSize: 12, fontWeight: 'bold' }}>CONTACT PERSON</div>
                                <div className='d-flex justify-content-between'>
                                    <div style={{ fontSize: 11, color: 'gray', fontWeight: 500 }}>{contactPerson}</div>
                                    <div style={{ fontSize: 11, color: 'gray', fontWeight: 500 }}>{phno}</div>
                                </div>
                            </div>

                        </div>
                    </div>
            }


        </>

    )
}

const InformationCardList = [
    { id: 1, ImageUrl: "/carrier-logo.png", name: "Carrier Singapore (Pte) Limited", address: "28 teban Gardens Crescent, Singapore 608296", contactPerson: "Phyo Ko Ko", phno: "+6598766227" },
    { id: 2, ImageUrl: "/calpeda.png", name: "Calpeda Asia Pacific Pte Ltd", address: "3 Gul Street 1, Singapore 629316", contactPerson: "SMITH", phno: "+656898411" },

]