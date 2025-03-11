import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Choirul Rasyid",
  initials: "MCR",
  url: "https://choirulrasyid.web.id",
  location: "Yogyakarta City",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Student aspire to become a System Administrator. I am passionate about automation, cloud computing, and optimizing system infrastructure to enhance performance and reliability.",
  summary:
    "Currently attending SMK Negeri 2 Yogyakarta, majoring in Network Information Systems and Applications. With a strong passion for information technology, I am eager to expand my knowledge and develop my skills, particularly in DevOps and System Administration. I am highly motivated to learn about cloud computing, automation, and network infrastructure to enhance system efficiency and reliability. I am always looking for opportunities to gain hands-on experience and improve my technical expertise in the ever-evolving IT industry.",
  avatarUrl: "/about.jpg",
  skills: [
    "React",
    "Next",
    "Javascript",
    "Typescript",
    "Python",
    "Docker",
    "Kubernetes",
    "Bash",
    "AWS",
    "Ubuntu",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@choirulrasyid09",
      icon: Icons.medium,
      label: "Blog",
    },
  ],
  contact: {
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
      Email: {
        name: "Send Email",
        url: "mailto:choirulrasyid09@gmail.com",
        icon: Icons.Email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Sistem Informasi Jaringan dan Aplikasi",
      logoUrl: "/smk2yk.jpeg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Proxmox High-Availability Cluster",
      href: "#",
      dates: "Oct 2024",
      active: true,
      description:
        "A Proxmox VE 8.2.2 cluster with high availability, featuring nodes (irul, irul2, irul3) and leveraging local-lvm and NFS for efficient storage. It enables seamless VM and container orchestration with backup, replication, and security for optimal performance.",
      technologies: ["Proxmox", "NFS", "HA"],
      links: [],
      image: "/hacluster.jpg",
    },
    {
      title: "HAProxy Load Balancer",
      href: "#",
      dates: "Feb 2025",
      active: true,
      description:
        "An HAProxy load balancing setup with real-time monitoring, efficiently distributing traffic across backend servers (backend1 & backend2) for optimal performance. The dashboard tracks sessions, byte transfers, errors, and health status, ensuring reliability and scalability.",
      technologies: ["Ubuntu", "HAProxy"],
      links: [],
      image: "/haproxy.webp",
    },
    {
      title: "Masjid AL-HUDA",
      href: "https://masjidalhuda.vercel.app",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "AL-HUDA is a website that provides comprehensive information about various activities and ensures easy access for the congregation, allowing them to stay updated on events, schedules, and other important announcements.",
      technologies: ["Next", "Javascript", "Firebase", "TailwindCSS"],
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
      technologies: ["AWS", "VPC", "RDS", "S3", "EFS", "EC2", "ECR", "ECS"],
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
      title: "Secure and Fast Deployment with CI/CD",
      dates: "December 20, 2024",
      description:
        "Ensuring safe and efficient application deployment using CI/CD.",
      image: "/dicoding.png",
      links: [
        {
          title: "Dicoding",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.dicoding.com/",
        },
      ],
    },
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
