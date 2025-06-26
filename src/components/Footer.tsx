import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Blamxis',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/blamxis/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:maxime.gavinet@outlook.fr',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Informations personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center">
              <Award className="mr-2 text-blue-400" size={24} />
              Développeur Web Junior
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Certifié DWWM, passionné par le développement web moderne. 
              Prêt à contribuer à vos projets avec motivation et rigueur technique.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact et statut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 maxime.gavinet@outlook.fr</p>
              <p>📱 +33 6 16 68 32 09</p>
              <p>📍 France</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Disponible immédiatement</span>
              </div>
              <p className="text-green-300 text-sm">
                Recherche active d'opportunités en développement web
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center"
            >
              © {currentYear} Portfolio Développeur Web Junior. Fait avec{' '}
              <Heart size={16} className="mx-1 text-red-500" fill="currentColor" />
              et React
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <span className="flex items-center">
                <Award size={16} className="mr-1 text-blue-400" />
                Certifié DWWM
              </span>
              <span>•</span>
              <span>Développé avec React & TypeScript</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;