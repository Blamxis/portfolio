import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Code de qualité',
      description: 'J\'applique les bonnes pratiques apprises lors de ma formation DWWM pour écrire du code propre et maintenable.'
    },
    {
      icon: BookOpen,
      title: 'Apprentissage continu',
      description: 'Ma capacité d\'apprentissage rapide me permet de m\'adapter aux nouvelles technologies et frameworks.'
    },
    {
      icon: Target,
      title: 'Approche méthodique',
      description: 'Je structure mes projets avec rigueur en appliquant les méthodologies Agile apprises en formation.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Passionné par les nouvelles technologies, je cherche toujours à améliorer mes compétences techniques.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur Web Junior certifié DWWM, motivé par la création d'applications web modernes et fonctionnelles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Fraîchement diplômé du Titre Professionnel Développeur Web et Web Mobile (DWWM), 
              je suis un développeur junior passionné par la création d'expériences web innovantes. 
              Ma formation m'a permis d'acquérir des bases solides dans les technologies web modernes.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Mon approche méthodique, combinée à ma capacité d'apprentissage rapide, me permet 
              de m'adapter efficacement aux nouveaux défis techniques. Je suis à la recherche 
              d'opportunités pour développer mes compétences au sein d'une équipe dynamique.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                🎯 Objectif professionnel
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Intégrer une équipe de développement pour contribuer à des projets web innovants 
                tout en continuant à développer mes compétences techniques et méthodologiques.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                HTML5 & CSS3
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                JavaScript & React
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Node.js & MySQL
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                Git & Agile
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;