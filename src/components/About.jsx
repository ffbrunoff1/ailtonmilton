import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Users, Trophy, BookOpen, Briefcase, Heart } from 'lucide-react'

export default function About() {
  const stats = [
    {
      number: "15+",
      label: "Anos de Experiência",
      icon: Trophy
    },
    {
      number: "500+",
      label: "Casos Resolvidos",
      icon: Scale
    },
    {
      number: "98%",
      label: "Taxa de Sucesso",
      icon: Heart
    },
    {
      number: "24h",
      label: "Tempo de Resposta",
      icon: Users
    }
  ]

  const values = [
    {
      icon: Scale,
      title: "Ética e Transparência",
      description: "Conduzimos todos os casos com total transparência e ética profissional, mantendo nossos clientes sempre informados sobre o andamento de seus processos."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atendimento individualizado, com estratégias personalizadas para suas necessidades específicas no direito trabalhista."
    },
    {
      icon: BookOpen,
      title: "Conhecimento Especializado",
      description: "Mantemos-nos sempre atualizados com as mudanças na legislação trabalhista para oferecer o melhor serviço jurídico possível."
    },
    {
      icon: Briefcase,
      title: "Resultados Efetivos",
      description: "Nosso foco está em alcançar os melhores resultados para nossos clientes, sempre buscando soluções eficazes e justas."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            Sobre o
            <span className="text-gradient-primary"> Advogado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialista em Direito Trabalhista com mais de uma década de experiência 
            defendendo os direitos dos trabalhadores
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary rounded-full p-4 mr-4">
                  <Scale className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Ailton Milton</h3>
                  <p className="text-primary-600 font-semibold">Especialista em Direito Trabalhista</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Com mais de 15 anos de experiência em Direito Trabalhista, atuo na defesa 
                dos direitos dos trabalhadores, oferecendo assessoria jurídica especializada 
                em questões como demissões, rescisões contratuais, horas extras, assédio moral 
                e muito mais.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Formado pela Faculdade de Direito da Universidade de São Paulo, com 
                pós-graduação em Direito do Trabalho e especialização em mediação e 
                conciliação trabalhista. Membro da Ordem dos Advogados do Brasil.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <BookOpen className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Formação: Direito - USP</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Trophy className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Especialização em Direito do Trabalho</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Scale className="h-5 w-5 text-primary-600 mr-3" />
                  <span>OAB/SP - Registro Ativo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-gradient-accent">Valores</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Princípios que norteiam nossa atuação profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}