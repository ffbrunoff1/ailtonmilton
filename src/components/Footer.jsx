import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços jurídicos', '_blank')
  }

  const services = [
    'Rescisão de Contrato',
    'Horas Extras',
    'Assédio Moral',
    'Direitos do Trabalhador',
    'Acidente de Trabalho',
    'Ações Trabalhistas'
  ]

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ailton Milton</h3>
                <p className="text-gray-400">Advocacia Trabalhista</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialista em Direito Trabalhista com mais de 15 anos de experiência, 
              defendendo os direitos dos trabalhadores com excelência e compromisso.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gradient-primary">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gradient-primary">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <motion.button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gradient-primary">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">(11) 9999-9999</p>
                  <p className="text-gray-400 text-sm">Segunda a sexta, 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">contato@ailtonmilton.com.br</p>
                  <p className="text-gray-400 text-sm">Resposta em até 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">São Paulo - SP</p>
                  <p className="text-gray-400 text-sm">Atendimento presencial e online</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ailton Milton - Advocacia Trabalhista. Todos os direitos reservados.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-sm">
                OAB/SP - Registro Ativo
              </div>
              <div className="text-gray-400 text-sm">
                Criado com <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </footer>
  )
}