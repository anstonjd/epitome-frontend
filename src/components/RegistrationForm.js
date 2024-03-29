import Networkcool from "../assets/win98icons/network_cool_two_pcs-4.png"
import {useState} from 'react';
import { closeDiv } from "./DesktopItems";

{/*
    cant close the form.
    navigations needed

*/}


const RegistrationForm=()=>{
    const [details,setDetails]=useState({
        cname:"",
        collegeRep:"",
        phone:"",
        email:"",
        username:"",
        password:"",
        confirmPassword:""

    });
    return(<>
        <div className="row row-cols-1 row-cols-md-2 g-0" id="regiForm" style={{display: "none"}}>
            <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: 2}}>
                <div className="alert window rounded-0 ms-1 me-1">
                    {/* Add width style to specify the width of the componets abpve (remember u have to give for mobile as well) */}
                    <div className="title-bar">
                        <div className="title-bar-text"><span className="p-1"><img
                                    src={Networkcool} /> College Registration</span></div>
                        <div className="title-bar-controls">
                            
                            <button onClick={()=>closeDiv('regiForm')} aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body m-1" style={{overflowY: "scroll", maxHeight:"500px"}}>
                        <p className="fs-5 mb-0" style={{fontFamily:"more_perfect_dos_vgaregular"}}><u>COLLEGE REGISTRATION
                                FORM</u></p>
                        <p style={{fontSize:"medium"}}>Kindly register your college in our portal for <b>EPITOME 2K22</b>,
                            after registration students can register for individual events.</p>
                        <div className="row row-cols-1 row-cols-md-2 g-1">
                            <div className="col">
                                <form>
                                    <div className="card " style={{border: "none",backgroundColor: "transparent"}}>
                                        <div className="card-body">
                                            <div className="field-row-stacked">
                                                <label htmlFor="collegeName" className="fw-bold" style={{fontSize: "small"}}>College
                                                    Name</label>
                                                <input id="cName" type="text" onChange={e=>(setDetails({...details,cname:e.target.value}))} value={details.cname} />
                                                <span className="text-danger">College already register</span>
                                            </div>
                                            <div className="field-row-stacked">
                                                <label htmlFor="text22" className="fw-bold" style={{fontSize: "small"}}>College
                                                    Representative Name</label>
                                                <input id="collegeRep" type="text" onChange={e=>(setDetails({...details,collegeRep:e.target.value}))} value={details.collegeRep} />
                                            </div>
                                            <div className="field-row-stacked">
                                                <label htmlFor="text22" className="fw-bold" style={{fontSize: "small"}}>Mobile
                                                    Number</label>
                                                <input id="phone" type="number" onChange={e=>(setDetails({...details,phone:e.target.value}))} value={details.phone}/>
                                            </div>
                                            <div className="field-row-stacked">
                                                <label htmlFor="text22" className="fw-bold" style={{fontSize: "small"}}>Email
                                                    ID</label>
                                                <input id="email" type="email" onChange={e=>(setDetails({...details,email:e.target.value}))} value={details.email} />
                                            </div>


                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col">
                                <div className="card rounded-0 m-2">
                                    <div className="card-body">
                                        <span className="mb-4 fs-6"><b>Login Credentials</b></span>
                                        <div className="field-row-stacked mt-3">
                                            <label htmlFor="text22" className="fw-bold" style={{fontSize: "small"}}>Username</label>
                                            <input id="username" type="text" onChange={e=>(setDetails({...details,username:e.target.value}))} value={details.username} />
                                            <span className="text-danger">username invalid</span>
                                        </div>
                                        <div className="field-row-stacked">
                                            <label htmlFor="text23" className="fw-bold" style={{fontSize: "small"}}>Password</label>
                                            <input id="password" type="password" onChange={e=>(setDetails({...details,password:e.target.value}))} value={details.password}/>
                                            <span className="text-danger">password is not matching</span>
                                        </div>
                                        <div className="field-row-stacked">
                                            <label htmlFor="text23" className="fw-bold" style={{fontSize: "small"}}>Confirm
                                                Password</label>
                                            <input id="cpassword" type="password" onChange={e=>(setDetails({...details,confirmPassword:e.target.value}))} value={details.confirmPassword}/>
                                            <span className="text-danger">password is not matching</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col"></div>
                            <div className="col text-end">
                                    <button  className="me-2 mb-2" style={{width:"100px"}}><b>Submit Form</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
   
    
}





export default RegistrationForm