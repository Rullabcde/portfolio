import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Choirul Rasyid",
  initials: "MCR",
  url: "https://choirulrasyid.vercel.app",
  location: "Yogyakarta City",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Student aspire to become a System Administrator. I am passionate about automation, cloud computing, and optimizing system infrastructure to enhance performance and reliability.",
  summary:
    "Currently attending SMK Negeri 2 Yogyakarta, majoring in Network Information Systems and Applications. With a strong passion for information technology, I am eager to expand my knowledge and develop my skills, particularly in DevOps and System Administration. I am highly motivated to learn about cloud computing, automation, and network infrastructure to enhance system efficiency and reliability. I am always looking for opportunities to gain hands-on experience and improve my technical expertise in the ever-evolving IT industry.",
  avatarUrl: "/about.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Python",
    "Docker",
    "Kubernetes",
    "Bash",
    "AWS",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@choirulrasyid09",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "choirulrasyid09@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rullabcde",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-choirul-rasyid/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/rullabcd/",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:choirulrasyid09@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Jurusan Sistem Informasi Jaringan dan Aplikasi",
      logoUrl: "/smk2yk.jpeg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Masjid AL-HUDA",
      href: "https://masjidalhuda.vercel.app",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "AL-HUDA is a website that provides comprehensive information about various activities and ensures easy access for the congregation, allowing them to stay updated on events, schedules, and other important announcements.",
      technologies: ["Next.js", "Javascript", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://masjidalhuda.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alhuda.png",
    },
    {
      title: "PSLounge",
      href: "https://pslounge.vercel.app",
      dates: "Nov 2024",
      active: true,
      description:
        "PSLounge is a profile website dedicated to PlayStation rental services, offering a range of features that allow users to browse available consoles, check pricing and rental durations, make reservations, and stay updated with the latest promotions and game additions.",
      technologies: ["React", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://pslounge.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rullabcde/pslounge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pslounge.png",
    },
    {
      title: "Wordpress on AWS",
      href: "#",
      dates: "Feb 2025",
      active: true,
      description:
        "A WordPress website built on AWS, utilizing a robust architecture that includes VPC for secure networking, RDS for efficient database management, EFS for scalable file storage, EC2 for virtual server hosting, ECR for containerized image storage, and ECS for seamless container orchestration and deployment.",
      technologies: ["AWS", "VPC", "RDS", "EFS", "EC2", "ECR", "ECS"],
      links: [],
      image: "/wordpress.png",
    },
    {
      title: "IoT Data Center",
      href: "https://github.com/Rullabcde/monitoring_data_center",
      dates: "Dec 2024",
      active: true,
      description:
        "An IoT-based data center monitoring system that utilizes DHT11 and PZEM sensors to measure environmental parameters such as temperature, humidity, and power consumption. The system provides real-time output through the Blynk platform for remote monitoring, as well as alerts via a buzzer and LED indicators to ensure immediate response to critical conditions.",
      technologies: ["Arduino IDE", "C++", "Blynk"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rullabcde/monitoring_data_center",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iotdatacenter.jpg",
    },
  ],
  activity: [
    {
      title: "Amikom IITC Optimization SEO and CDN",
      dates: "September 8, 2024",
      description:
        "Frontend Supercharged: SSR Secrets for SEO and CDN Optimization for Fast and Interactive Websites.",
      image: "/iitc.png",
      links: [
        {
          title: "IITC",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://iitc.intermediaamikom.org/",
        },
      ],
    },
    {
      title: "Amikom HMIF Dedicated to School",
      dates: "July 25 - 26, 2024",
      description:
        "HMIF is working with UKM AMCC to provide students with material on web programming using ReactJS technology.",
      image: "/hmif.png",
      links: [
        {
          title: "HMIF",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hmifamikom.com/",
        },
      ],
    },
  ],
  blogsPerPage: 10,
} as const;
