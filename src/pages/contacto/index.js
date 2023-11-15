import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {

        const [requestStatus, setRequestStatus] = useState(null);

        const [formState, setFormState] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormState({
            ...formState,
            [name]: value
            });
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            setRequestStatus('success');
            setFormState({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                    });
            } catch (error) {
                setRequestStatus('error');
            }
        };

    return (
        <>
        <Head>
            <title>Contáctanos - Asesoría y Soporte Técnico | Consultoría IT AN</title>
            <meta name="description" content="Necesitas asesoría experta o soporte técnico? Contacta con Consultoría IT AN para soluciones tecnológicas rápidas y confiables" />
            <link rel="canonical" href="https://an-web.vercel.app/contacto"/>
      </Head>
        <Header />
        <div className="h-full bg-white mt-20">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-custon-blue ">Contacta con Nosotros</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una función beta? ¿Necesita detalles sobre nuestro plan Business? Haznos saber.</p>
                <div className="flex flex-col md:flex-row justify-around pb-16">
                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500 ">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +51 943 980 740 &nbsp;  +51 943 980 740
                            </div>
                        </div>

                        <div className="flex items-center mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-sm md:text-md tracking-wide font-semibold w-40 mr-28">
                                serviciotecnico@anserviciostecnologicos.com  &nbsp;
                                ventas@anserviciostecnologicos.com
                            </div>
                        </div>
                </div>
                <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre Completo</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}  
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="nombre"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Correo</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}  
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}  
                    onChange={handleChange}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Permítenos saber en qué te podemos ayudar"
                    required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formState.message}  
                    onChange={handleChange}
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Deja un comentario..."
                    ></textarea>
                </div>
                <div>
                    {requestStatus === 'success' && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <span className="font-medium">Success alert!</span> Your message was sent successfully.
                        </div>
                    )}
                    
                    {requestStatus === 'error' && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Danger alert!</span> There was an error sending your message. Please try again.
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                    Enviar
                </button>
                </form>
            </div>
        </div>
        <Social />
        <Footer />
        </>
    );
}
