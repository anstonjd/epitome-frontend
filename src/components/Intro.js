import sound from "../sounds/Windows_98_Startup.mp3";

export function Intro()
{
    {/*
        start up sound
    

    */}
    return(
        <>
        <iframe src="sounds/Windows_98_Startup.mp3" allow="autoplay" style={{display:"none"}} id="iframeAudio" title="intro">
        </iframe>
        <audio autoPlay><source src={sound} type="audio/mpeg" /></audio>
        </>
    );
}