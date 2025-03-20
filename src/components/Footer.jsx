import React from "react";
function Footer() {
    return (
        <footer className="mt-2 text-emerald-900 bg-green-100 flex justify-between font-['Fira_Sans']">
            <div className="flex align-items-start items-center p-2">
                <p>ReVive. Derechos reservados.</p>     
            </div>
            <div className="flex items-end p-2">
                <ul className="flex items-center space-x-1">
                    <li>
                        <p>Política de privacidad</p> 
                    </li>
                    <li>
                        <p >Condiciones</p> 
                    </li>
                </ul>
            </div> 
        </footer>    
    );
}

export default Footer