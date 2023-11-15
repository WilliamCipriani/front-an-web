import Link from "next/link";
import React, { useState } from "react";


function Social() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div data-dial-init className="fixed right-6 bottom-6 group">
    <Link 
        href="https://wa.me/943980740?text=Hola!%20Me%20gustaría%20obtener%20más%20información."
        target="_blank" 
        rel="noopener noreferrer"
        className="flex justify-center items-center w-[80px] h-[80px] rounded-full focus:outline-none transform transition-transform duration-300 hover:scale-150" 
    >
        <button 
            type="button" 
            aria-controls="speed-dial-menu-default"  
        >
            <div id="speed-dial-menu-default" className={`flex flex-col items-center mb-4 space-y-2`}>
                <img src="/image/social.png" className="w-15" alt="icono de whatsapp" width={90} height={90}/>
                <span className="sr-only">Whatsapp</span>
                <div id="tooltip-share" role="tooltip" className="absolute z-10 inline-block w-auto px-3 py-2 text-sm font-medium text-gray transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                    Whatsapp
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </button>
    </Link>
</div>

        </>
    );
}

export default Social;
