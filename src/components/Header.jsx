import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-gradient-primary' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Scale className={`h-8 w-8 ${isScrolled ? 'text-white' : 'text-primary-600'}`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Ailton Milton
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Advocacia Trabalhista
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className={`h-4 w-4 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                (11) 9999-9999
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className={`h-4 w-4 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                contato@ailtonmilton.com.br
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 text-sm mt-2">
                <Mail className="h-4 w-4" />
                <span>contato@ailtonmilton.com.br</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}