import Head from "next/head";
import {
  LockClosedIcon,
  WrenchScrewdriverIcon,
  ArrowUpRightIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Resiliencia y Continuidad de Negocio",
    description:
      "Diseñamos infraestructuras que garantizan una operatividad continua, minimizando las interrupciones y permitiendo una recuperación rápida en caso de fallos o desastres.",
    icon: LockClosedIcon,
  },
  {
    name: "Eficiencia Energética",
    description:
      "Priorizamos soluciones que no solo sean poderosas y fiables, sino también eficientes en términos de consumo energético, ayudando a reducir costos y promoviendo la sostenibilidad ambiental.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Seguridad de la Información",
    description:
      " Implementamos robustos protocolos de seguridad para proteger la integridad y confidencialidad de tus datos, resguardando tu empresa contra accesos no autorizados y otras amenazas cibernéticas.",
    icon: EyeIcon,
  },
  {
    name: "Personalización y Escalabilidad",
    description:
      "Ofrecemos estrategias de personalización, permitiendo que el centro de datos se ajuste perfectamente a las necesidades específicas de tu negocio, y proporcionando opciones escalables que se pueden expandir a medida que crece tu empresa.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function DataCenter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["/image/Data-center/revision-instalaciones-data-center.jpg", 
  "/image/Data-center/planificacion-arquitectura-data-center.jpg"
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
        <title>Consultoría IT AN| Expertos en Arquitectura de Redes y Tecnología</title>
        <meta name="description" content="Descubre con Consultoría IT AN cómo una arquitectura de redes eficiente y un diseño estratégico pueden transformar la infraestructura de tu empresa." />
        <link rel="canonical" href="https://an-web.vercel.app/data-center"/>
      </Head>
      <Header />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg" data-aos="fade-up">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Servicios tecnológicos
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl">
                  Consultoría e implementación de Data Center
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  Un data center bien configurado puede ser la diferencia entre
                  una operación empresarial fluida y una llena de obstáculos y
                  retrasos. Nuestro servicio de consultoría e implementación de
                  data center está aquí para asegurar que su negocio cuente con
                  una infraestructura de TI robusta y eficiente. Desde la
                  planificación hasta la implementación, nos ocupamos de cada
                  detalle, asegurando que su data center no solo atienda las
                  necesidades actuales, sino que esté preparado para el
                  crecimiento futuro. Con nosotros, su data center será un
                  núcleo de innovación y excelencia operativa.
                </p>
              </div>
            </div>
            <div
              id="animation-carousel"
              className="relative w-full"
              style={{ width: "40rem", height: "30rem" }}
            >
              <div className="relative h-full overflow-hidden rounded-lg">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`${
                      activeIndex === index ? "block" : "hidden"
                    } duration-200 ease-linear`}
                    data-carousel-item
                  >
                    <img
                      src={src}
                      className={`absolute block w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover`}
                      alt={`Imagen ${index + 1}`}
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
          <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
            <p className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl">
              ¿Qué hace una Consultora e Implementación de Data Center?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestra consultoría e implementación de Data Center asiste a las
              empresas en la planificación y diseño de la arquitectura requerida
              y escalable, estableciendo centros de datos eficientes y seguros.
              Nuestra labor comienza con un análisis organizacional, seguido por
              la selección del hardware y equipamientos idóneos que faciliten
              una gestión óptima de los activos de datos.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16" data-aos="fade-up">
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
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custon-blue">
              Servicios de Consultoría de Data Center
            </h2>
            <p className="mb-4 text-gray-700">
              En una era donde la infraestructura tecnológica actúa como la
              columna vertebral de las empresas modernas, nuestra consultoría se
              especializa en brindar soluciones líderes en el sector de Data
              Centers. Navegamos a través del vasto océano de desafíos
              tecnológicos, guiando a las organizaciones hacia la creación y
              optimización de centros de datos altamente eficientes y seguros.
              Con una combinación única de experiencia técnica y visión
              estratégica, estamos preparados para transformar tus necesidades
              iniciales en infraestructuras sólidas que pueden impulsar tu
              negocio hacia adelante.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full h-96 rounded-lg bg-cover object-cover"
              src="/image/Data-center/rack_datacenter.jpg"
              alt="Centro de datos con torres de servidores" data-aos="fade-down"
            />
            <img
              className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
              src="/image/Data-center/servidores_datacenter.jpg"
              alt="Primer plano de servidores con luces" data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      <Social /> 
      <Footer />
    </>
  );
}
