import React from "react";
import Image from "next/image";

function Icons() {
    const IconSvgs = [
        {
          image: "/svg/1.svg",
          text: "Expertos emergentes en diseño y desarrollo de sitios web"
        },
        {
          image: "/svg/2.svg",
          text: "Sitios web optimizados para destacar en los resultados de búsqueda de Google"
        },
        {
          image: "/svg/3.svg",
          text: "Diseños innovadores, cautivadores y con interactividad dinámica."
        },
        {
          image: "/svg/4.svg",
          text: "Diseño web responsivo para smartphones y tablets."
        },
        {
          image: "/svg/5.svg",
          text: "Formación para gestionar con eficacia el contenido de tu sitio web."
        },
        {
          image: "/svg/6.svg",
          text: "Establecemos alianzas duraderas con nuestros clientes."
        },
        {
          image: "/svg/7.svg",
          text: "Nuestros clientes consistentemente expresan su elevada satisfacción con nuestros servicios."
        },
        {
          image: "/svg/8.svg",
          text: "Nos enfocamos íntegramente en ofrecer la máxima calidad."
        },
        {
          image: "/svg/9.svg",
          text: "Equipo de profesionales experimentados y altamente capacitados."
        },
        {
          image: "/svg/10.svg",
          text: "Soporte técnico de excelencia y respuesta ágil."
        },
        {
          image: "/svg/11.svg",
          text: "Propuestas valiosas a precios competitivos."
        },
        {
          image: "/svg/12.svg",
          text: "Monitoreo y gestión continua de su sitio web."
        },
      ]

    return (
       <>
        <section className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 max-w-screen-xl mx-auto pt-10 sm:mx-auto' >
            {IconSvgs.map((IconSvg) => (
            <div key={IconSvg.image} className="flex flex-col items-center justify-center sm:w-full md:w-[310px]" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex flex-col items-center justify-center" style={{ width: '310px', height: '184.4px' }}>
                <div className="p-4" data-id="d38016c" data-element_type="widget" data-widget_type="icon-box.default">
                    <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full overflow-hidden flex items-center justify-center">
                        <Image src={IconSvg.image} alt='Imagen Descriptiva' className="object-cover rotate-on-hover" width={110} height={110}/> 
                    </div>
                    <div className="mt-2 text-center text-sm" style={{ color: '#0E3147' }}>
                        <p>{IconSvg.text}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </section>
       </>
    );
}

export default Icons;
