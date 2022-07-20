import helpbook from "../assets/win98icons/help_book_cool-4.png";
import notepadfile from "../assets/win98icons/notepad_file-2.png";
import gears from "../assets/win98icons/file_gears-2.png";
import recyclebin from "../assets/win98icons/recycle_bin_full_cool-0.png";
import notepad0 from "../assets/win98icons/notepad-0.png";
import cmd from "../assets/win98icons/console_prompt-1.png";
import emptyRecyclebin from "../assets/win98icons/recycle_bin_empty-1.png";
import mydocs5 from "../assets/win98icons/directory_open_file_mydocs-5.png";
import helpbooksmall from "../assets/win98icons/help_book_small-1.png";
import calender from "../assets/win98icons/calendar-1.png"
import file_window from "../assets/win98icons/file_windows-2.png"
import world2 from "../assets/win98icons/world-2.png"
import msagent2 from "../assets/win98icons/msagent-4.png"
import networkcoll0 from "../assets/win98icons/network_cool_two_pcs-0.png"
import RegistrationForm from "./RegistrationForm";


export function DesktopItems(props)
{
    {/*
        Foor Destop shortcuts
        needs more ooped
        add this to layout
        create components of these
        

    */}
    return(
        <>
            <RegistrationForm />
            <div className="position-absolute bottom-0 end-0 text-center text-light fs-7 mb-4"
                style={{textDecoration: "none"}}>
                    <div className="row row-cols-1 row-cols-md-1 g-0">
                        <div className="col">
                            <div className="card" style={{backgroundColor: "transparent", border: "none"}}>
                                <div className="card-body">
                                    <a href="#" className="text-light"
                                        style={{textDecoration: "none", outline: "none", border: "none"}}><img
                                        src={recyclebin} onClick={()=>showDiv('recycleBin')}/><br/>Recycle Bin</a><br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="position-absolute bottom-0 start-0 text-center text-light fs-7 mb-4" style={{textDecoration: "none"}}>
                 <div className="row row-cols-1 row-cols-md-1 g-0">
                    <div className="col">
                        <div className="card" style={{backgroundColor:"transparent",border: "none"}}>
                            <div className="card-body">
                                <a href="#" className="text-light" style={{textDecoration: "none",outline: "none",border: "none"}}><img
                                        src={networkcoll0}
                                        onClick={()=>showDiv('regiForm')} /><br/>College<br/>Login / Registraion</a><br/><br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-light fs-7 mb-4 centerIcons"
                style={{textDecoration: "none"}}>
                <div className="row row-cols-1 row-cols-md-1 g-0">
                    <div className="col">
                        <div className="card" style={{backgroundColor:"transparent",border: "none"}}>
                            <div className="card-body">
                                <div className="row row-cols-2 row-cols-md-4 g-0">
                                    <div className="col">
                                        <div className="card border-0" style={{backgroundColor: "transparent"}}>
                                            <div className="card-body">
                                                <a href="#" className="text-light" style={{textDecoration: "none",outline: "none",border: "none"}}><img
                                                    src={file_window} /><br/> About us</a>
                                            <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0" style={{backgroundColor: "transparent"}}>
                                            <div className="card-body">
                                                <a href="#" className="text-light" style={{textDecoration: "none",outline: "none",border: "none"}}><img
                                                    src={world2}/><br/>Locate us</a>
                                            <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0" style={{backgroundColor: "transparent"}}>
                                            <div className="card-body">
                                                <a href="#" className="text-light" style={{textDecoration: "none",outline: "none",border: "none"}}><img
                                                    src={msagent2} /><br/>Rules</a>
                                            <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0" style={{backgroundColor: "transparent"}}>
                                            <div className="card-body">
                                                <a href="#" className="text-light" style={{textDecoration: "none",outline: "none",border: "none"}}><img
                                                    src={calender}/><br/>Schedule</a>
                                            <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Applicatins />
            
            <div className="position-absolute top-0 start-0 text-center text-light fs-7"
                    style={{textDecoration: "none"}}>
                    <div className="row row-cols-1 row-cols-md-1 g-0">
                        <div className="col">
                            <div className="card" style={{backgroundColor: "transparent", border: "none"}}>
                                <div className="card-body">
                                    {/* mak button links */}
                                    <a href="#" className="text-light"
                                    style={{textDecoration: "none", outline: "none", border: "none"}}><img
                                        src={helpbook} onClick={()=>showDiv('help_exe')}/><br/>Help.exe</a><br/><br/>
                                    <a href="#" className="text-light"
                                    style={{textDecoration: "none", outline: "none", border: "none"}} id="a"><img
                                        src={notepadfile} onClick={()=>showDiv('event_list')}/><br/>Event
                                        List.txt</a><br/><br/>
                                    <a href="#" className="text-light"
                                    style={{textDecoration: "none", outline: "none", border: "none"}}><img
                                        src={gears} onClick={()=>showDiv('terminalInst')}/><br/>Instructions.bat</a><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}



function Applicatins()
{
    {/*
        Application dont know why but it should run before desktop shortcuts like first must install app before creating shortcut 
        but this results in shortcuts appering above app

        must oop the below program

    */}
    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col col-md-4 rounded-0 position-absolute top-50 start-50 translate-middle" id="help_exe"
                     style={{zIndex: 2, display: "none"}}>
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text"><img src={helpbooksmall}/>&nbsp;Help</div>
                            <div className="title-bar-controls">
                                <button aria-label="Close" onClick={()=>closeDiv('help_exe')}></button>
                            </div>
                        </div>
                        <div className="window-body">
                            <div>
                                <p style={{fontFamily: "more_perfect_dos_vgaregular", fontSize: "medium"}}
                                   className="text-center">
                                    <b><u>Epitome Event Staff Coordinators are :</u></b>
                                </p>
                                <table style={{fontFamily: "more_perfect_dos_vgaregular", fontSize: "medium"}}>
                                    <tbody>
                                    <tr>
                                        <td>Dr. Rakesh</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. Sucheta</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr/>
                            <div>
                                <p style={{fontFamily: "more_perfect_dos_vgaregular", fontSize: "medium"}}
                                   className="text-center">
                                    <b><u>Epitome Event Student Coordinators are :</u></b>
                                </p>
                                <table style={{fontFamily: "more_perfect_dos_vgaregular", fontSize: "medium"}}>
                                    <tbody>
                                    <tr>
                                        <td>Chenessa</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    <tr>
                                        <td>Swasthik</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    <tr>
                                        <td>Suresh</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    <tr>
                                        <td>Sandeep</td>
                                        <td>:</td>
                                        <td>+91 9191919191</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col col-md-4 rounded-0 position-absolute top-50 start-50 translate-middle"
                     id="event_list"
                     style={{zIndex: 2, display: "none"}}>
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text"><img src={notepad0}/>&nbsp;Event List.txt</div>
                            <div className="title-bar-controls">

                                <button aria-label="Close" onClick={()=>closeDiv("event_list")}></button>
                            </div>
                        </div>
                        <div className="window-body">
                            <b style={{fontSize: "medium"}}><u>F</u>ile</b>
                            <b style={{fontSize: "medium"}}>&nbsp;&nbsp;&nbsp;<u>E</u>dit</b>
                            <b style={{fontSize: "medium"}}>&nbsp;&nbsp;&nbsp;<u>S</u>earch</b>
                            <b style={{fontSize: "medium"}}>&nbsp;&nbsp;&nbsp;<u>H</u>elp</b>

                            <div className="bg-light pb-3" style={{
                                padding: "0.2vw",
                                marginight: "0.3vw",
                                borderColor: "grey white white grey",
                                borderStyle: "solid",
                                borderWidth: "2px", overflowY: "scroll", maxHeight: "500px"
                            }}>
                                <div>
                                    <p style={{fontFamily: "more_perfect_dos_vgaregular", fontSize: "medium"}}
                                       className="text-center">
                                        <b><u>List of events are as follows:</u></b>
                                    </p>
                                    <table style={{fontSize: "medium", fontFamily: "more_perfect_dos_vgaregular"}}
                                           className="text-center mx-auto" border="1">
                                        <tbody>
                                        <tr>
                                            <td style={{border: " 1px solid"}}><b><u>Event Name</u></b></td>
                                            <td style={{border: " 1px solid"}}><b><u>Event heads</u></b></td>
                                            <td style={{border: " 1px solid"}}><b><u>Contact Details</u></b></td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Peeky Blinders</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Mosiac</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Super Mario</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Abacus</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Obscura</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Pixar</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Takeshi's Castle</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Boogie Voogie</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        <tr>
                                            <td style={{border: " 1px solid"}}>Bell Bottom</td>
                                            <td style={{border: " 1px solid"}}>Lorem, ipsum.</td>
                                            <td style={{border: " 1px solid"}}>+91 9191919191</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-1 g-0">
                <div className="col col-md-5 rounded-0 position-absolute top-75 end-0 translate-middle-y"
                     id="terminalInst"
                     style={{zIndex: 0, display: "block"}}>
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text"><img src={cmd}/><span
                                className="p-1">C:\WINDOWS\System32\cmd.exe</span></div>
                            <div className="title-bar-controls">
                                
                                <button aria-label="Close" onClick={()=>closeDiv("terminalInst")}></button>
                            </div>
                        </div>
                        <div className="window-body">
                            <div className="p-1" style={{backgroundColor: "black", color: "white"}}>
                                <div className="terminal98" style={{overflowY: "scroll", height: "250px"}}>
                                    <p style={{fontFamily: "more_perfect_dos_vgaregular", color: "yellow"}}
                                       className="fs-6">St Aloysius
                                        Institute of
                                        Management
                                        &
                                        Information Technology (AIMIT)<br/><span style={{color: "#5ACFD9"}}>Epitome [Version :
                        2022.07.28]</span></p>
                                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}} className="fs-6"></p>
                                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}}
                                       className="fs-6">C:\Users\Epidome\Desktop\Instrutions.bat</p>
                                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}} className="fs-6">Lorem ipsum
                                        dolor sit amet,
                                        consectetur
                                        adipisicing elit. Incidunt molestias tempora dicta commodi voluptates iste, rem
                                        inventore.
                                        Magni
                                        aliquid quam doloremque aspernatur. Consequuntur veritatis iure inventore
                                        beatae. Sequi,
                                        iste
                                        repellat! Excepturi impedit vitae, nam voluptates totam ex dignissimos
                                        necessitatibus
                                        perferendis
                                        nulla error facere commodi. Ut sequi beatae corporis, neque mollitia officia
                                        laudantium
                                        dicta
                                        culpa
                                        quibusdam impedit earum, adipisci nihil, expedita quos rerum cumque tempore hic?
                                        Debitis,
                                        consequatur quas quam magni reprehenderit officia vero? Architecto fuga
                                        exercitationem
                                        corrupti
                                        dolores harum deleniti temporibus aliquid dolor. A animi reiciendis omnis minus
                                        commodi,
                                        repellendus
                                        sint dolor consequuntur itaque soluta cumque maxime accusantium nesciunt
                                        explicabo,
                                        quibusdam
                                        nam
                                        hic, quisquam deleniti dicta vel sunt. Voluptatem nemo reprehenderit mollitia
                                        quibusdam
                                        porro
                                        necessitatibus numquam, dignissimos fugiat cum dolorem! Eum placeat
                                        necessitatibus veritatis
                                        nobis.
                                        Eveniet saepe, perspiciatis temporibus omnis hic rem architecto autem explicabo
                                        accusantium
                                        unde
                                        corporis similique pariatur odit vitae ducimus et quo animi nisi in. Animi, unde
                                        doloremque
                                        eveniet
                                        odit itaque placeat expedita iste magnam modi ipsum, voluptas fugiat temporibus
                                        at id
                                        consequatur
                                        quam tempora, tempore quia officiis accusantium suscipit nostrum neque
                                        doloribus? Corrupti
                                        debitis
                                        necessitatibus odit porro laborum omnis! Beatae maiores sapiente ut placeat
                                        aspernatur nam
                                        animi
                                        eius nesciunt aliquid, eos officia cum perferendis alias! Suscipit?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-2 g-0" id="recycleBin" style={{display: "none"}}>
                <div className="col position-absolute top-50 start-50 translate-middle" style={{zIndex: 2}}>
                    <div className="alert window rounded-0 ms-1 me-1">
                        {/* Add width style to specify the width of the componets abpve (remember u have to give for mobile as well) */}
                        <div className="title-bar">
                            <div className="title-bar-text"><img src={emptyRecyclebin}/><span
                                className="p-1">Recycle Bin</span></div>
                            <div className="title-bar-controls">
                                
                                <button onClick={()=>closeDiv("recycleBin")} aria-label="Close"></button>
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
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>G</u>o</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>F</u>avorites</b>
                                                <b style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;<u>H</u>elps</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="window p-2 pb-3 mb-0 "
                             style={{
                                 backgroundColor: "white",
                                 height: "300px",
                                 maxHeight: "450px",
                                 overflowY: "scroll",
                                 overflowX: "scroll",
                                 border: "none"
                             }}>
                            <div className="row row-cols-3 row-cols-md-6 g-0">
                                <div className="col">
                                    <div className="card border-0">
                                        <div className="card-body text-center">
                                            <img src={mydocs5}/><br/>Epitome 2019
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0">
                                        <div className="card-body text-center">
                                            <img src={mydocs5}/><br/>Epitome 2018
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0">
                                        <div className="card-body text-center">
                                            <img src={mydocs5}/><br/>Epitome 2017
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="status-bar">
                            <p className="status-bar-field">3 object(s)</p>
                            <p className="status-bar-field">39 megabytes</p>
                            <p className="status-bar-field"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function showDiv(id) {
    document.getElementById(id).style.display = "block";
}
export function closeDiv(id) {
    document.getElementById(id).style.display = "none";
}