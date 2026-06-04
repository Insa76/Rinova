import { motion } from "motion/react";
import { Home, TrendingUp, Key, FileText, Check, Shield, HeadphonesIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Análisis de Mercado",
      description: "Evaluación detallada del mercado inmobiliario local con datos actualizados y proyecciones de crecimiento.",
    },
    {
      icon: Key,
      title: "Evaluación de Zonas",
      description: "Análisis exhaustivo de ubicaciones estratégicas, infraestructura y potencial de cada zona.",
    },
    {
      icon: TrendingUp,
      title: "Lectura de Plusvalía",
      description: "Proyecciones profesionales de valorización a corto, mediano y largo plazo.",
    },
    {
      icon: FileText,
      title: "Asesoría Legal",
      description: "Soporte estratégico durante todo el proceso de compra y negociación.",
    },
     
  ];

  return (
    <section className="py-20 bg-[#F4EFE7]" id="servicios">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl text-gray-600 md:text-5xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para todas tus necesidades inmobiliarias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 "
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="font-heading text-4xl md:text-5xl text-gray-700 mb-6">
      Proceso vs Producto
    </h2>

    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
      No vendemos propiedades. Te acompañamos en un proceso de inversión
      inteligente. Mientras una inmobiliaria tradicional busca cerrar una
      operación, Rinova construye una estrategia para maximizar tu patrimonio
      a largo plazo.
    </p>
  </motion.div>

  <div className="grid lg:grid-cols-2 gap-10">

    {/* Tradicional */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="
        backdrop-blur-md
        rounded-[28px]
        p-10
        border
        border-white/10
        shadow-2xl
      "
    >
      <h3 className="text-3xl text-blue-500 mb-8">
        Inmobiliaria Tradicional
      </h3>

      <ul className="space-y-6">

        <li className="text-gray-700 text-lg">
          • Enfoque en cerrar ventas rápidamente
        </li>

        <li className="text-gray-700 text-lg">
          • Cartera limitada a propiedades propias
        </li>

        <li className="text-gray-700  text-lg">
          • Información superficial del mercado
        </li>

        <li className="text-gray-700 text-lg">
          • Comisiones como principal incentivo
        </li>

        <li className="text-gray-700 text-lg">
          • Seguimiento limitado después de la compra
        </li>

      </ul>
    </motion.div>

    {/* Rinova */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="
        backdrop-blur-md
        rounded-[28px]
        p-10
        border
        border-white/30
        shadow-2xl
      "
    >
      <h3 className="text-3xl text-blue-500 mb-8">
        Rinova
      </h3>

      <ul className="space-y-6">

        <li className="text-gray-700 text-lg">
          ✓ Análisis profundo de tu perfil inversor
        </li>

        <li className="text-gray-700 text-lg">
          ✓ Acceso a todo el mercado disponible
        </li>

        <li className="text-gray-700 text-lg">
          ✓ Proyecciones basadas en datos reales
        </li>

        <li className="text-gray-700 text-lg">
          ✓ Evaluación financiera y de rentabilidad
        </li>

        <li className="text-gray-700 text-lg">
          ✓ Acompañamiento estratégico a largo plazo
        </li>

      </ul>
    </motion.div>

  </div>
</div>
      
    </section>
    
  );
}
