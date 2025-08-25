import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Briefcase,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Globe,
  Server,
  Layers,
  FolderOpen,
  User,
  Mail,
} from "lucide-react";

const skills = [
  { name: "HTML5", color: "bg-orange-500", icon: "🌐" },
  { name: "CSS3", color: "bg-blue-500", icon: "🎨" },
  { name: "Bootstrap", color: "bg-purple-500", icon: "🅱️" },
  { name: "Tailwind", color: "bg-cyan-500", icon: "💨" },
  { name: "JavaScript", color: "bg-yellow-500", icon: "🟨" },
  { name: "TypeScript", color: "bg-blue-600", icon: "📘" },
  { name: "Vue.js", color: "bg-green-500", icon: "💚" },
  { name: "React", color: "bg-cyan-400", icon: "⚛️" },
  { name: "Angular", color: "bg-red-500", icon: "🅰️" },
  { name: "Node.js", color: "bg-green-600", icon: "🟢" },
  { name: "Vite", color: "bg-purple-600", icon: "⚡" },
  { name: "Nuxt", color: "bg-green-400", icon: "🔺" },
  { name: "Laravel", color: "bg-red-600", icon: "🔴" },
  { name: "Next.js", color: "bg-gray-800", icon: "▲" },
  { name: "Express", color: "bg-gray-600", icon: "🚀" },
  { name: "Fastify", color: "bg-green-500", icon: "⚡" },
  { name: "MongoDB", color: "bg-green-500", icon: "🍃" },
  { name: "MySQL", color: "bg-orange-500", icon: "🐬" },
  { name: "PostgreSQL", color: "bg-blue-500", icon: "🐘" },
  { name: "Python", color: "bg-yellow-600", icon: "🐍" },
  { name: "Git", color: "bg-orange-600", icon: "📂" },
  { name: "GitHub", color: "bg-gray-800", icon: "🐙" },
];

const featuredSections = [
  {
    title: "Projects Showcase",
    description: "A selection of real apps I've built to solve real problems.",
    icon: FolderOpen,
    link: "/projects",
    color: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "About Me",
    description: "Who I am and what I do.",
    icon: User,
    link: "/about",
    color: "bg-green-500/10 border-green-500/20",
  },
  {
    title: "Skills & Tools",
    description: "Covering mobile, web, AI, and UI/UX technologies.",
    icon: Code2,
    link: "/achievements",
    color: "bg-purple-500/10 border-purple-500/20",
  },
];

export default function Home() {
  return (
    <div className="space-y-12 pt-8 lg:pt-0">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Hi, I'm Muhammad Irfan
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Based in Jakarta, Indonesia 🇮🇩</span>
            </div>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Onsite
            </Badge>
          </div>
        </div>

        <div className="prose prose-invert max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experienced and passionate{" "}
            <span className="text-primary font-semibold">
              Fullstack Developer
            </span>{" "}
            I’m a final-year Informatics Engineering student at Indraprasta PGRI
            University with a GPA of 3.50{" "}
            <span className="text-primary">
              Next.js, TypeScript, and Tailwind CSS,PHP with React, Vue, and
              Angular.
            </span>{" "}
            specializing in web and mobile application development. I have
            hands-on experience delivering scalable, responsive, and data-driven
            applications using modern technologies such as React.js, Next.js,
            TailwindCSS, and native PHP,{" "}
            <span className="text-primary">Most recently,</span>, II worked as a
            Frontend Web Developer at PT Bank Negara Indonesia (Persero) Tbk,
            <span className="text-primary">
              Wholesale Digital Delivery division.
            </span>
            .I have worked as a Freelance Full Stack Web Developer
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        </div>
        <p className="text-muted-foreground">My professional skills.</p>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`aspect-square rounded-full ${skill.color} flex items-center justify-center text-white font-semibold text-sm hover:scale-110 transition-transform cursor-pointer`}
              title={skill.name}
            >
              <span className="text-xl">{skill.icon}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            Featured Sections
          </h2>
        </div>
        <p className="text-muted-foreground">
          Explore everything I've crafted, contributed, and accomplished.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSections.map((section, index) => (
            <Card
              key={index}
              className={`${section.color} hover:bg-opacity-20 transition-all group cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <section.icon className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          Let's Work Together
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Let's
          discuss how we can build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline">
            <FolderOpen className="w-4 h-4 mr-2" />
            View My Work
          </Button>
        </div>
      </section>
    </div>
  );
}
