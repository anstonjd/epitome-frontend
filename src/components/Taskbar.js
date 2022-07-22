import win0 from "../assets/win98icons/windows-0.png";
import searchcomp from "../assets/win98icons/search_computer-0.png";
import html2 from "../assets/win98icons/html2_new-0.png";
import inputdev from "../assets/win98icons/input_devices-0.png";
import keydelay from "../assets/win98icons/keyboard_delay.png";
import video1 from "../assets/win98icons/video_-1.png";
import paint from "../assets/win98icons/paint_file-3.png";
import searchdir from "../assets/win98icons/search_directory-2.png";
import frag0 from "../assets/win98icons/defragment-0.png";
import muted from "../assets/win98icons/loudspeaker_muted-1.png";
import networkins from "../assets/win98icons/network_internet_pcs_installer-1.png";
import gear1 from "../assets/win98icons/settings_gear-1.png";
import moment from "moment";

export function Taskbar() {

    const showEventReg = (eventid) => {
        document.getElementById(eventid).style.display = "block";
    }
    return (
        <>
            <div className="pt-1  pe-1" style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "silver",
                paddingLeft: "0.5px"
            }}>
                <div className="row row-cols-1 row-cols-md-2 g-0">
                    <div className="col-md-1">

                        <button style={{whiteSpace: "nowrap"}} data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="container-fluid p-0">
                                <div className="row m-0">
                                    <div className="col-6 p-0 pe-2">
                                        <div id="image" style={{display: "inline", whiteSpace: "nowrap"}}>
                                            <img src={win0}/>
                                        </div>
                                    </div>

                                    <div className="col-6 p-0  mt-2 ">
                                        <div id="texts"
                                             style={{display: "inline", whiteSpace: "nowrap", fontSize: "14px"}}>
                                            <b>Start</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </button>
                        <ul className="window dropdown-menu rounded-0 p-0" style={{width: "220px"}}>
                            <div className="row row-cols-2 row-cols-md-2 g-0">
                                <div className="col-md-2 hidden-mobile"
                                     style={{background: "rgba(0, 0, 0, 0) linear-gradient(rgb(0, 0, 128), rgb(16, 132, 208)) repeat scroll 0% 0%"}}>
                                    {/* <div style="position: fixed;bottom:0;transform: rotate(-90deg);" className="text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="text-light fs-6">Events</b></div> */}
                                </div>
                                <div className="col-md-10 p-1 col-10">
                                    <li id="startButtons" className="mb-1"><a href="#"
                                                                              onClick={() => showEventReg("001")}
                                                                              className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={searchcomp}/><span>&nbsp;Peeky
                            Blinders</span></a></li>
                                    <li id="startButtons" className="mb-1"><a href="#"
                                                                              onClick={() => showEventReg("002")}
                                                                              className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={html2}/><span>&nbsp;Mosiac</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#"
                                                                              onClick={() => showEventReg("003")}
                                                                              className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={inputdev}/><span>&nbsp;Super
                            Mario</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={keydelay}/><span>&nbsp;Abacus</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={video1}/><span>&nbsp;Obscura</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={paint}/><span>&nbsp;Pixar</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={searchdir}/><span>&nbsp;Takeshi's
                            Castle</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={video1}/><span>&nbsp;Boogie
                            Voogie</span></a>
                                    </li>
                                    <li id="startButtons" className="mb-1"><a href="#" className="btn rounded-0 p-0"
                                                                              style={{border: "none"}}><img
                                        src={frag0}/><span>&nbsp;Bell
                            Bottom</span></a>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-1 position-absolute top-0 end-0 h-100 hidden-mobile">

                        <div className="mt-1 h-75" style={{
                            position: "relative",
                            MozBoxAlign: "center",
                            alignItems: "center",
                            padding: "0.2vw",
                            marginRight: "0.3vw",
                            borderColor: "grey white white grey",
                            borderStyle: "solid",
                            borderWidth: "2px",

                        }}>
                            <div className="container-fluid p-0">
                                <div className="row p-0">
                                    <div className="offset-1 col-2 p-0">
                                        <img src={muted} data-bs-toggle="tooltip" data-bs-placement="top"
                                             title="No Sound"/>
                                    </div>
                                    <div className="col-2 p-0">
                                        <img src={networkins} data-bs-toggle="tooltip" data-bs-placement="top"
                                             title="Internet access"/>
                                    </div>
                                    <div className="col-2 p-0">
                                        <img src={gear1} data-bs-toggle="tooltip" data-bs-placement="top"
                                             title="Database connection successfull"/>
                                    </div>
                                    <div className="col-4 p-0">
                                        <b style={{fontSize: "12px"}}> {moment().format('h:mm A')} </b>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
