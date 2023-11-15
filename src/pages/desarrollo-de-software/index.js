import Head from "next/head";
import {
  LockClosedIcon,
  WrenchScrewdriverIcon,
  ArrowUpRightIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Análisis y Estrategia",
    description:
      "Realizamos un análisis exhaustivo de tus requerimientos y diseñamos una estrategia de desarrollo de software que se alinee con tus metas a corto y largo plazo.",
    icon: LockClosedIcon,
  },
  {
    name: "Diseño y Desarrollo",
    description:
      "Nuestro equipo de expertos se encarga de diseñar y desarrollar soluciones de software que son estéticamente agradables y funcionalmente robustas, utilizando las últimas tecnologías y metodologías en el campo.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Pruebas de Calidad",
    description:
      "Aseguramos la calidad y la fiabilidad de nuestras soluciones a través de pruebas exhaustivas, identificando y corrigiendo cualquier defecto antes del lanzamiento.",
    icon: EyeIcon,
  },
  {
    name: "Mantenimiento y Soporte",
    description:
      "Ofrecemos servicios de mantenimiento y soporte continuo, asegurando que tu software se mantenga actualizado y en óptimas condiciones operativas.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function DataCenter() {
  return (
    <>
      <Head>
        <title>Desarrollo de Software Personalizado | Consultoría IT AN</title>
        <meta name="description" content="Impulsa tu organización con el desarrollo de software. Rendimiento y soluciones personalizadas para tus necesidades tecnológicas." />
        <link rel="canonical" href="https://an-web.vercel.app/desarrollo-software"/>
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
                  Desarrollo de Software.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  En una era dominada por las aplicaciones web y móviles, las
                  aplicaciones de escritorio siguen siendo una herramienta
                  poderosa, ofreciendo rendimiento, estabilidad y
                  personalización superiores. Nos especializamos en el
                  desarrollo de aplicaciones robustas que optimizan los procesos
                  en su organización, reduciendo costos y tiempos innecesarios.
                </p>
              </div>
            </div>
            <img
              src="/image/Desarrollo-software/coding-session-web-development.jpg"
              alt=" Sesión intensiva de programación para el desarrollo web con múltiples pantallas"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 mt-10"
              style={{ maxWidth: "650px", maxHeight: "600px" }}
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
            <p className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl">
              ¿Qué hace una Consultora de Desarrollo de Software?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En esta era digital que avanza a pasos agigantados, contar con una
              consultora de desarrollo de software se ha vuelto esencial para
              empresas y organizaciones que aspiran a innovar, mejorar sus
              procesos y brindar servicios de primera a sus clientes. En nuestro
              equipo, apasionados y expertos en tecnología, nos enfocamos en
              diseñar soluciones de software a medida, pensadas no solo para
              resolver tus necesidades de hoy, sino también para adaptarse y
              enfrentar los retos que nos depara el futuro
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
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custon-blue ">
              Servicios de Desarrollo de Software
            </h2>
            <p className="mb-4 text-gray-700">
              En la encrucijada de la tecnología y la innovación, nos
              enorgullecemos de ser líderes en ofrecer servicios de desarrollo
              de software de alta gama, diseñados para llevar su negocio al
              siguiente nivel. Con una amalgama de creatividad, habilidad
              técnica y profunda comprensión de las necesidades del negocio,
              estamos aquí para ayudarle a forjar soluciones que sean no solo
              viables sino revolucionarias.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full h-96 rounded-lg bg-cover object-cover"
              src="/image/Desarrollo-software/software-engineer-coding-laptop.jpg"
              alt="Ingeniero de software codificando en un laptop en una oficina moderna" data-aos="fade-down"
            />
            <img
              className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
              src="/image/Desarrollo-software/colaboracion-equipo-desarrollo-software.jpg"
              alt="Equipo colaborativo trabajando en desarrollo de software con tabletas y laptops" data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      <Social /> 
      <Footer />
    </>
  );
}
