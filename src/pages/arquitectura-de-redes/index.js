import Head from "next/head";
import {
  LockClosedIcon,
  WrenchScrewdriverIcon,
  ArrowUpRightIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Seguridad de Red",
    description:
      "Implementamos robustas medidas de seguridad para proteger tu red de amenazas externas e internas, garantizando la integridad y confidencialidad de tus datos en todo momento.",
    icon: LockClosedIcon,
  },
  {
    name: "Rendimiento y Escalabilidad",
    description:
      "Diseñamos arquitecturas de red que no solo cumplen con tus requisitos actuales, sino que también son capaces de adaptarse y crecer con tu empresa, garantizando un rendimiento óptimo en todo momento.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Gestión y Monitoreo Continuo",
    description:
      "Ofrecemos soluciones de gestión de red que permiten un monitoreo continuo del estado y rendimiento de tu red, facilitando la identificación y resolución rápida de cualquier problema que pueda surgir.",
    icon: EyeIcon,
  },
  {
    name: "Soporte Técnico Especializado",
    description:
      "Nuestro equipo de expertos está siempre a disposición para brindarte el soporte técnico que necesitas, ayudándote a resolver cualquier problema de red de manera rápida y eficiente, minimizando así cualquier tiempo de inactividad.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function ArquitecturaRedes() {
  return (
    <>
      <Head>
        <title>Consultoría IT AN| Expertos en Arquitectura de Redes y Tecnología</title>
        <meta name="description" content="Descubre con Consultoría IT AN cómo una arquitectura de redes eficiente y un diseño estratégico pueden transformar la infraestructura de tu empresa." />
        <link rel="canonical" href="https://an-web.vercel.app/arquitectura-redes"/>
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
                  Diseño e implementación de Arquitectura de Redes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  En el mundo actual, la robustez de una organización puede
                  medirse a través de la eficacia de su red. Nuestro servicio
                  especializado en diseño e implementación de arquitectura de
                  redes garantiza una red resiliente y optimizada. Definimos el
                  dimensionamiento de los recursos informáticos según la carga
                  de trabajo para poder brindar una arquitectura de red robusta
                  y escalable.
                </p>
              </div>
            </div>
            <img
              src="/image/Redes/cables-de-red-tecnologia-informatica.jpg"
              alt="Cables de red conectados a un switch, detalle de infraestructura de red."
              className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
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
              ¿Qué hace una Consultora de Diseño e Implementación de
              Arquitectura de Redes?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Una consultora especializada en diseño e implementación de
              arquitectura de redes asiste a las organizaciones en la creación y
              optimización de sus infraestructuras de red. Desde la fase inicial
              de análisis de requisitos, ayuda a entender y traducir las
              necesidades comerciales en soluciones técnicas viables.
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
              Servicios de Consultoría en Arquitectura de Redes
            </h2>
            <p className="mb-4 text-gray-700">
              En una era donde la conectividad y la infraestructura de redes son
              la columna vertebral de cualquier empresa exitosa, nuestra
              consultoría se posiciona a la vanguardia, asistiendo a las
              organizaciones a navegar con éxito por el complejo panorama de las
              tecnologías de red modernas. Con una combinación única de
              conocimientos técnicos y visión estratégica, estamos listos para
              ayudarte a diseñar e implementar soluciones de red que pueden
              llevar tu negocio al próximo nivel.
            </p>
            <p className="text-gray-700">
              Nos distinguimos por ser lo suficientemente ágiles para ofrecer
              soluciones simples y rápidas, sin sacrificar la profundidad
              estratégica y la innovación técnica que tu organización necesita
              para sobresalir en el competitivo mundo de hoy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full h-96 rounded-lg bg-cover object-cover"
              src="/image/Redes/cables-de-red-tecnologia-informatica.jpg"
              alt="Cables de red conectados a un switch, detalle de infraestructura de red."  data-aos="fade-down"
            />
            <img
              className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
              src="/image/Redes/gestion-cableado-estructurado-sistemas.jpg"
              alt="Primer plano de cableado estructurado en azul conectado a equipo de red" data-aos="fade-left"
            />
          </div>
        </div>
      </section>
      <Social /> 
      <Footer />
    </>
  );
}
