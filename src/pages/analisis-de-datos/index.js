import {
    LockClosedIcon,
    ArrowPathIcon,
    LightBulbIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";


const features = [
    {
        name: 'Personalización Estratégica',
        description:
            'Trabajamos estrechamente con cada cliente para entender sus metas únicas y diseñar soluciones de análisis de datos personalizadas.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Optimización de Toma de Decisiones',
        description:
            'Mediante el análisis predictivo y prescriptivo, ayudamos a las organizaciones a tomar decisiones informadas basadas en datos reales y actuales. ',
        icon: LightBulbIcon,
    },
    {
        name: 'Capacitación y Desarrollo de Competencias',
        description:
            'Ofrecemos programas de formación y desarrollo de habilidades en análisis de datos para equipos empresariales. ',
        icon: ArrowPathIcon,
    },
    {
        name: 'Seguridad y Cumplimiento de Datos',
        description:
            ' Nos comprometemos a mantener la integridad y seguridad de tus datos. Implementamos protocolos de seguridad robustos para asegurar que tus datos están protegidos en todo momento.',
        icon: LockClosedIcon,
    },
]

export default function Contacto() {

  
    return (
        <>  
            <Head>
                <title>Consultoría IT & Desarrollo AN | Líderes en Análisis de Datos </title>
                <meta name="description" content="En Consultoría IT & Desarrollo AN, fusionamos tecnología avanzada con sostenibilidad para crear soluciones innovadoras en análisis de datos" />
                <link rel="canonical" href="https://an-web.vercel.app/analisis-datos"/>
            </Head>
            <Header />
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4" data-aos="fade-up">
                        <div className="lg:max-w-lg">
                        <span className="text-base font-semibold leading-7 text-indigo-600">
                            Servicios tecnológicos
                        </span>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl">
                            Consultoría Análisis de Datos.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                            La toma de decisiones informadas es el pilar de cualquier
                            empresa exitosa. Nuestros servicios de análisis de datos están
                            diseñados para convertir su mar de datos en información
                            valiosa y accionable. A través de técnicas avanzadas de
                            análisis y visualización de datos, le ayudamos a descifrar
                            patrones y tendencias que pueden impulsar estrategias
                            empresariales ganadoras. Deje que transformemos su data bruta
                            en un recurso empresarial valioso.
                        </p>
                        </div>
                    </div>
                    <img
                        src="/image/Analisis-datos/analista_datos_mirando_graficos.jpg"
                        alt="Product screenshot"
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                        style={{maxWidth: '650px', maxHeight: '600px'}}
                        data-aos="zoom-in"
                    />
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8" >
                    <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-custon-blue sm:text-4xl" >
                        ¿Qué hace una Consultora de Análisis de Datos?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Una consultora de análisis de datos se especializa en ayudar a las organizaciones a extraer valor significativo de sus datos. Mediante el uso de técnicas estadísticas, algoritmos avanzados y herramientas modernas de análisis, transforman grandes volúmenes de datos en insights accionables.
                    </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16" data-aos="fade-up">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-orange">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
            </div>

            <section className="bg-white ">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg " data-aos="fade-up">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custon-blue ">Servicios de Consultoría Analítica</h2>
                        <p className="mb-4 text-gray-700">En una era donde los datos son el activo más valioso, nuestra consultoría analítica se pone a la vanguardia, guiando a las empresas a navegar con éxito en el vasto océano de información disponible. Con una combinación única de experiencia técnica y estratégica, estamos listos para ayudarte a transformar datos crudos en insights estratégicos que pueden impulsar tu negocio hacia adelante.</p>
                        <p className="text-gray-700">Somos estrategas, diseñadores y desarrolladores. Innovadores y solucionadores de problemas. Lo suficientemente pequeño como para ser simple y rápido.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 ">
                        <img className="w-full h-96 rounded-lg bg-cover object-cover" src="/image/Analisis-datos/analisis-dashboard-trabajo-mesa-cafe.jpg" alt="office content 1" data-aos="fade-down"/>
                        <img className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover" src="/image/Analisis-datos/trabajo-equipo-excel-finanzas-oficina.jpg" alt="office content 2" data-aos="fade-left"/>
                    </div>
                </div>
            </section>
            <Social /> 
            <Footer />
        </>
);
}
