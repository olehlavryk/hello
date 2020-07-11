import Mock from "../mock";

const database = {
  information: {
    name: 'Oleh Lavryk',
    aboutContent: "I am a front end developer from Chortkiv, Ukraine. My passion is building responsive websites that work well in all basic browsers. I always strive for perfection, and focus on achieving goals. I love staying on the top of technologies, learning new stuff and be creative with it. I am searching for an opportunity that will help me to improve my technical skills and knowledge and upgrade my soft skills." ,
    age: 31,
    phone: '',
    nationality: 'Ukrainian',
    language: 'English, Ukrainian, Russian',
    email: 'oleh.lavrik@gmail.com',
    address: '2/25 Shukhevucha Street, Chortkiv, Ukraine',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/o.lavryk',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/olehlavryk/',
      dribbble: '',
      github: 'https://github.com/olehlavryk',
      instagram: 'https://www.instagram.com/o.lavryk/',
    },
    brandImage: '../images/me.jpg',
    aboutImage: '../images/me-3.jpg',
    aboutImageLg: '../images/me-4.jpg',
    cvfile: '/files/Oleh_Lavryk_CV.pdf'
  },
  services: [
    {
      title: "Wordpress development",
      icon: 'code',
      details: "Development of WordPress themes from scratch, customization of existing themes, creations custom Elementor widgets."
    },
    {
      title: "Front end development",
      icon: 'code',
      details: "Development of static web pages based on HTML 5, CSS 3, SASS, JavaScript. Create a Single Page Application based on React JS."
    },
    {
      title: "Back end development",
      icon: 'code',
      details: "Develop web resources using PHP 7 and MySQL. I also developed and support web sites based on the Symfony framework."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Oleh did amazing work for our project. He worked hundreds of hours for us and we are very happy with him. Thanks a lot Oleh and we are looking forward to work with you soon again!",
      author: {
        name: 'Andriy Rudyy',
        designation: 'SEO, Hard Reset Team'
      }
    },
    {
      id: 2,
      content: "I was looking for a pro to make a custom web site for my construction company. One of my coworkers referred Oleh. He contacted me right away, asked my main goals and expectations. Couple days later We sent me 5 different designs and themes to choose from. Thanks to his knowledge and determination my website looks great and functions really good. Will recommend anyone that is looking for a custom website to contact Oleh Lavryk. He will guide you to the right direction.",
      author: {
        name: 'Sergey Suvorov',
        designation: 'Client | nucastleconstruction.com'
      }
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 95
    },
    {
      title: "LESS, SASS",
      value: 80
    },
    {
      title: "JavaScript",
      value: 65
    },
    {
      title: "JQuery",
      value: 65
    },
    {
      title: "ReactJS",
      value: 45
    },
    {
      title: "WordPress",
      value: 60
    },
    {
      title: "Elementor",
      value: 45
    },
    {
      title: "PHP 7",
      value: 60
    },
    {
      title: "Symfony Framework",
      value: 40
    },
    {
      title: "MySQL 5",
      value: 50
    },
    {
      title: "GIT",
      value: 60
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Elmaks",
      subtitle: "Electric cars dealer HTML 5 template.",
      imageUrl: "../images/portfolio-image-1.jpg",
      largeImageUrl: ["../images/portfolio-image-1-lg.jpg"],
      url: 'http://html.superbcode.net/elmaks'
    },
    {
      id: 2,
      title: "Steam & Grill",
      subtitle: "Wordpress theme for food bloggers.",
      imageUrl: "../images/portfolio-image-2.jpg",
      largeImageUrl: ["../images/portfolio-image-2-lg.jpg"],
      url: 'http://wordpress.superbcode.net/steamgrill'
    },
    {
      id: 3,
      title: "Resto Food Service",
      subtitle: "React/Redux single page application.",
      imageUrl: "../images/portfolio-image-3.jpg",
      largeImageUrl: [
        "../images/portfolio-image-3-lg.jpg",
        "../images/portfolio-image-3-lg2.jpg"
      ],
      url: 'https://github.com/olehlavryk/react-resto-app'
    },
    {
      id: 4,
      title: "Gorgan",
      subtitle: "HTML 5 template about mountains and trekking in the mountains.",
      imageUrl: "../images/portfolio-image-4.jpg",
      largeImageUrl: ["../images/portfolio-image-4-lg.jpg"],
      url: 'http://html.superbcode.net/gorgan/'
    },
    {
      id: 5,
      title: "National Geographic",
      subtitle: "Old style HTML 5 template of National Geographic.",
      imageUrl: "../images/portfolio-image-5.jpg",
      largeImageUrl: ["../images/portfolio-image-5-lg.jpg"],
      url: 'http://html.superbcode.net/national-geographic/'
    },
    {
      id: 6,
      title: "Comming soon",
      subtitle: "Your next job may be here.",
      imageUrl: "./images/portfolio-image-6.jpg",
      largeImageUrl: ["./images/portfolio-image-6-lg.jpg"]
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Frontend web developer",
        company: "Hard Reset Team",
        details: "Front end developer, support and develop next projects: www.lg-firmwares.com, www.sfirmware.com, www.hardreset.guru, www.imei.guru"
      },
      {
        id: 2,
        year: "2011 - 2019",
        position: "Junior technical engineer",
        company: "ISP Bitternet",
        details: "Work with an optical fiber network, welding optical fibers."
      },
      {
        id: 3,
        year: "2010 - 2011",
        position: "Intern front end developer",
        company: "Web Studio HyperSlicing",
        details: "Slicing PSD templates and convert into static HTML files, using HTML, CSS, JavaScript, JQuery."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "Full JavaScript + React Course",
        university: "Online Course on Udemy",
        details: "Increased skills in working with JavaScript and React. Verification https://www.udemy.com/certificate/UC-9bec03f1-b35b-43ce-8231-78f01b92e497/"
      },
      {
        id: 2,
        year: "2019 - 2019",
        graduation: "GIT: Complete course for beginners and more",
        university: "Online Course on Udemy",
        details: "Increased skills in working with GIT. Verification https://www.udemy.com/certificate/UC-TJ2V4Q6M/"
      },
      {
        id: 3,
        year: "2019 - 2019",
        graduation: "Front-End Web Development with React",
        university: "Online Course on Coursera",
        details: "Created a Single Page Application based on React JS & Redux technologies. Verification https://www.coursera.org/account/accomplishments/verify/Y79L4ASKN2KC"
      },
      {
        id: 4,
        year: "2016 - 2017",
        graduation: "LearnEnglish Pathways Pre-intermediate",
        university: "Online Course on British Council",
        details: "Increased skills, English as a second language to Pre-intermediate."
      },
      {
        id: 5,
        year: "2005 - 2010",
        graduation: "Computer Information Systems and Software Engineering",
        university: "TNTU (Ternopil Ivan Pul'uj National Technical University) with honour",
        details: "Development of information systems and management of the Web site e-shop powered by PHP and MySQL."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: './images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: './images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: './images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: './images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: './images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: './images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: './images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: './images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: './images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: './images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: './images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: './images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: './images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: './images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: './images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+38(098) 027 71'],
    emailAddress: ['oleh.lavrik@gmail.com'],
    address: "2/25 Shukhevucha Street, Chortkiv, Ukraine"
  }
};


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});