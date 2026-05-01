import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Shield, 
  Code, 
  Cpu, 
  Globe, 
  Server,
  ChevronRight,
  Monitor,
  Database,
  Lock,
  Search,
  Activity,
  FileText
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
  demo?: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  rank?: string;
  icon: React.ReactNode;
}

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className="font-mono">{currentText}</span>;
};

const SectionHeader = ({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4"
    >
      <span className="font-mono text-accent text-sm font-bold tracking-tighter">{number}</span>
      <div className="h-[2px] w-12 bg-accent/40" />
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Protocol</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-mono font-bold text-white mb-6 uppercase tracking-tighter leading-none"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 max-w-2xl font-sans text-lg border-l-2 border-zinc-800 pl-6"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8 overflow-hidden transition-all hover:border-accent/30 hover:bg-zinc-900/20"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      {project.icon}
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-6 text-[10px] font-mono text-accent uppercase tracking-widest bg-accent/5 px-3 py-1 rounded-full w-fit border border-accent/10">
        <Activity size={10} />
        <span>{project.category}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors tracking-tight">{project.title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-sans">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 text-[9px] font-mono bg-zinc-800/40 text-zinc-400 rounded-md border border-zinc-800 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <Github size={16} /> Source
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <ExternalLink size={16} /> Deploy
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="flex items-start gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 transition-all group"
  >
    <div className="mt-1 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-500 group-hover:text-accent group-hover:border-accent/40 transition-all">
      {achievement.icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform">{achievement.title}</h4>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-1">{achievement.date}</span>
      </div>
      <p className="text-zinc-500 text-sm mb-3 leading-relaxed">{achievement.description}</p>
      {achievement.rank && (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-[10px] font-mono font-bold text-accent uppercase tracking-tighter">
          <Terminal size={10} /> {achievement.rank}
        </span>
      )}
    </div>
  </motion.div>
);

const ExperienceCard = ({ exp }: { exp: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-10 pb-16 border-l-2 border-zinc-900 last:pb-0 group"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-zinc-800 group-hover:border-accent transition-colors" />
    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-2 block font-bold">
      [{exp.period}]
    </span>
    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-accent transition-colors">{exp.role}</h3>
    <div className="text-zinc-400 font-mono text-sm mb-6 flex items-center gap-2">
      <span className="text-accent">@</span> {exp.company}
      {exp.location && <span className="text-zinc-700 text-xs font-normal font-sans tracking-normal">• {exp.location}</span>}
    </div>
    <ul className="space-y-3">
      {exp.points.map((point: string, i: number) => (
        <li key={i} className="text-zinc-500 text-sm flex gap-3 leading-relaxed group-hover:text-zinc-400 transition-colors">
          <span className="text-accent font-bold">0x{i+1}</span>
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const EducationCard = ({ edu }: { edu: any }) => (
  <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-900 group hover:bg-zinc-900/20 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{edu.institution}</h4>
        <p className="text-zinc-500 text-sm font-mono tracking-tight">{edu.degree}</p>
      </div>
      <div className="text-right">
        <span className="block text-accent font-mono text-xs mb-1">{edu.year}</span>
        <span className="px-2 py-1 bg-zinc-900 text-[10px] font-mono text-zinc-500 rounded uppercase tracking-widest border border-zinc-800">Verified</span>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex-1 h-[1px] bg-zinc-900" />
      <span className="px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-lg text-[11px] font-mono font-bold text-accent uppercase tracking-widest">
        Grade: {edu.score}
      </span>
    </div>
  </div>
);

const TerminalShell = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Accessing terminal interface...", "Authentication successful.", "Type 'help' for available commands."]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response = "Available: help, whoami, skills, projects, clear, contact, exit";
        break;
      case "whoami":
        response = "Amit Kumar Choubey - Cybersecurity Student & Researcher. Focused on Red Teaming and VAPT.";
        break;
      case "skills":
        response = "Web Security, AD Exploitation, VAPT, Python, Linux, Red Teaming.";
        break;
      case "projects":
        response = "Active Directory Lab Exploitation, Fraud Detection Android App.";
        break;
      case "contact":
        response = "Email: amitkumarchoubey2005@gmail.com | Phone: (+91) 7678532356";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        onClose();
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,156,0.1)]"
      >
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-accent" />
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Secure_Shell_Terminal v1.0.4</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <Lock size={14} />
          </button>
        </div>
        <div className="p-6 h-[60vh] overflow-y-auto font-mono text-sm space-y-2 scrollbar-thin">
          {history.map((line, i) => (
            <div key={i} className={cn(line.startsWith(">") ? "text-accent" : "text-zinc-400")}>{line}</div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-accent">$</span>
            <input 
              autoFocus
              className="bg-transparent border-none outline-none text-white w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "achievements", "skills"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "Amroha Police",
      role: "Cybersecurity Intern",
      period: "JUN 2025 – JUL 2025",
      location: "Active Case Support",
      points: [
        "Assisted in live incident investigations across Windows and Android platforms.",
        "Performed deep-dive analysis on attacker behavioral patterns and system anomalies.",
        "Conducted thorough root cause analysis of multiple compromised enterprise systems.",
        "Drafted remediation strategies to neutralize recurring threats and vulnerabilities."
      ]
    },
    {
      company: "Acmegrade",
      role: "Web Pentester Intern",
      period: "NOV 2024 – JAN 2025",
      points: [
        "Identified critical vulnerabilities including XSS, IDOR, and custom authentication logic flaws.",
        "Executed manual penetration testing targeted at high-value assets to eliminate false positives.",
        "Utilized Burp Suite Professional and Nmap for advanced traffic flows and simulation.",
        "Authored detailed CVSS-scored technical reports with granular mitigation action items."
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "Active Directory Lab Exploitation",
      description: "Simulation of full enterprise attack vectors in a controlled lab environment. Includes sophisticated credential dumping, Kerberoasting, and multi-stage lateral movement. Documented the complete chain using BloodHound for visualized attack path analysis.",
      category: "Red Teaming",
      tags: ["Active Directory", "BloodHound", "Mimikatz", "AD-Exploitation", "Windows-Security"],
      icon: <Terminal size={48} />,
      link: "https://github.com/Amit1520?tab=repositories"
    },
    {
      title: "Fraud Detection & Prevention System",
      description: "An advanced Android security framework designed to flag SIM swap fraud and device fingerprint anomalies. Features real-time risk evaluation through an adaptive authentication engine, specifically tuned for banking environment security.",
      category: "Security Analytics",
      tags: ["Kotlin", "Fingerprinting", "Risk-Scoring", "Fraud-Prevention", "Android-Security"],
      icon: <Shield size={48} />,
      link: "https://github.com/Amit1520?tab=repositories"
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Global Rank: Top 2% TryHackMe",
      description: "Consistently ranked within the top 2% of over 1.5 million users globally on the TryHackMe cybersecurity platform.",
      date: "ACTIVE",
      rank: "Top 2% Global",
      icon: <Globe size={20} />
    },
    {
      title: "IIT Kharagpur Blockchain Hackathon",
      description: "Recognized as 2nd Runner-up for developing secure blockchain solutions at the premier hackathon hosted by IIT Kharagpur.",
      date: "FEB 2025",
      rank: "2nd Runner-up",
      icon: <Database size={20} />
    },
    {
      title: "HICAThon 1.0 (CTF) Finalist",
      description: "Advanced to the Top 30 finals in this high-intensity national level Capture The Flag competition.",
      date: "AUG 2024",
      rank: "Top 30 Finalist",
      icon: <Search size={20} />
    },
    {
      title: "INFOCOM Hackstars '25",
      description: "Awarded 3rd Runner-up in the INFOCOM security challenge for demonstrating advanced exploitation techniques.",
      date: "JAN 2025",
      rank: "3rd Runner-up",
      icon: <Lock size={20} />
    },
    {
      title: "ISOEH Hackathon '25",
      description: "Ranked in the Top 5 at the ISOEH national-level Capture The Flag (CTF) competition.",
      date: "2025",
      rank: "Top 5 Finalist",
      icon: <Activity size={20} />
    }
  ];

  const education = [
    {
      institution: "Heritage Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      year: "2023 – PRESENT",
      score: "SGPA: 9.69"
    },
    {
      institution: "Delhi Public School, Bokaro",
      degree: "Class 12 (Science)",
      year: "2022",
      score: "92.0%"
    },
    {
      institution: "Delhi Public School, Bokaro",
      degree: "Class 10",
      year: "2020",
      score: "86.0%"
    }
  ];

  const skills = {
    "Web Security & VAPT": ["OWASP Top 10", "Burp Suite Pro", "API Security", "Vulnerability Validation", "Manual Testing"],
    "Offensive Security": ["AD Exploitation", "BloodHound / Mimikatz", "Privilege Escalation", "Lateral Movement", "Threat Modeling"],
    "Tools & Automation": ["Nmap / Metasploit", "Wireshark / Volatility", "Python (Security)", "Bash Scripting", "Docker"]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-accent/30 selection:text-white">
      {/* HUD Header */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-zinc-900 py-4 shadow-2xl" : "bg-transparent py-10"
      )}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center relative z-10">
                <span className="text-black font-mono font-black text-2xl tracking-tighter">A</span>
              </div>
              <div className="absolute inset-0 bg-accent blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-white text-sm tracking-[0.2em] leading-none text-left">AMIT_CHOUBEY</span>
              <span className="font-mono text-[8px] text-accent font-bold tracking-[0.4em] mt-1 uppercase text-left">Security_Enthusiast | CTF_PLAYER</span>
            </div>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 font-bold">
            {["home", "experience", "projects", "achievements", "skills"].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className={cn(
                  "hover:text-accent transition-all relative group py-2",
                  activeSection === section && "text-white"
                )}
              >
                {section}
                <div className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                  activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="h-6 w-[1px] bg-zinc-800 hidden md:block" />
            <div className="flex items-center gap-5">
              <a href="https://tryhackme.com/p/Iamyou777" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-accent transition-all" title="TryHackMe Profile">
                <Shield size={18} />
              </a>
              <a href="https://github.com/Amit1520?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all" title="GitHub Repositories">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/amit-kumar-choubey-b2a986302/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-accent-blue transition-all" title="LinkedIn Profile">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden px-8">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-[0.3em]">Status: Operational / Sudo Make Me Hacker</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[13rem] font-mono font-black text-white mb-10 leading-[0.8] tracking-tighter uppercase text-left">
              AMIT <br />
              <span className="text-zinc-800 outline-text">CHOUBEY</span>
            </h1>
            
            <div className="mb-16 min-h-[3rem]">
              <p className="text-2xl md:text-3xl text-zinc-500 max-w-4xl font-mono leading-tight flex items-start gap-4 text-left">
                <ChevronRight size={32} className="text-accent mt-1 animate-pulse flex-shrink-0" />
                <Typewriter text="CYBERSECURITY UNDERGRADUATE SPECIALIZING IN AD EXPLOITATION, VAPT & RED TEAMING." delay={30} />
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 text-zinc-500 text-sm md:text-base leading-relaxed font-sans max-w-2xl border-l-2 border-zinc-900 pl-6 text-left"
              >
                Passionate offensive security researcher with hands-on experience in exploiting real-world vulnerabilities. Top 2% globally on TryHackMe, focusing on modern attack techniques and infrastructure security.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl border-t border-zinc-900 pt-16">
              {[
                { label: "Credentials", value: "CRTA / THM Licensed", icon: <Lock size={14} /> },
                { label: "Expertise", value: "Offensive Security", icon: <Terminal size={14} /> },
                { label: "Availability", value: "Security Research / VAPT", icon: <Activity size={14} /> }
              ].map((stat) => (
                <div key={stat.label} className="group text-left">
                  <div className="flex items-center gap-2 text-zinc-600 mb-2">
                    {stat.icon}
                    <span className="text-[10px] font-mono uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-accent transition-colors">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex flex-wrap gap-10 items-center">
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsTerminalOpen(true)}
                className="px-10 py-5 bg-white text-black font-mono font-black text-sm uppercase tracking-widest flex items-center gap-3 rounded-xl group"
              >
                Enter_Command_Center <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="flex flex-col group text-left">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">Direct_Interface</span>
                <a href="mailto:amitkumarchoubey2005@gmail.com" className="text-sm font-mono text-white underline underline-offset-8 decoration-zinc-800 group-hover:decoration-accent transition-all font-bold">amitkumarchoubey2005@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className="py-40 bg-[#080808] border-y border-zinc-900 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <SectionHeader 
                number="01" 
                title="OPERATIONAL HISTORY" 
                subtitle="Documented field experience in defensive and offensive security roles, assisting technical investigations and performing high-stakes audits."
              />
              <div className="mt-20 space-y-4">
                {experiences.map((exp, idx) => (
                  <ExperienceCard key={idx} exp={exp} />
                ))}
              </div>
            </div>
            
            <div className="space-y-32">
              <div>
                <SectionHeader 
                  number="02" 
                  title="CORE INTEL" 
                  subtitle="Primary academic background and foundation in CS-Engineering with focus on security architectures."
                />
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <EducationCard key={idx} edu={edu} />
                  ))}
                  <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex items-center gap-6 group hover:border-accent/20 transition-all">
                    <div className="p-4 bg-zinc-950 rounded-xl text-zinc-700 group-hover:text-accent transition-colors">
                      <Globe size={32} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold mb-1 group-hover:text-accent transition-colors">Global Outreach</h4>
                      <p className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">
                        Fluency: English, Hindi, German (Basic Proficiency)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 relative px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="03" 
            title="SECURITY LABS" 
            subtitle="Deep-dive simulations into enterprise-level vulnerabilities and defensive application engineering."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-40 bg-[#080808] border-y border-zinc-900 px-8 text-left">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="04" 
            title="SYSTEM VALIDATION" 
            subtitle="Verified rankings and competitive recognition in high-intensity security challenges and blockchain audits."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {achievements.map((achievement, idx) => (
              <AchievementCard key={idx} achievement={achievement} />
            ))}
          </div>

          {/* Verification Area */}
          <div className="mt-32 pt-20 border-t border-zinc-900 flex flex-col items-center">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] mb-16 font-black">Digital_Verification_Badges</span>
            <div className="flex flex-wrap justify-center gap-16 md:gap-32">
              <a href="https://labs.cyberwarfare.live/credential/achievement/698c376b398414f740f42d52" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-6 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-900 grid place-items-center relative group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(0,255,156,0.15)] transition-all">
                  <Shield size={40} className="text-zinc-800 group-hover:text-accent transition-colors" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded shadow-xl grid place-items-center">
                    <Lock size={10} className="text-black" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-white text-xs font-mono font-black uppercase tracking-widest mb-1">CRTA AD DEFENDER</h4>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">View Credential</span>
                </div>
              </a>
              
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VGJL3WD4U8.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-6 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-900 grid place-items-center relative group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(0,255,156,0.15)] transition-all">
                  <Globe size={40} className="text-zinc-800 group-hover:text-accent transition-colors" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded shadow-xl grid place-items-center text-black font-black text-[10px] font-mono">
                    THM
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-white text-xs font-mono font-black uppercase tracking-widest mb-1">THM WEB PENTEST</h4>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">View License</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 px-8 text-left">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="05" 
            title="THE ARSENAL" 
            subtitle="The toolkit and technical proficiencies deployed across VAPT and Red Teaming engagements."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-[#0a0a0a] border border-zinc-900 hover:border-accent/20 transition-all border-b-4 border-b-zinc-900 hover:border-b-accent/40"
              >
                <h4 className="text-white font-mono text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {category}
                </h4>
                <ul className="space-y-5">
                  {items.map(skill => (
                    <li key={skill} className="flex items-center gap-4 group/item">
                      <div className="p-1.5 bg-zinc-900 rounded-lg group-hover/item:bg-accent/10 transition-colors">
                        <ChevronRight size={12} className="text-zinc-600 group-hover/item:text-accent transition-all" />
                      </div>
                      <span className="text-zinc-500 font-mono text-sm uppercase tracking-tighter group-hover/item:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="relative pt-40 pb-20 bg-black border-t border-zinc-900 px-8">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-40">
            <div className="flex-1 text-left w-full">
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-mono font-black text-white mb-10 tracking-tighter leading-none">
                INITIATE_ <br />
                CONNECTION.
              </h2>
              <p className="text-zinc-500 max-w-xl text-lg font-sans leading-relaxed border-l-2 border-zinc-800 pl-8">
                Available for mission-critical collaborations, security research challenges, or infrastructure security audits. Reach out via encoded channels.
              </p>
            </div>
            
            <div className="flex flex-col gap-10 items-start lg:items-end text-left lg:text-right w-full lg:w-auto overflow-hidden">
              <div className="flex flex-col items-start lg:items-end w-full">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Comms_Channel</span>
                <a 
                  href="mailto:amitkumarchoubey2005@gmail.com" 
                  className="text-xl md:text-4xl lg:text-5xl font-mono text-accent hover:tracking-widest transition-all duration-700 font-black uppercase break-words w-full"
                >
                  AMITKUMARCHOUBEY2005@GMAIL.COM
                </a>
                <span className="text-lg md:text-xl lg:text-2xl font-mono text-white mt-4 font-bold tracking-tighter whitespace-nowrap block">(+91) 7678532356</span>
              </div>
              
              <div className="flex items-center gap-10 flex-wrap">
                <a href="https://github.com/Amit1520?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex flex-col items-end group">
                  <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">Intel_Storage</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-bold text-white uppercase tracking-tighter">GITHUB</span>
                    <Github size={24} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <div className="w-[1px] h-10 bg-zinc-900" />
                <a href="https://www.linkedin.com/in/amit-kumar-choubey-b2a986302/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-end group">
                  <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest mb-2 group-hover:text-accent-blue transition-colors">Global_Net</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-bold text-white uppercase tracking-tighter">LINKEDIN</span>
                    <Linkedin size={24} className="text-zinc-600 group-hover:text-accent-blue transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-800 font-black">
            <div className="flex items-center gap-6">
              <span>© 2026_AMIT_KUMAR_CHOUBEY</span>
              <span className="text-accent underline underline-offset-4 decoration-accent/20">All Systems Secured</span>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="group-hover:text-accent transition-colors cursor-pointer">Terminal_Access: 127.0.0.1</span>
              </div>
              <span className="hidden md:block">Built_with_React_Vite + Tailwind_v4</span>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isTerminalOpen && (
          <TerminalShell 
            isOpen={isTerminalOpen} 
            onClose={() => setIsTerminalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
