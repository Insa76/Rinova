import { motion } from "motion/react";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-[#F4EFE7]" id="contacto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-gray-800">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar tu propiedad ideal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl mb-6 text-gray-800">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-all"
                  >
                    
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#3d89bb] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#7EC8E3]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-800 mb-1">Teléfono</div>
                      <div>+54 9 11 5341 3959</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#3d89bb] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#7EC8E3]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-800 mb-1">Email</div>
                      <div>ornela.vietagizzi@gmail.com</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl mb-4 text-gray-800">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-600 p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-200">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-500 border border-transparent focus:border-[#7EC8E3] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-500 border border-transparent focus:border-[#7EC8E3] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-200">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-500 border border-transparent focus:border-[#7EC8E3] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-200">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-500 border border-transparent focus:border-[#7EC8E3] focus:outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#3d89bb] text-white py-4 px-8 rounded-xl hover:bg-[#6BB8D3] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
