import React, { useState } from 'react'
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css'

import { routeName, routeTo } from "../routes"
import { useHistory } from 'react-router-dom';

const SideBar = props => {
    const {  sidebarOpen, setSideBarOpen, site }=props
    const history= useHistory();
    const handleRouteChange = (routeName, props ) => {
        routeTo({
            routeTo: routeName,
            history: history
        })
    }
    
    return (
        < div>
            <ProSidebar collapsed={sidebarOpen} toggled={sidebarOpen}>
                <SidebarHeader> <span className={`d-flex w-100 ${sidebarOpen === false ? "justify-content-end" : "justify-content-center"} p-2`} onClick={() => setSideBarOpen(!sidebarOpen)}><i className="fa fa-bars" style={{ fontSize: 20 }}></i></span></SidebarHeader>
                {!sidebarOpen && <span className='py-0 px-3' style={{ marginTop:-10 }}>{site}</span>}
                <SidebarContent>
                   
                    <Menu iconShape="circle">

                        <MenuItem className={`d-flex ${sidebarOpen === true ? '' : ' mx-3 my-2'}`}
                            style={{ width: 240, height: 90, background: sidebarOpen === true ? 'none' : '#293365', borderRadius:10 }}
                            onClick={()=> handleRouteChange( routeName.learning)}
                            icon={
                                <img
                                    src={"/searchList.png"}
                                    alt="Dashboard"
                                    style={{ width: 23 }}
                                />
                            }
                        >{
                                sidebarOpen === false &&
                                <div className='py-0' style={{borderLeft:'1px solid gray', paddingLeft:10 }}>
                                    <div style={{fontSize:13}}>
                                        Expert View
                                    </div>
                                    <div className='pt-2' style={{fontSize:10}}>Gather Operation insights,</div>
                                    <span className='p-0' style={{fontSize:10}}>Review sensor quality and more</span>
                                </div>
                            }


                            {/* <Link to='/dashboard'/> */}
                        </MenuItem>
                        <MenuItem className={`d-flex ${sidebarOpen === true ? '' : ' mx-3 my-2 '}`}
                            style={{ width: 240, height: 90, background: sidebarOpen === true ? 'none' : '#293365', borderRadius:10 }}

                            icon={
                                <img
                                    src={"/detection1-111.png"}
                                    style={{ width: 33 }}
                                    alt="Dashboard"
                                />
                            }
                        >{
                                sidebarOpen === false &&
                                <div className=' py-0' style={{borderLeft:'1px solid gray', paddingLeft:10,fontSize:10 }}>
                                    <div className='pb-3' style={{fontSize:13}}>
                                    Anomaly Detection
                                    </div>
                                    <span className='' style={{fontSize:10, color:'yellow'}}>523 </span>Alerts
                                </div>
                            }


                            {/* <Link to='/dashboard'/> */}
                        </MenuItem>
                        <MenuItem className={`d-flex ${sidebarOpen === true ? '' : ' mx-3 my-2 '}`}
                            style={{ width: 240, height: 90, background: sidebarOpen === true ? 'none' : '#293365', borderRadius:10 }}

                            icon={
                                <img
                                    src={"/detection2-22.png"}
                                    style={{ width: 33 }}
                                    alt="Dashboard"
                                />
                            }
                        >{
                                sidebarOpen === false &&
                                <div className=' py-0' style={{borderLeft:'1px solid gray', paddingLeft:10,fontSize:10, }}>
                                    <div className='pb-3' style={{fontSize:13}}>
                                    False Alarm Detection
                                    </div>
                                    <span className='' style={{fontSize:10, color:'yellow'}}>523 </span>Alerts
                                </div>
                            }


                            {/* <Link to='/dashboard'/> */}
                        </MenuItem>
                        <MenuItem className={`d-flex ${sidebarOpen === true ? '' : ' mx-3 my-2 '}`}
                            style={{ width: 240, height: 90, background: sidebarOpen === true ? 'none' : '#293365', borderRadius:10 }}

                            icon={
                                <img
                                    src={"/Fault333.png"}
                                    style={{ width: 33 }}
                                    alt="Dashboard"
                                />
                            }
                        >{
                                sidebarOpen === false &&
                                <div className=' py-0' style={{borderLeft:'1px solid gray', paddingLeft:10,fontSize:10, }}>
                                    <div className='pb-3' style={{fontSize:13}}>
                                    Fault Detection Diagnosis
                                    </div>
                                    <span className='' style={{fontSize:10, color:'yellow'}}>523 </span>Alerts
                                </div>
                            }


                            {/* <Link to='/dashboard'/> */}
                        </MenuItem>
                        <MenuItem className={`d-flex ${sidebarOpen === true ? '' : ' mx-3 my-2 '}`}
                            style={{ width: 240, height: 90, background: sidebarOpen === true ? 'none' : '#293365', borderRadius:10 }}

                            icon={
                                <img
                                    src={"/HHHH1_1.png"}
                                    alt="Dashboard"
                                    style={{ width: 33 }}
                                />
                            }
                        >{
                                sidebarOpen === false &&
                                <div className=' py-0' style={{borderLeft:'1px solid gray', paddingLeft:10,fontSize:10, }}>
                                    <div className='pb-3' style={{fontSize:13}}>
                                   CALM
                                    </div>
                                    <span className='' style={{fontSize:10, color:'yellow'}}>523 </span>Alerts
                                </div>
                            }


                            {/* <Link to='/dashboard'/> */}
                        </MenuItem>
{/*                        
                        <SubMenu
                            title="Fault Detection Diagnosis"
                            icon={
                                <img
                                    src={"/search.png"}
                                    alt="Dashboard"
                                //   style={{ width: "35px", height: "35px" }}
                                />
                            }
                        >

                        </SubMenu>
                        <SubMenu
                            title="CALM"
                            icon={
                                <img
                                    src={"/search.png"}
                                    alt="Dashboard"
                                //   style={{ width: "35px", height: "35px" }}
                                />
                            }
                        >

                        </SubMenu> */}
                    </Menu>
                </SidebarContent>
                <SidebarFooter></SidebarFooter>
            </ProSidebar>
        </ div>
    )
}
export default SideBar
