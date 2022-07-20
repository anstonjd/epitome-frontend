import { useNavigate } from "react-router-dom";
import altwin from "../assets/win98icons/key_win_alt-2.png";
import RegistrationForm from "./RegistrationForm";

export function FormElements()
{
    const nav=useNavigate();
    /*
        form must be improved a registration file must be created
        navigation must be improved

    */
    return(
        <>     
        
        <div className="row row-cols-1 row-cols-md-2 g-0" id="loginForm" style={{display: "block"}}>
                <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: 2,width: "500px"}}>
                    <div className="alert window rounded-0 ms-1 me-1">
                        <div className="title-bar">
                            <div className="title-bar-text"><span className="p-1">Enter Windows Password</span></div>
                            <div className="title-bar-controls">

                                <button onClick={HideEventReg} aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body m-0" style={{border: "none"}}>
                            <div className="row row-cols-1 row-cols-md-3 g-1">
                                <div className="col col-md-2">
                                    <div className="card" style={{backgroundColor: "transparent",border: "none"}}>
                                        <div className="card-body text-center">
                                            <img src={altwin} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-7">
                                    <form >
                                        <div className="card" style={{backgroundColor: "transparent",border: "none"}}>
                                            <div className="card-body">
                                                <label className="mb-3" style={{fontSize: "small"}}>Type a name to identify yourself to
                                                    Windows. Enter
                                                    a password if you want to.</label>
                                                <div className="field-row">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td><label  htmlFor="text18" style={{fontSize: "small"}}>Username</label>
                                                            </td>
                                                            <td style={{fontSize: "small"}}>:&nbsp;</td>
                                                            <td><input id="text18" type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td><label  htmlFor="text23" style={{fontSize: "small"}}>Password</label>
                                                            </td>
                                                            <td style={{fontSize: "small"}}>:&nbsp;</td>
                                                            <td><input id="text23" type="password" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td><label  htmlFor="text23" style={{fontSize: "small"}}>Domain</label>
                                                            </td>
                                                            <td style={{fontSize: "small"}}>:&nbsp;</td>
                                                            <td><select>
                                                                    <option>Other College</option>
                                                                    <option>Admin</option>
                                                                </select></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="col col-md-3">
                                    <div className="card" style={{backgroundColor: "transparent",border: "none"}}>
                                        <div className="card-body text-center">
                                            <button type="submit" className="fw-bold m-2" onClick={handleOk}>OK</button>
                                            
                                            <button className="fw-bold mt-3" onClick={showRegForm}>New Registration</button>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RegistrationForm/>
        </>

    
    
    );
    function handleOk()
{
    nav('/Home');
}
}

function showRegForm() {
    
    document.getElementById('regiForm').style.display = "block";
}
function HideEventReg() {
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('regiForm').style.display = "none";
}


