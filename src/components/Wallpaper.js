import React from "react";
import '../assets/styles/style.css'
import '../assets/styles/98.css'
import '../assets/styles/specimen_stylesheet.css'
import '../assets/styles/Wallpaper.css'
import logo from '../assets/win98icons/logo.png'

const Wallpaper = () => {
    return (
        <React.Fragment>
            <div className="position-absolute top-0 start-50 translate-middle-x mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-0 align-items-center">
                    <div className="col-md-1 col">
                        <div className="card align-items-center rounded-0 border-0"
                             style={{backgroundColor: "transparent"}}>
                            <img src={logo} className="card-img-top imgLogo" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-11 col">
                        <div className="card rounded-0 border-0" style={{backgroundColor: "transparent"}}>
                            <div className="card-body">
                                <h5 className="card-title text-light text-center logoFont collegeFont"
                                    style={{textAlign: "justify"}}>St Aloysius
                                    College<span className="subLogoFont">&nbsp;(Autonomous)</span><br/> Institute of
                                        Management &
                                        Information Technology<br/>(<b>AIMIT</b>)</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="align-middle" style={{position: "sticky"}}>
                <div className="hero-container">

                    <h2 className="hero glitch layers" style={{fontFamily: "more_perfect_dos_vgaregular"}}
                        data-text="EPITOME">
                        <span className="e1-epitome">E</span>
                        <span className="p-epitome">P</span>
                        <span className="i-epitome">I</span>
                        <span className="t-epitome">T</span>
                        <span className="o-epitome">O</span>
                        <span className="m-epitome">M</span>
                        <span className="e2-epitome">E</span>
                    </h2> &nbsp;
                    <h2 className="hero glitch layers epitome2k22" style={{fontFamily: "more_perfect_dos_vgaregular"}}
                        data-text="2k22">
                        <span>2K22</span>
                    </h2>
                </div>
            </div>
        </React.Fragment>
)
}

export default Wallpaper