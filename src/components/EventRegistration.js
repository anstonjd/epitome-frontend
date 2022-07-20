import { closeDiv } from "./DesktopItems"
import appWizard from "../assets/win98icons/appwizard-1.png"
import { useState } from "react"

const EventRegistration=()=>{
    const students=[
        "student 1",
        "student 2",
        "student 3",
        "student 4",
        "student 5",
        "student 6",
        "student 7",
        "student 8"

    ]


    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 g-0" id="eventRegiForm" style={{display: "block"}}>
        <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: 2}}>
            <div className="alert window rounded-0 ms-1 me-1">

                <div className="title-bar">
                    <div className="title-bar-text"><span className="p-1"><img src={appWizard}/> Student
                            Registration</span></div>
                    <div className="title-bar-controls">
                        
                        <button onClick={()=>closeDiv('eventRegiForm')} aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body m-1" style={{overflowY: "scroll", maxHeight:"500px",overflowX: "hidden"}}>
                    <p className="fs-5 mb-0" style={{fontFamily:"more_perfect_dos_vgaregular"}}><u>EVENT REGISTRATION
                            FORM</u></p>
                    <p style={{fontSize:"medium"}}>Select the students from dropdown menu for appropriate events</p>
                    <div className="row row-cols-1 row-cols-md-1 g-3">
                        <form>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3 me-3 bg-dark text-light text-center p-1"><u>PEEKY BLINDERS</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1 "><u>MOSIAC</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                                                
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 2 :</label>
                                                        <select style={{fontSize: "small"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1"><u>SUPER MARIO</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 2 :</label>
                                                        <select style={{fontSize: "small"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 3 :</label>
                                                        <select style={{fontSize: "small"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 4 :</label>
                                                        <select style={{fontSize: "small"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1"><u>ABACUS</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 2 :</label>
                                                        <select style={{fontSize: "small"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3   me-3 bg-dark text-light text-center p-1"><u>OBSCURA</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1 "><u>TAKESHIS CASTLE</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 2 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 3 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1 "><u>BOOGIE VOOGIE</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1"><u>BELL BOTTOM</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="card rounded-0">
                                    <p className="mb-0 fw-bold fs-6 ms-3 mt-3  me-3 bg-dark text-light text-center p-1"><u>PIXAR</u></p>
                                    <div className="row row-cols-1 row-cols-md-2 g-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0" style={{backgroundColor: "transparent"}}>
                                                <div className="card-body">
                                                    <div className="field-row-stacked">
                                                        <label htmlFor="text22" className="fw-bold"
                                                            style={{fontSize: "small"}}>Student 1 :</label>
                                                        <select style={{fontSize: "small",minHeight: "px"}}>
                                                            {
                                        students.map(listitem => (
                                        <option key={listitem}> {listitem}</option>
                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default EventRegistration
