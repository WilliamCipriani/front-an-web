import Head from "next/head";
import { useState } from "react";
import {
  LockClosedIcon,
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Adaptabilidad Multiplataforma",
    description:
      "Nos aseguramos de que tu sitio web ofrezca una experiencia de usuario óptima en una amplia variedad de dispositivos, desde computadoras de escritorio hasta smartphones, asegurando así una mayor alcance y engagement.",
    icon: AcademicCapIcon,
  },
  {
    name: "SEO y Marketing Digital Integrado",
    description:
      "Aprovechamos las mejores prácticas de SEO y estrategias de marketing digital para aumentar la visibilidad de tu sitio web, atrayendo así a un público más amplio y fomentando el crecimiento de tu negocio.",
    icon: LightBulbIcon,
  },
  {
    name: "Soporte Técnico y Mantenimiento Continuo",
    description:
      "Ofrecemos soporte técnico continuo y mantenimiento web para garantizar que tu sitio web funcione de manera eficiente en todo momento, ajustándonos a las últimas tendencias y actualizaciones tecnológicas.",
    icon: ArrowPathIcon,
  },
  {
    name: "Formaciones y Workshops",
    description:
      " Proporcionamos formaciones y talleres personalizados para que tu equipo esté bien equipado con las habilidades y el conocimiento necesario para manejar y actualizar el sitio web por sí mismos, promoviendo así la autosuficiencia y la innovación continua.",
    icon: LockClosedIcon,
  },
];

export default function DesarrolloWeb() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: "/image/Desarrollo-web/trabajo-codigo-desarrollo-web.jpg",
      alt: "Laptop mostrando código fuente, lugar de trabajo para desarrollo de sitios web.",
    },
    {
      src: "/image/Desarrollo-web/desarrollador-web-en-accion.jpg",
      alt: "Desarrollador profesional trabajando en código de desarrollo web en un ambiente de oficina.",
    },
    {
      src: "/image/Desarrollo-web/enfoque-programacion-desarrollo-web.jpg",
      alt: "Vista a través de gafas enfocando código en pantallas, simbolizando la claridad en el desarrollo web.",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Head>
        <title>Desarrollo de Software Personalizado | Consultoría IT AN</title>
        <meta
          name="description"
          content="Sumérgete en el desarrollo web que marca tendencia. Creamos sitios que capturan tu esencia y ofrecen una experiencia de usuario sin igual."
        />
        <link rel="canonical" href="https://an-web.vercel.app/desarollo-web" />
      </Head>
      <Header />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg" >
                <h2 className="text-base font-semibold leading-7 text-indigo-600" data-aos="fade-down">
                  Servicios tecnológicos
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl" data-aos="fade-down">
                  Desarrollo Web.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify" data-aos="fade-down">
                  En esta era digital, su sitio web es su tarjeta de visita, la
                  primera impresión que dejas en tus clientes potenciales.
                  Nuestros servicios de desarrollo web están dedicados a crear
                  experiencias online memorables, combinando diseño estético con
                  funcionalidad sin fisuras. Ya sea un sitio web corporativo
                  informativo o una plataforma de comercio electrónico dinámica,
                  creamos soluciones que no solo lucen bien, sino que también
                  funcionan a la perfección, asegurando que sus visitantes
                  vuelvan por más.
                </p>
              </div>
            </div>

            <div
              id="animation-carousel"
              className="relative w-full"
              style={{ width: "40rem", height: "30rem" }}
            >
              <div className="relative h-full overflow-hidden rounded-lg" >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      activeIndex === index ? "block" : "hidden"
                    } duration-200 ease-linear`}
                    data-carousel-item
                  >
                    <img
                      src={image.src}
                      className={`absolute block w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover`}
                      alt={image.alt}
                      style={{ width: "40rem", height: "30rem" }}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handlePrev}
                type="button"
                className=" absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center" >
            <p className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl" data-aos="fade-up">
              ¿Qué hace una Consultora de Desarrollo Web?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up">
              Una consultora de desarrollo web asiste a empresas y
              organizaciones en la creación y optimización de sitios web. Se encargan de conceptualizar, diseñar e
              implementar soluciones web que se alinean con los objetivos y la
              identidad de la marca de un cliente. Además, incorporamos las
              últimas tecnologías para darle vida al diseño y hacerlo versátil y
              flexible.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16" data-aos="fade-down">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-orange">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg " data-aos="fade-up">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custon-blue ">
              Nuestros Servicios
            </h2>
            <p className="mb-4 "></p>
            <ul className="text-gray-700">
              <li>
                Diseño Web Personalizado
                <ul>
                  <li className="mx-5">
                    Creación de Prototipos y Diseño de Interfaces de Usuario
                  </li>
                  <li className="mx-5">
                    SExperiencia del Usuario (UX) Optimizada
                  </li>
                </ul>
              </li>
              <li>
                Desarrollo Frontend
                <ul>
                  <li className="mx-5">HTML5, CSS3 y JavaScript</li>
                  <li className="mx-5">
                    Frameworks Modernos (React, Next.js, Vue.js)
                  </li>
                </ul>
              </li>
              <li>
                Desarrollo Backend
                <ul>
                  <li className="mx-5">Soluciones de Backend Escalables</li>
                  <li className="mx-5">Integración con Bases de Datos</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full h-96 rounded-lg bg-cover object-cover"
              src="/image/Desarrollo-web/desarrollador-web-en-accion.jpg"
              alt="Desarrollador profesional trabajando en código de desarrollo web en un ambiente de oficina."
              data-aos="fade-down"
            />
            <img
              className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
              src="/image/Desarrollo-web/enfoque-programacion-desarrollo-web.jpg"
              alt="Vista a través de gafas enfocando código en pantallas, simbolizando la claridad en el desarrollo web"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      <Social />
      <Footer />
    </>
  );
}
