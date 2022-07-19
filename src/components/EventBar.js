import html4 from "../assets/win98icons/html-4.png";
import {useState} from 'react';


export function EventBar(props)
{
    props=props.details;
    {/*  

    ooped EventBar used mostly for start menu

    improve the form for event

    there might be a redundent design


    <EventBar  details={{eventName:"Event Name",
        eventId:"001",
        eventDetails:"details",
        cordinatorName:"john doe",
        cordinatorNumber:"+91 99999999999999",
        eventIns:"Instructions",
        eventRules:["rule1","rule2","rule3"]
        
    }
      } />


        */}

    const [details,setDetails]=useState({
        eventName:props.eventName,
        firstName:"",
        surName:"",
        regNo:""
    });
    
    function HideEventReg() {
        document.getElementById(props.eventId).style.display = "none";
    }
    return(
        
        <div className="row row-cols-1 row-cols-md-2 g-0" style={{display: "none"}} id={props.eventId}>
                <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: 2}}>
                    <div className="alert window rounded-0 ms-1 me-1">
                        {/*  Add width style to specify the width of the componets abpve (remember u have to give for mobile as well)  */}
                        <div className="title-bar">
                            <div className="title-bar-text"><img src={html4}/><span className="p-1">{props.eventName} - Microsoft
                    Internet Explorer</span></div>
                            <div className="title-bar-controls">
                                <button onClick={HideEventReg} aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body m-0" style={{border: "none"}}>
                            <div className="row row-cols-1 row-cols-md-1 g-0 p-0 m-0">
                                <div className="col">
                                    <div className="window">
                                        <div className="window-body">
                                            <div style={{margin: "8px"}}>
                                                <b style={{fontSize: "small"}}><u>F</u>ile</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>E</u>dit</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>V</u>iew</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>F</u>avorites</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>T</u>ools</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>H</u>elps</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="window">
                                        <div className="window-body">
                                            <div style={{margin: "8px"}}>
                                                <div className="row row-cols-1 row-cols-md-3 g-0 p-0 m-0" >
                                                    <div className="col col-md-1">
                                                        <b style={{fontSize: "small"}}>A<u>d</u>dress</b>
                                                    </div>
                                                    <div className="col" >
                                                        <select>
                                                            <option
                                                                style={{
                                                                    fontFamily: "more_perfect_dos_vgaregular",
                                                                    fontSize: "small"
                                                                }}>
                                                                https://www.aimit.edu.in/epitome/{props.eventName.replace(/\s+/g, '')}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col ms-4">&nbsp;
                                                        <button>Go</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="window p-2 pb-3 mb-0"
                             style={{
                                 backgroundColor: "white",
                                 maxHeight: "450px",
                                 overflowY: "scroll",
                                 border: "none"
                             }}>
                            <p className="fs-4 mb-0" style={{fontFamily: "more_perfect_dos_vgaregular"}}><b><u>
                                {props.eventName}
                                
                                </u></b>
                            </p>
                            <span className="fw-bold" style={{fontSize: "small"}}>Coordinator : {props.cordinatorName} {props.cordinatorno}
                            </span><br/>
                            <span>{props.eventDetails}</span><br/><br/>
                            <p className="fs-5 mb-0"><b>Instructions / Rules :</b></p>
                                {props.eventIns}
                            <ol>
                                    {
                                        props.eventRules.map(listitem => (
                                        <li key={listitem}> {listitem}</li>
                                            ))}
                            </ol>
                            <hr/>
                            <p className="fs-5 mb-2 "><b>Event Registration Form</b></p>
                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom01" className="form-label"
                                           style={{fontSize: "small"}}>First
                                        name</label>
                                    <input type="text" className="form-control" id="validationCustom01" 
                                        onChange={e=>setDetails({...details,firstName:e.target.value})} value={details.firstName}  required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label"
                                           style={{fontSize: "small"}}>Last
                                        name</label>
                                    <input type="text" className="form-control" id="validationCustom02" 
                                        onChange={e=>setDetails({...details,firstName:e.target.value})} value={details.surName}
                                           required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustomUsername" className="form-label"
                                           style={{fontSize: "small"}}>Registraion Number</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="validationCustomUsername"
                                               aria-describedby="inputGroupPrepend" onChange={e=>setDetails({...details,firstName:e.target.value})} value={details.regNo} required/>
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 ">
                                    <button style={{float: "right"}} type="submit"><b>Submit </b></button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
    );

}

