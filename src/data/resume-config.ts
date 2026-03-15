import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Yoann Brieux',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Développeur Backend Senior',
      en: 'Senior Backend Developer',
    },
    subtitle: {
      fr: 'Plus de 18 ans d\'expérience',
      en: '18+ years of experience',
    },
    location: 'Near Lille, France',
  },
  seo: {
    title: 'Yoann Brieux — Senior Backend Developer',
    description: 'Interactive resume of Yoann Brieux, Senior Backend Developer specializing in PHP, Symfony, API design, and backend architecture.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },
  contact: [
    { type: 'linkedin', label: 'Yoann Brieux', href: 'https://www.linkedin.com/in/yoannbrieux/' },
    { type: 'website', label: 'yoann.brieux.net', href: 'https://yoann.brieux.net' },
    { type: 'website', label: 'Symfony Connect', href: 'https://connect.symfony.com/profile/yoann' },
    { type: 'email', label: 'yoann@brieux.net' },
    { type: 'location', label: 'Near Lille, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        {
          name: { fr: 'Français', en: 'French' },
          level: { fr: 'Natif (C2)', en: 'Native (C2)' },
        },
        {
          name: { fr: 'Anglais', en: 'English' },
          level: { fr: 'B1 à l\'oral, B2 à l\'écrit', en: 'B1 speaking, B2 writing' },
        },
        {
          name: { fr: 'Japonais', en: 'Japanese' },
          level: { fr: 'A1- (bases pour voyager)', en: 'A1- (travel basics)' },
        },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Symfony' },
        { name: 'API Platform', color: '#38A9B3' },
        { name: 'REST' },
      ],
    },
    {
      title: { fr: 'Base de données & Messaging', en: 'Database & Messaging' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'RabbitMQ' },
      ],
    },
    {
      title: { fr: 'Qualité & Tests', en: 'Quality & Testing' },
      type: 'badges',
      items: [
        { name: 'PHPUnit', color: '#8892BF' },
        { name: 'Behat', color: '#4EAA25' },
      ],
    },
    {
      title: { fr: 'DevOps & Système', en: 'DevOps & System' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Linux' },
      ],
    },
    {
      title: { fr: 'Versioning & Collaboration', en: 'Versioning & Collaboration' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitLab' },
        { name: 'GitHub' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Architecture logicielle, conception d\'API, migration de code legacy',
            en: 'Software architecture, API design, legacy code migration',
          },
        },
      ],
    },
    {
      title: { fr: 'Transmission', en: 'Knowledge Sharing' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Mentorat technique, documentation, formation des équipes',
            en: 'Technical mentoring, documentation, team training',
          },
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'recisio-karafun-group',
      company: {
        fr: 'Recisio / Karafun Group',
        en: 'Recisio / Karafun Group',
      },
      role: {
        fr: 'Développeur Backend Senior',
        en: 'Senior Backend Developer',
      },
      period: {
        fr: '11/2023 - Présent',
        en: '11/2023 - Present',
      },
      description: {
        fr: 'Pilotage de la migration progressive vers Symfony depuis un code legacy, développement de nouvelles fonctionnalités IA et création d\'une API pour les applications front-end.',
        en: 'Led the progressive migration to Symfony from a legacy codebase, built new AI-driven features, and created an API for front-end applications.',
      },
      techs: ['PHP', 'Symfony', 'MySQL', 'RabbitMQ', 'Docker', 'REST'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Contribution à des produits du secteur du karaoké avec un fort enjeu de coexistence entre application legacy et composants Symfony.',
          en: 'Working on karaoke industry products with a strong need for coexistence between the legacy application and new Symfony components.',
        },
        tasks: {
          fr: [
            'Mise en place de sessions partagées entre l\'application Symfony et le système legacy',
            'Intégration progressive de fonctionnalités Symfony au sein de l\'application historique',
            'Refonte du système interne de gestion des fichiers et des images',
            'Développement d\'une fonctionnalité d\'import de chansons utilisant l\'IA pour générer des pistes karaoké',
            'Maintenance et évolution des logiciels pilotant les systèmes de salles de karaoké',
            'Conception d\'une nouvelle API pour les applications front-end avec échanges synchrones et asynchrones',
          ],
          en: [
            'Set up shared sessions between the Symfony application and the legacy system',
            'Progressively integrated Symfony features into the historical application',
            'Redesigned the internal file and image management system',
            'Developed a song import feature using AI to generate karaoke tracks',
            'Maintained and improved software used to manage karaoke room systems',
            'Designed a new API for front-end applications with synchronous and asynchronous exchanges',
          ],
        },
        env: {
          fr: 'PHP / Symfony / MySQL / RabbitMQ / Docker / REST API / IA',
          en: 'PHP / Symfony / MySQL / RabbitMQ / Docker / REST API / AI',
        },
      },
    },
    {
      id: 'motoblouz',
      company: {
        fr: 'Motoblouz',
        en: 'Motoblouz',
      },
      role: {
        fr: 'Développeur Symfony/PHP Senior et Lead Backend',
        en: 'Senior Symfony/PHP Developer and Backend Lead',
      },
      period: {
        fr: '09/2013 - 10/2023',
        en: '09/2013 - 10/2023',
      },
      description: {
        fr: 'Conception d\'API et de systèmes d\'échange pour l\'e-commerce, modernisation d\'applications Symfony et accompagnement technique de l\'équipe.',
        en: 'Designed APIs and data exchange systems for e-commerce, modernized Symfony applications, and provided technical guidance to the team.',
      },
      techs: ['PHP', 'Symfony', 'MySQL', 'REST', 'Docker', 'Git'],
      details: {
        context: {
          fr: 'Environnement e-commerce avec forts volumes et nombreuses intégrations métier : ERP, WMS, paiements, fraude, stock et magasins.',
          en: 'E-commerce environment with significant traffic and many business integrations: ERP, WMS, payments, fraud prevention, inventory, and store operations.',
        },
        tasks: {
          fr: [
            'Conception et implémentation de systèmes d\'échange de données avec l\'ERP Nodhos SEI via API Platform 3 et Symfony 6.3',
            'Développement d\'intégrations entre le WMS et les outils de mécanisation de BOA Concept',
            'Migration d\'applications cœur de Symfony 3.1 vers Symfony 6.3',
            'Création et maintenance d\'API pour la plateforme e-commerce',
            'Mentorat technique, documentation et formation des membres de l\'équipe',
            'Intégration de solutions de paiement Atos, Hipay et PayPal',
            'Maintenance d\'outils liés à la logistique, à la fraude, aux stocks et aux opérations magasin',
          ],
          en: [
            'Designed and implemented data exchange systems with the Nodhos SEI ERP using API Platform 3 and Symfony 6.3',
            'Developed integrations between the WMS and BOA Concept mechanization tools',
            'Migrated core applications from Symfony 3.1 to Symfony 6.3',
            'Built and maintained APIs for the e-commerce platform',
            'Provided technical mentoring, documentation, and team training',
            'Integrated Atos, Hipay, and PayPal payment solutions',
            'Maintained tools related to logistics, fraud prevention, inventory, and store operations',
          ],
        },
        env: {
          fr: 'PHP / Symfony 6.3 / API Platform 3 / MySQL / Docker / Git / ERP / WMS / Paiement',
          en: 'PHP / Symfony 6.3 / API Platform 3 / MySQL / Docker / Git / ERP / WMS / Payments',
        },
      },
    },
    {
      id: 'socialwok',
      company: {
        fr: 'SocialWok',
        en: 'SocialWok',
      },
      role: {
        fr: 'Développeur PHP',
        en: 'PHP Developer',
      },
      period: {
        fr: '02/2013 - 09/2013',
        en: '02/2013 - 09/2013',
      },
      description: {
        fr: 'Développement d\'une application cloud de gestion de fichiers et automatisation du traitement d\'emails.',
        en: 'Developed a cloud-based file management application and automated email processing.',
      },
      techs: ['PHP', 'Symfony', 'MySQL'],
      details: {
        context: {
          fr: 'Projet orienté gestion documentaire dans le cloud, avec stockage Amazon S3 et automatisation des flux entrants.',
          en: 'Cloud document management project with Amazon S3 storage and automation of incoming flows.',
        },
        tasks: {
          fr: [
            'Développement d\'une application cloud de gestion de fichiers avec PHP 5.4 et Symfony 2.0',
            'Utilisation d\'Amazon S3 pour le stockage des fichiers',
            'Automatisation de l\'import et du traitement des emails',
          ],
          en: [
            'Developed a cloud-based file management application with PHP 5.4 and Symfony 2.0',
            'Used Amazon S3 for file storage',
            'Automated email import and processing',
          ],
        },
        env: {
          fr: 'PHP 5.4 / Symfony 2.0 / MySQL / Amazon S3',
          en: 'PHP 5.4 / Symfony 2.0 / MySQL / Amazon S3',
        },
      },
    },
    {
      id: 'tigreblanc',
      company: {
        fr: 'Tigreblanc',
        en: 'Tigreblanc',
      },
      role: {
        fr: 'Développeur Web',
        en: 'Web Developer',
      },
      period: {
        fr: '06/2010 - 02/2013',
        en: '06/2010 - 02/2013',
      },
      description: {
        fr: 'Réalisation de projets web clients et gestion d\'hébergements pour différents comptes.',
        en: 'Delivered client web projects and managed hosting environments for several accounts.',
      },
      techs: ['PHP', 'Symfony', 'HTML', 'CSS'],
      details: {
        context: {
          fr: 'Agence web avec projets variés en développement et hébergement pour des clients externes.',
          en: 'Web agency delivering a variety of development and hosting projects for external clients.',
        },
        tasks: {
          fr: [
            'Développement de projets web avec HTML5/CSS3, Symfony 1.4/2 et Prestashop',
            'Maintenance et évolution de sites clients',
            'Gestion des environnements d\'hébergement',
          ],
          en: [
            'Delivered web projects using HTML5/CSS3, Symfony 1.4/2, and Prestashop',
            'Maintained and improved client websites',
            'Managed hosting environments',
          ],
        },
        env: {
          fr: 'PHP / Symfony 1.4 / Symfony 2 / HTML5 / CSS3 / Prestashop / Hébergement',
          en: 'PHP / Symfony 1.4 / Symfony 2 / HTML5 / CSS3 / Prestashop / Hosting',
        },
      },
    },
    {
      id: 'altima',
      company: {
        fr: 'Altima',
        en: 'Altima',
      },
      role: {
        fr: 'Développeur Web',
        en: 'Web Developer',
      },
      period: {
        fr: '03/2008 - 06/2010',
        en: '03/2008 - 06/2010',
      },
      description: {
        fr: 'Développement de sites e-commerce avec Joomla et Symfony 1.0.',
        en: 'Developed e-commerce websites with Joomla and Symfony 1.0.',
      },
      techs: ['PHP', 'Symfony', 'HTML', 'CSS'],
      details: {
        context: {
          fr: 'Premières expériences professionnelles en agence sur des projets e-commerce.',
          en: 'Early agency experience working on e-commerce projects.',
        },
        tasks: {
          fr: [
            'Développement de sites e-commerce avec Joomla et Symfony 1.0',
            'Contribution à des projets web pour différents clients',
          ],
          en: [
            'Developed e-commerce websites with Joomla and Symfony 1.0',
            'Contributed to web projects for various clients',
          ],
        },
        env: {
          fr: 'PHP / Symfony 1.0 / Joomla / HTML / CSS / E-commerce',
          en: 'PHP / Symfony 1.0 / Joomla / HTML / CSS / E-commerce',
        },
      },
    },
  ],
  education: [
    {
      school: {
        fr: 'IUT A de Lille 1',
        en: 'IUT A of Lille 1',
      },
      degree: {
        fr: 'Licence professionnelle',
        en: 'Professional Degree',
      },
      specialty: {
        fr: 'Développement et administration Internet et Intranet',
        en: 'Internet and Intranet Development and Administration',
      },
      period: '2008',
    },
    {
      school: {
        fr: 'IUT de Lens',
        en: 'IUT of Lens',
      },
      degree: {
        fr: 'DUT Informatique',
        en: 'Technical University Degree in Information Technology',
      },
      period: '2007',
    },
    {
      school: {
        fr: 'Lycée Edmond Labbé, Douai',
        en: 'Edmond Labbé High School, Douai',
      },
      degree: {
        fr: 'Baccalauréat STI',
        en: 'Baccalaureate in Science and Industrial Technology',
      },
      specialty: {
        fr: 'Génie électronique',
        en: 'Electronic Engineering',
      },
      period: '2005',
    },
  ],
  hobbies: [
    {
      title: {
        fr: 'Vélo',
        en: 'Cycling',
      },
    },
    {
      title: {
        fr: 'Jeux vidéo',
        en: 'Video Games',
      },
    },
    {
      title: {
        fr: 'Voyage',
        en: 'Travel',
      },
    },
  ],
  theme: {
    preset: 'ocean',
  },
  labels: {
    sections: {
      contact: {
        fr: 'CONTACT',
        en: 'CONTACT',
      },
      skills: {
        fr: 'COMPÉTENCES',
        en: 'SKILLS',
      },
      experience: {
        fr: 'EXPÉRIENCES PROFESSIONNELLES',
        en: 'PROFESSIONAL EXPERIENCE',
      },
      education: {
        fr: 'FORMATION',
        en: 'EDUCATION',
      },
      projects: {
        fr: 'PROJETS',
        en: 'PROJECTS',
      },
      hobbies: {
        fr: 'LOISIRS',
        en: 'HOBBIES',
      },
    },
    experience: {
      mainTasks: {
        fr: 'Missions principales :',
        en: 'Main tasks:',
      },
      moreTasks: {
        fr: 'autres missions...',
        en: 'more tasks...',
      },
      training: {
        fr: 'Formations :',
        en: 'Training:',
      },
      techEnv: {
        fr: 'Env. technique :',
        en: 'Tech environment:',
      },
      technologies: {
        fr: 'Technologies',
        en: 'Technologies',
      },
    },
    actions: {
      clickHint: {
        fr: 'Cliquez sur les expériences pour voir plus de détails',
        en: 'Click on experiences to see more details',
      },
      switchTheme: {
        fr: 'Changer le thème',
        en: 'Switch theme',
      },
      downloadPdf: {
        fr: 'Télécharger le PDF',
        en: 'Download PDF',
      },
    },
  },
}
