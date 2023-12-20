class Collaborator {
  constructor (name, img, github, linkedin) {
    this.name = name
    this.img = img
    this.github = github
    this.linkedin = linkedin
  }
}

const nancy = new Collaborator('Nancy Onyejiaka',
  'https://avatars.githubusercontent.com/u/114533386?v=4',
  'https://github.com/nancyonyejiaka',
  'https://www.linkedin.com/in/nancyonyejiaka')

const duncan = new Collaborator('Duncan Mayer',
  'https://avatars.githubusercontent.com/u/106922547?v=4',
  'https://github.com/duncanmayer',
  'https://www.linkedin.com/in/duncan-mayer-05a704177/')

const surabhi = new Collaborator('Surabhi Keesara',
  'https://avatars.githubusercontent.com/u/30560773?v=4',
  'https://github.com/SurabhiKeesara',
  'https://www.linkedin.com/in/surabhikeesara/')

const anna = new Collaborator('Anna Brunkhorst',
  'https://avatars.githubusercontent.com/u/90432899?v=4',
  'https://github.com/AnnaBrunkhorst',
  'https://www.linkedin.com/in/annabrunkhorst/')

export const Bio = {
  name: 'Nancy Onyejiaka',
  roles: [
    'Backend Developer.',
    'Full Stack Developer.',
    'UX/UI Designer.',
    'Software Engineer.'
  ],
  description:
        'I am a dual-disciplined innovator, harnessing the power of behavioral neuroscience and computer science to ' +
        'engineer impactful and effective software solutions.',
  github: nancy.github,
  resume:
        'https://drive.google.com/file/d/1Rzmmdn_p_7zdfDCJred3VA2TvbB2KKZ1/view?usp=drive_link',
  linkedin: nancy.linkedin
}

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        image:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'
      },
      {
        name: 'CSS',
        image:
                    'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'
      },
      {
        name: 'JavaScript',
        image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
      },
      {
        name: 'TypeScript',
        image: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
      },
      {
        name: 'Material UI',
        image: 'data:image/png;base64,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'
      }
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'MySQL',
        image:
                    'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg'
      },
      {
        name: 'Java',
        image:
                    'https://www.vectorlogo.zone/logos/java/java-icon.svg'
      },
      {
        name: 'Kotlin',
        image:
                    'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg'
      },
      {
        name: 'Ruby',
        image:
                    'https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg'
      },
      {
        name: 'XML',
        image:
                    'https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg'
      },
      {
        name: 'R Studio',
        image:
                    'https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg'
      }

    ]
  },
  {
    title: 'Miscellaneous',
    skills: [
      {
        name: 'Git',
        image:
                    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
      },
      {
        name: 'GitHub',
        image:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      {
        name: 'Docker',
        image:
                    'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg'
      },
      {
        name: 'IntelliJ IDEA',
        image:
                    'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg'
      },
      {
        name: 'Figma',
        image:
                    'https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667'
      }
    ]
  }
]

export const experiences = [
  {
    id: 0,
    img: 'https://www.pngkey.com/png/detail/608-6088653_northeastern-university-usa-logo.png',
    role: 'Teaching Assistant, Human Computer Interaction',
    company: 'Northeastern University',
    date: 'Dec 2023 - Present',
    desc: '',
    skills: [
      'Figma',
      'Axure RP 10',
      'React',
      'Mentoring',
      ''
    ]
  },
  {
    id: 1,
    img: 'https://pbs.twimg.com/profile_images/1410639303194066945/pI7S3C6V_400x400.jpg',
    role: 'Algorithmic Traffic Acquisition Software Engineering Co-Op',
    company: 'CarGurus',
    date: 'Jan 2023 - Aug 2023',
    desc: '',
    skills: [
      'Kotlin',
      'MySQL',
      'Ruby',
      'Docker',
      'AWS',
      'TypeScript',
      'React',
      'GitHub',
      ''
    ]
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqBFRW150j4vnLqY2kQo-QOYUkZEn7LJzncCVSkTmjg&s',
    role: 'Software Engineering Fellow',
    company: 'Hack.Diversity',
    date: 'Jan 2023 - Apr 2023',
    desc: '',
    skills: [
      'React',
      'JavaScript',
      'Material UI',
      'CSS',
      'HTML',
      'GitHub',
      ''
    ]
  },
  {
    id: 3,
    img: 'https://www.pngkey.com/png/detail/608-6088653_northeastern-university-usa-logo.png',
    role: 'Teaching Assistant, Discrete Structures',
    company: 'Northeastern University',
    date: 'Sept 2022 - Jan 2023',
    desc: '',
    skills: [
      'Discrete Mathematics',
      'Mentoring',
      ''
    ]
  },
  {
    id: 4,
    img: 'https://www.cffrv.org/wp-content/uploads/Logo-RCA.jpg',
    role: 'Recovery Support Specialist',
    company: 'Recovery Centers of America',
    date: 'Jul 2021 - Jan 2022',
    desc: '',
    skills: [
      'Cultural Sensitivity',
      'Conflict Resolution',
      'Client Advocacy',
      ''
    ]
  }
]

