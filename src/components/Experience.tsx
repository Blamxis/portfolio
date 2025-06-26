import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Formation Développeur Web et Web Mobile',
      company: 'Centre de Formation DWWM',
      location: 'France',
      period: '2023 - 2024',
      description: 'Formation intensive aux métiers du développement web avec projets pratiques.',
      achievements: [
        'Développement d\'applications web complètes (Frontend + Backend)',
        'Maîtrise des technologies HTML5, CSS3, JavaScript, React.js',
        'Apprentissage de Node.js, Express.js et bases de données MySQL',
        'Application des méthodologies Agile et gestion de projet'
      ]
    },
    {
      title: 'Projets Personnels & Veille Technologique',
      company: 'Développement Autonome',
      location: 'Remote',
      period: '2024 - Présent',
      description: 'Développement continu de projets personnels pour approfondir mes compétences techniques.',
      achievements: [
        'Création de plusieurs applications web responsive',
        'Contribution à des projets open source sur GitHub',
        'Veille technologique active sur les nouvelles tendances web',
        'Amélioration continue des bonnes pratiques de développement'
      ]
    }
  ];

  const formation = [
    {
      degree: 'Titre Professionnel Développeur Web et Web Mobile (DWWM)',
      school: 'Centre de Formation Agréé',
      period: '2023 - 2024',
      description: 'Formation certifiante niveau 5 (Bac+2) reconnue par l\'État',
      details: [
        'Développer la partie front-end d\'une application web',
        'Développer la partie back-end d\'une application web',
        'Créer une base de données',
        'Mettre en œuvre une solution de déploiement'
      ]
    }
  ];

  const competencesTransversales = [
    'Capacité d\'apprentissage rapide',
    'Résolution de problèmes',
    'Travail en équipe',
    'Communication technique',
    'Gestion du temps',
    'Autonomie'
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Parcours & Formation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon parcours de formation et mes expériences dans le développement web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Expérience et projets */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Calendar className="mr-3 text-blue-600 dark:text-blue-400" />
              Expérience & Projets
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{exp.company}</span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formation et compétences */}
          <div className="space-y-12">
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <BookOpen className="mr-3 text-blue-600 dark:text-blue-400" />
                Formation
              </h3>
              
              <div className="space-y-6">
                {formation.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {edu.period}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {edu.description}
                    </p>
                    <div className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <div key={i} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Compétences transversales */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Compétences transversales
              </h3>
              
              <div className="space-y-3">
                {competencesTransversales.map((competence, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                  >
                    <Award size={16} className="text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {competence}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statut actuel */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🚀 Statut actuel</h3>
              <p className="text-green-100 mb-3">
                Développeur Junior certifié DWWM
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
                <span className="text-sm">Recherche active d'opportunités</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;