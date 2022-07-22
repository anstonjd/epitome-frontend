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
import StudentRegistration from "./StudentRegistration";




const TestFile=()=>{
    const showEventReg=(eventid)=>{
        document.getElementById(eventid).style.display = "block";
    }
    
    return(
        <>
       <StudentRegistration/>
    </>
    )
}
function closeDiv(id) {
    document.getElementById(id).style.display = "none";
}

export default TestFile