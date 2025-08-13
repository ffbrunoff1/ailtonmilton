import React from 'react'
import { motion } from 'framer-motion'
import { Scale, FileText, Shield, Users, Clock, AlertTriangle, CheckCircle, Phone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Rescisão de Contrato",
      description: "Análise e orientação sobre rescisões contratuais, cálculo de verbas rescisórias e acompanhamento do processo de desligamento.",
      features: [
        "Análise de verbas rescisórias",
        "Orientação sobre FGTS e seguro-desemprego",
        "Revisão de acordos de rescisão",
        "Proteção contra demissões abusivas"
      ],
      price: "Consulta a partir de R$ 200"
    },
    {
      icon: Clock,
      title: "Horas Extras",
      description: "Recuperação de horas extras não pagas, adicional noturno, trabalho em feriados e domingos, com cálculo preciso dos valores devidos.",
      features: [
        "Cálculo de horas extras não pagas",
        "Adicional noturno e de insalubridade",
        "Trabalho em feriados e domingos",
        "Banco de horas irregular"
      ],
      price: "Honorários por êxito"
    },
    {
      icon: Shield,
      title: "Assédio Moral",
      description: "Defesa contra assédio moral no ambiente de trabalho, com acompanhamento psicológico e busca por indenizações justas.",
      features: [
        "Identificação de assédio moral",
        "Coleta de provas e testemunhas",
        "Acompanhamento psicológico",
        "Indenização por danos morais"
      ],
      price: "Avaliação gratuita"
    },
    {
      icon: Users,
      title: "Direitos do Trabalhador",
      description: "Orientação completa sobre direitos trabalhistas, benefícios previdenciários e proteção contra práticas abusivas.",
      features: [
        "Orientação sobre CLT",
        "Benefícios previdenciários",
        "Estabilidade no emprego",
        "Licenças e afastamentos"
      ],
      price: "Consulta a partir de R$ 150"
    },
    {
      icon: AlertTriangle,
      title: "Acidente de Trabalho",
      description: "Assistência em casos de acidentes de trabalho, doença ocupacional e aposentadoria por invalidez.",
      features: [
        "CAT - Comunicação de Acidente",
        "Auxílio-doença acidentário",
        "Estabilidade acidentária",
        "Indenizações por sequelas"
      ],
      price: "Consulta especializada"
    },
    {
      icon: Scale,
      title: "Ações Trabalhistas",
      description: "Representação completa em ações trabalhistas, desde a petição inicial até a execução da sentença.",
      features: [
        "Petição inicial completa",
        "Acompanhamento processual",
        "Audiências e julgamentos",
        "Execução de sentença"
      ],
      price: "Honorários negociáveis"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = (service) => {
    const message = `Olá, gostaria de saber mais sobre ${service}`
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos
            <span className="text-gradient-primary"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos assessoria jurídica completa em Direito Trabalhista, 
            sempre buscando os melhores resultados para nossos clientes
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary rounded-lg p-3 mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3">O que inclui:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <span className="text-primary-600 font-semibold">{service.price}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mt-auto">
                <motion.button
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="h-4 w-4" />
                  <span>Consultar via WhatsApp</span>
                </motion.button>
                
                <motion.button
                  onClick={scrollToContact}
                  className="w-full btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Consulta
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Ajuda Jurídica?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Não deixe seus direitos trabalhistas serem violados. 
            Entre em contato conosco e receba orientação especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => openWhatsApp('consulta jurídica')}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              <span>WhatsApp</span>
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}