import React from "react";
import '../assets/styles/98.css'
import cmd from '../assets/win98icons/console_prompt-1.png'

const Terminal = () => {
    return (
        <div className="alert window rounded-0 ms-1 me-1">
            {/*} Add width style to specify the width of the componets abpve (remember u have to give for mobile as well) */}
            <div className="title-bar">
                <div className="title-bar-text"><img src={cmd} alt=""/><span
                    className="p-1">C:\WINDOWS\System32\cmd.exe</span></div>
                <div className="title-bar-controls">
                    {/*} <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button> */}
                    <button data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <div className="p-1" style={{backgroundColor: "black", color: "white"}}>
                <div className="terminal98">
                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}} className="fs-6">St Aloysius Institute of
                        Management &
                        Information Technology (AIMIT)<br/>Epidome [Version : 2022.07.28]</p>
                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}} className="fs-6"></p>
                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}}
                       className="fs-6">C:\epidome_instrutions.exe</p>
                    <p style={{fontFamily: "more_perfect_dos_vgaregular"}} className="fs-6">Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Incidunt molestias tempora dicta commodi voluptates iste, rem inventore. Magni
                        aliquid quam doloremque aspernatur. Consequuntur veritatis iure inventore beatae. Sequi, iste
                        repellat! Excepturi impedit vitae, nam voluptates totam ex dignissimos necessitatibus
                        perferendis
                        nulla error facere commodi. Ut sequi beatae corporis, neque mollitia officia laudantium dicta
                        culpa
                        quibusdam impedit earum, adipisci nihil, expedita quos rerum cumque tempore hic? Debitis,
                        consequatur quas quam magni reprehenderit officia vero? Architecto fuga exercitationem corrupti
                        dolores harum deleniti temporibus aliquid dolor. A animi reiciendis omnis minus commodi,
                        repellendus
                        sint dolor consequuntur itaque soluta cumque maxime accusantium nesciunt explicabo, quibusdam
                        nam
                        hic, quisquam deleniti dicta vel sunt. Voluptatem nemo reprehenderit mollitia quibusdam porro
                        necessitatibus numquam, dignissimos fugiat cum dolorem! Eum placeat necessitatibus veritatis
                        nobis.
                        Eveniet saepe, perspiciatis temporibus omnis hic rem architecto autem explicabo accusantium unde
                        corporis similique pariatur odit vitae ducimus et quo animi nisi in. Animi, unde doloremque
                        eveniet
                        odit itaque placeat expedita iste magnam modi ipsum, voluptas fugiat temporibus at id
                        consequatur
                        quam tempora, tempore quia officiis accusantium suscipit nostrum neque doloribus? Corrupti
                        debitis
                        necessitatibus odit porro laborum omnis! Beatae maiores sapiente ut placeat aspernatur nam animi
                        eius nesciunt aliquid, eos officia cum perferendis alias! Suscipit?</p>
                </div>
            </div>
        </div>
    );
}

export default Terminal
