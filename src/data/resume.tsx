import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Choirul Rasyid",
  initials: "MCR",
  url: "https://choirulrasyid.web.id",
  location: "Yogyakarta City",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Student aspiring to become a System Administrator, with a strong passion for Linux systems, DevOps, and infrastructure automation to boost performance, scalability, and reliability.",
  summary:
    "I’m a student at SMK Negeri 2 Yogyakarta majoring in Sistem Informasi Jaringan dan Aplikasi. Passionate about Linux, server infrastructure, and DevOps practices, I focus on building and managing reliable systems using tools like Docker, Kubernetes, and Ansible. I’m actively exploring cloud computing, CI/CD, and observability stacks such as Prometheus and Grafana to improve performance and scalability. Always eager to learn and gain hands-on experience, I aim to grow into a professional System Administrator or DevOps Engineer.",
  avatarUrl: "/about.jpeg",
  skills: [
    "Linux",
    "Shell Script",
    "HAProxy",
    "Nginx",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@muhammadchoirulrasyid",
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
      start: "July 2022",
      end: "Present",
      description:
        "I have developed strong Linux system administration skills, including service management, user roles and permissions, and server security hardening. In practical server deployment simulations, I successfully configured DNS and Mail Servers. I have experience deploying and maintaining Apache/Nginx web servers and WordPress-based websites. To improve efficiency, I automated routine system tasks using Bash scripting. In the field of security, I practiced penetration testing and network security through Kali Linux labs. I utilized Proxmox VE for virtualization to simulate infrastructure environments. Additionally, I built an IoT-based data center monitoring system using DHT11 and PZEM sensors, integrated with Blynk for real-time alerts via LED and buzzer. On the web development side, I created responsive web applications using React, Next.js, and Tailwind CSS. I also simulated high availability clusters to gain an understanding of redundancy and failover mechanisms, and explored cloud deployment workflows using AWS.",
    },
  ],
  work: [
    {
      company: "PT. Jetorbit Indonesia",
      href: "https://www.jetorbit.com/",
      badges: [],
      location: "On Site",
      title: "Junior System Administrator",
      logoUrl: "/jetorbit.jpg",
      start: "May 2025",
      end: "Present",
      description: "hehe",
    },
  ],
  projects: [
    {
      title: "High-Availability K3s Cluster",
      href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_kubernetes-highavailability-k3s-activity-7371788734272307201-OLq9",
      dates: "Sep 2025",
      active: true,
      description:
        "A fault-tolerant K3s cluster with multi-control plane setup and external database (MySQL) for high availability. Includes load-balanced API servers, multiple worker nodes, and built-in Traefik for ingress. Designed for self-healing and scalable workloads.",
      technologies: ["K3s", "MySQL", "Traefik", "HA", "Load Balancer"],
      links: [],
      image: "/k3scluster.jpg",
    },
    {
      title: "Mailcow Self-Hosted Mail Server",
      href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_mailcow-docker-emailsecurity-activity-7363100514831527936-2aw4",
      dates: "Aug 2025",
      active: true,
      description:
        "A self-hosted Mailcow installation on Ubuntu Server with Docker, providing secure mail services including Postfix, Dovecot, and SOGo webmail. Configured SSL, DNS records, and backup automation for reliable email delivery and domain isolation.",
      technologies: ["Mailcow", "Docker", "Postfix", "Dovecot", "SOGo", "SSL"],
      links: [],
      image: "/mailcow.jpg",
    },
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
      title: "Belajar Linux dari Nol+",
      dates: "May 26, 2025",
      description:
        "Completed an online course on learning Linux from scratch, covering fundamental Linux concepts and practical skills for system administration.",
      image: "/id-networkers.png",
      links: [
        {
          title: "ID-Networkers",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://id-networkers.com/",
        },
      ],
    },
    {
      title: "Jaringan Komputer Dasar",
      dates: "May 26, 2025",
      description:
        "Completed a comprehensive course covering basic computer networking concepts, network models, IP addressing, DNS systems, and AWS networking services.",
      image: "/id-networkers.png",
      links: [
        {
          title: "ID-Networkers",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://id-networkers.com/",
        },
      ],
    },
    {
      title: "Belajar Jaringan Komputer untuk Pemula",
      dates: "May 19, 2025",
      description:
        "Mastered fundamental computer networking concepts including network types, internet protocols, bandwidth, throughput, latency, OSI and TCP/IP models, IP addressing, subnetting, DHCP, and various DNS record types.",
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
      title: "Belajar Dasar-Dasar DevOps",
      dates: "May 18, 2025",
      description:
        "Learned comprehensive DevOps fundamentals including understanding DevOps definition and benefits, core principles through The Three Ways, CALMS Framework culture, DevOps practices with pipelines and tools, and real-world implementation case studies using Amazon examples.",
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
