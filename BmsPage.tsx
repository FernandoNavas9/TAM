import React from 'react';
import { ArrowLeftIcon } from './components/Icons';

const DetailSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-tam-blue mb-6 border-b-2 border-tam-light-blue pb-2">{title}</h2>
        <div className="prose prose-lg max-w-none text-slate-700">
            {children}
        </div>
    </div>
);

const BmsPage: React.FC = () => {
    return (
        <div className="bg-tam-gray">
            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <a href="#servicios" className="text-tam-light-blue hover:text-tam-blue font-medium inline-flex items-center gap-2 mb-6 transition-colors">
                        <ArrowLeftIcon />
                        Volver a Servicios
                    </a>
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-tam-blue">Sistema de Gestión de Edificios (BMS)</h1>
                        <p className="mt-4 text-xl text-slate-600">El núcleo inteligente para la operación eficiente de su edificio.</p>
                    </header>

                    <DetailSection title="¿Qué es un BMS?">
                        <p>Un Sistema de Gestión de Edificios (BMS, por sus siglas en inglés) es una plataforma centralizada de control y monitoreo basada en software y hardware. Su función principal es integrar, automatizar y gestionar los diversos sistemas mecánicos, eléctricos y de plomería de un inmueble, como la climatización, la ventilación, la iluminación, la energía y la seguridad.</p>
                        <p>Actúa como el "cerebro" del edificio, recopilando datos en tiempo real de sensores y equipos para tomar decisiones inteligentes que optimizan el rendimiento, mejoran el confort de los ocupantes y reducen significativamente el consumo de energía y los costos operativos.</p>
                    </DetailSection>

                    <DetailSection title="Arquitectura Típica de un BMS">
                        <p>La arquitectura de un BMS se estructura en tres niveles jerárquicos:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Nivel de Campo:</strong> Compuesto por sensores (temperatura, humedad, CO2), actuadores (válvulas, dampers) e instrumentos que miden y controlan directamente el entorno físico.</li>
                            <li><strong>Nivel de Automatización:</strong> Formado por controladores (como PLCs o DDCs) que procesan la información del nivel de campo, ejecutan la lógica de control programada y se comunican con el nivel superior.</li>
                            <li><strong>Nivel de Gestión:</strong> Es la interfaz de usuario final. Consiste en una estación de trabajo con software especializado (SCADA) que permite a los operadores monitorear todo el sistema, visualizar datos, generar reportes, configurar alarmas y ajustar parámetros de operación.</li>
                        </ul>
                    </DetailSection>

                    <DetailSection title="Aplicaciones Principales">
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>HVAC:</strong> Control de unidades de aire acondicionado, chillers, calderas, manejadoras de aire y ventilación para garantizar el confort térmico con la máxima eficiencia energética.</li>
                            <li><strong>Iluminación:</strong> Gestión de circuitos de alumbrado interior y exterior, permitiendo programación horaria, control por ocupación o aprovechamiento de la luz natural (dimming).</li>
                            <li><strong>Medición Eléctrica:</strong> Monitoreo de consumo de energía por áreas o equipos críticos, facilitando la identificación de oportunidades de ahorro y la gestión de la demanda.</li>
                            <li><strong>Sistemas Hidrosanitarios:</strong> Supervisión de tanques de agua, sistemas de bombeo, y control de variables para asegurar un suministro constante y eficiente.</li>
                        </ul>
                    </DetailSection>
                    
                    <DetailSection title="Protocolos de Comunicación">
                        <p>La interoperabilidad es clave. Utilizamos protocolos estándar de la industria para asegurar una comunicación fluida entre equipos de diferentes fabricantes:</p>
                         <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>BACnet:</strong> El estándar global para la automatización de edificios.</li>
                            <li><strong>Modbus:</strong> Ampliamente utilizado en la automatización industrial, robusto y fiable.</li>
                            <li><strong>LonWorks:</strong> Otro protocolo común en sistemas de control distribuidos.</li>
                        </ul>
                    </DetailSection>

                    <DetailSection title="Marcas Líderes con las que Trabajamos">
                        <p>Nuestra experiencia nos permite integrar soluciones de las marcas más reconocidas y fiables del mercado, garantizando calidad y soporte a largo plazo:</p>
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
                            <span className="text-lg font-semibold text-slate-600">Tridium (Niagara Framework)</span>
                            <span className="text-lg font-semibold text-slate-600">Distech Controls</span>
                            <span className="text-lg font-semibold text-slate-600">Johnson Controls</span>
                            <span className="text-lg font-semibold text-slate-600">Schneider Electric</span>
                        </div>
                    </DetailSection>
                </div>
            </div>
        </div>
    );
};

export default BmsPage;