export const education = [
  {
    id: 0,
    img: 'https://www.pngkey.com/png/detail/608-6088653_northeastern-university-usa-logo.png',
    school: 'Northeastern University',
    date: 'Sept 2022 - Present',
    gpa: '3.85',
    desc: 'PlusOne Program, Combined BS and MSCS',
    degree: 'Master of Science in Computer Science'
  },
  {
    id: 1,
    img: 'https://www.pngkey.com/png/detail/608-6088653_northeastern-university-usa-logo.png',
    school: 'Northeastern University',
    date: 'Sept 2019 - May 2024',
    gpa: '3.83',
    desc: "Honors Program. Dean's List Fall 2020 - Fall 2023.",
    degree: 'Bachelor of Science in Computer Science and Behavioral Neuroscience'
  }
]

export const projects = [
  {
    id: 1,
    title: 'Artificial Intelligence in Poker: A Comparative Analysis of Decision-Making Using Search Algorithms',
    date: 'Sept 2023 - Dec 2023',
    description:
            'This study explores the effectiveness of three artificial intelligence algorithms — Expectiminimax, ' +
        'Monte Carlo Tree Search (MCTS), and Deep Q-Learning — in the context of Texas Hold’em poker, a complex ' +
        'and strategic game. The algorithms were tested against basic poker bots, focusing on win rates and net ' +
        'winnings to assess their performance. The findings indicate that all three algorithms outperform the ' +
        'simpler bots, with MCTS standing out for its adaptability and high win rate. Deep Q-Learning, while ' +
        'needing more training episodes, shows promise for long-term strategic play. This research highlights the ' +
        'potential of these AI methods in handling the uncertain and intricate nature of poker.',
    image:
            'https://raw.githubusercontent.com/nancyonyejiaka/ai-poker-algorithms/main/ai_in_poker.png',
    tags: [
      'Python',
      'Research',
      'Expectiminimax',
      'Monte Carlo Tree Search',
      'Deep Q-Learning'
    ],
    category: 'ai',
    member: [
      {
        name: nancy.name,
        img: nancy.img,
        linkedin: nancy.linkedin,
        github: nancy.github
      },
      {
        name: surabhi.name,
        img: surabhi.img,
        linkedin: surabhi.linkedin,
        github: surabhi.github
      },
      {
        name: anna.name,
        img: anna.img,
        linkedin: anna.linkedin,
        github: anna.github
      }
    ],
    github: 'https://github.com/nancyonyejiaka/ai-poker-algorithms',
    report: 'https://drive.google.com/file/d/1Sdoy6_sTgB7SUggJntcnCcakbEgJQ15j/view?usp=drive_link'
  },
  {
    id: 0,
    title: 'PantryPal',
    date: 'Aug 2023 - Present',
    description:
        'PantryPal is a full-stack web application designed to assist users in making the most of their available ' +
        'ingredients at home. Leveraging Kotlin for the backend and JavaScript for the frontend, PantryPal employs ' +
        'RESTful APIs for ingredient management and recipe recommendations. This user-friendly platform allows users ' +
        'to input their pantry items, receive personalized recipe suggestions, and efficiently plan meals based on ' +
        'their existing ingredients.',
    image:
        'https://drive.google.com/file/d/16hH99ZcyqsYyoUsdDpe6Q2RB-N5f1_nk/preview',
    tags: [
      'Kotlin',
      'JavaScript',
      'MySQL',
      'eslint',
      'React'
    ],
    category: 'backend',
    member: [
      {
        name: 'Nancy Onyejiaka',
        img: nancy.img,
        linkedin: nancy.linkedin,
        github: nancy.github
      }
    ]
  },
  {
    id: 2,
    title: 'Image Processor',
    date: 'Sept 2022 - Nov 2022',
    description: 'This Image Processor is a fullstack desktop application designed to cater to both newcomers and ' +
        'seasoned artists alike. Seamlessly blending text-based and interactive GUI elements, this application ' +
        'offers an intuitive user experience, ensuring effortless image manipulation. From basic touch-ups to ' +
        'advanced effects, our platform provides a diverse range of image processing capabilities, all within a ' +
        'carefully designed interface. This application is architected using the Command Pattern to enhance ' +
        'modularity, alongside the use of HashMaps for rapid image data retrieval, ensuring both scalability and ' +
        "robustness in its design. Additionally, extensive JUnit tests confirm the application's functionality, " +
        'guaranteeing the dependability and accuracy of its image editing capabilities and data management processes.',
    image:
            'https://raw.githubusercontent.com/nancyonyejiaka/photoshop-gui/main/GUI%20screenshot.png',
    tags: [
      'Java'
    ],
    category: 'fullstack',
    member: [
      {
        name: nancy.name,
        img: nancy.img,
        linkedin: nancy.linkedin,
        github: nancy.github
      },
      {
        name: duncan.name,
        img: duncan.img,
        linkedin: duncan.linkedin,
        github: duncan.github
      }
    ],
    github: 'https://github.com/nancyonyejiaka/photoshop-gui'
  }
]

export const TimeLineData = [
  { year: 2022, text: 'Transitioned from pre-med to a combined behavioral neuroscience and computer science degree' },
  { year: 2023, text: 'Completed 8-month full-time co-op as a Software Engineer' },
  { year: 2024, text: "Expected graduation with Bachelor's of Science" },
  { year: 2025, text: "Expected graduation with Master's in Computer Science" }
]
