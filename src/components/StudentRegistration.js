import { useState } from "react"
import userkey1 from "../assets/win98icons/users_key-1.png"
import { closeDiv } from "./DesktopItems"

const StudentRegistration=()=>{

        const [student,setStudent]=useState(
            {
                name:"",
                phone:"",
                Date:"",
                email:"",
                gender:"male"
            }
        )

    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 g-0" id="stregiForm" style={{display: "block"}}>
        <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: "2"}}>
            <div className="alert window rounded-0 ms-1 me-1">
                <div className="title-bar">
                    <div className="title-bar-text"><span className="p-1"><img src={userkey1}/> Student
                            Registration</span></div>
                    <div className="title-bar-controls">
                        
                        <button onClick={()=>closeDiv('stregiForm')} aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body m-1" style={{overflowY: "scroll", maxHeight:"500px",overflowX: "hidden"}}>
                    <p className="fs-5 mb-0" style={{fontFamily:"more_perfect_dos_vgaregular"}}><u>STUDENT REGISTRATION
                            FORM</u></p>
                    <p style={{fontSize:"medium"}}>Kindly register your college student in our portal for <b>EPITOME
                            2K22</b>,
                        after registration, students can register for individual events.</p>
                    <div className="row row-cols-1 row-cols-md-1 g-3">
                        
                        <form>
                            
                            <div className="col p-2">
                                <div className="card">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3 "><u>Student 1</u> :</p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize:"small"}}>Student Name :</label>
                                                        <input id="text18" type="text" className="inputFieldText" onChange={e=>setStudent({...student,name:e.target.value})}  value={student.name}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize:"small"}}>Mobile : </label>
                                                        <input id="text18" type="text" className="inputFieldText" onChange={e=>setStudent({...student,phone:e.target.value})}  value={student.phone}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize:"small"}}>Email :</label>
                                                        <input id="text18" type="text" className="inputFieldText" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize:"small"}}>Date of Birth :</label>
                                                        <input id="text18" type="date" className="inputFieldText" onChange={e=>setStudent({...student,Date:e.target.value})}  value={student.Date}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize:"small"}}>Gender :</label>
                                                            <select style={{fontSize:"small"}} onChange={e=>setStudent({...student,gender:e.target.value})} >
                                                                <option style={{fontSize:"small"}} value="male">Male</option>
                                                                <option style={{fontSize:"small"}} value="female" >Female</option>
                                                                <option style={{fontSize:"small"}} value="other" >Other</option>
                                                              </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="ms-2 fw-bold">Add New Student</button>
                            <button type="submit" style={{float: "right"}} className="me-2 fw-bold">Submit</button><br/>
                            <hr/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}

export default StudentRegistration