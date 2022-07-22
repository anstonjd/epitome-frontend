
import { Taskbar } from '../components/Taskbar';
import Wallpaper from '../components/Wallpaper';
import { AllEvents } from '../components/AllEvents';
import { DesktopItems } from '../components/DesktopItems';
import { Intro } from '../components/Intro';

export function Win98()
{
    {/*
        this renders the windows screen

    */}
    return(
        <>
            <Intro />
            <Wallpaper/>
            <Taskbar/>
            <DesktopItems />
            <AllEvents />
            
            
            
        </>
    );
}