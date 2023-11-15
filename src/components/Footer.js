import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full min-h-[28rem] flex items-center justify-center bg-black">
            <div className="md:w-2/3 w-full px-6 text-white flex flex-col">
                <div className="w-full text-7xl font-bold">
                    <h1 className="w-full md:w-2/3">¡Ponerse en contacto!</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <div> 
                    <p className="w-full md:w-2/3 text-gray-400">
                        Descubre cómo nuestros servicios pueden ayudarle a ser más productivo.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row md:justify-between">
                    <div className="text-gray-400">
                        <p>Email: serviciotecnico@anserviciostecnologicos.com</p>
                        <p>Teléfono: +51 943 980 740 / +51 941 837 077</p>
                    </div>
                    </div>
                    </div>
                    <div className="space-y-4 md:space-y-0 md:space-x-12">
                        <div className="w-44 pt-6 md:pt-0 md:mb-4">
                            <Link href="/contacto" className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                                Contacto
                            </Link>
                        </div>
                        <div className="flex items-center space-x-6 md:mt-4">
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={28} />
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={28} />
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
