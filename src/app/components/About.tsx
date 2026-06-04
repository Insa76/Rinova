import { motion } from "motion/react";
import { Award, Users, Building2, TrendingUp } from "lucide-react";
import about from "../../assets/images/about.jpg";

export function About() {
  const stats = [
    { icon: Building2, value: "1,500+", label: "Propiedades Vendidas" },
    { icon: Users, value: "3,000+", label: "Clientes Satisfechos" },
    { icon: Award, value: "30+", label: "Años de Experiencia" },
    { icon: TrendingUp, value: "98%", label: "Tasa de Éxito" },
  ];

  return (
    <section className="py-20 bg-[#F4EFE7] rounded-md" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-gray-800">
              Expertos en el mercado
              <br />
              de Punta del Este
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Con más de 30 años de experiencia, somos líderes en el mercado inmobiliario de Punta del Este y la región.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro equipo de profesionales altamente capacitados te brinda un servicio personalizado, acompañándote en cada paso del proceso de compra, venta o alquiler de tu propiedad.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#3d89bb] rounded-full flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#7EC8E3]" />
                    </div>
                    <div className="text-3xl text-[#3d89bb]">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src={about}
                alt="Equipo profesional"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 -right-10 w-72 h-72 bg-[#7EC8E3] rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
