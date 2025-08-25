import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FolderOpen,
  ExternalLink,
  Github,
  Globe,
  Star,
  Eye,
  Code2,
  Smartphone,
  Database,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Audit Management dashboard",
    description:
      "The Audit Management System is a custom-built attendance tracking backend developed ...",
    image: "/portofolio/audit1.PNG", // Ubah dari /portfolio/ ke /portofolio/
    featured: false,
    tags: ["React", "Next.js", "Tailwind"],
    links: [{ type: "github", url: "#" }],
    category: "Frontend",
  },
  {
    title: "Dashboard Sistem Pendukung Keputusan AHP",
    description:
      "The AHP (Analytic Hierarchy Process) is a decision-making method used to evaluate and compare multiple alternatives based on their relative importance. This dashboard provides a user-friendly interface for inputting criteria, alternatives, and pairwise comparisons, as well as visualizing the AHP results.",
    image: "/portofolio/spkahp.PNG",
    featured: false,
    tags: ["PHP", "MYSQL", "JAVASCRIPT"],
    links: [{ type: "github", url: "#" }],
    category: "Frontend",
  },
  {
    title: "Dashboard Sistem Pendukung Keputusan Mora",
    description:
      "The Mora (Multi-Objective Ranking) is a decision-making method used to evaluate and compare multiple alternatives based on their relative importance. This dashboard provides a user-friendly interface for inputting criteria, alternatives, and pairwise comparisons, as well as visualizing the Mora results.",
    image: "/portofolio/spkmora.PNG",
    featured: false,
    tags: ["PHP", "MYSQL", "JAVASCRIPT"],
    links: [{ type: "github", url: "#" }],
    category: "Full Stack Web Development",
  },
  {
    title: "Dashboard Sistem Pendukung Keputusan Sekolah",
    description:
      "The Sekolah (School) is a custom-built decision-making backend developed ...",
    image: "/portofolio/spksekolah.PNG",
    featured: false,
    tags: ["PHP", "MYSQL", "JAVASCRIPT"],
    links: [{ type: "github", url: "#" }],
    category: "Full Stack Web Development",
  },
  {
    title: "Dashboard Sistem Pendukung Keputusan Skincare",
    description:
      "The Skincare (Skincare) is a custom-built decision-making backend developed ...",
    image: "/portofolio/spkskincare.PNG",
    featured: false,
    tags: ["PHP", "MYSQL", "JAVASCRIPT"],
    links: [{ type: "github", url: "#" }],
    category: "Full Stack Web Development",
  },
  {
    title: "Dashboard Kartu Kredit Pinjaman",
    description:
      "The Kartu Kredit Pinjaman (Credit Card Loan) is a custom-built decision-making backend developed ...",
    image: "/portofolio/bnikkp.PNG",
    featured: false,
    tags: ["React", "Next.js", "Tailwind"],
    links: [{ type: "github", url: "#" }],
    category: "Frontend",
  },
  {
    title: "Top Up Game",
    description: "The Top Up Game is a custom-built game developed ...",
    image: "/portofolio/topupgame.PNG",
    featured: false,
    tags: ["React", "Next.js", "Tailwind"],
    links: [{ type: "github", url: "#" }],
    category: "Frontend",
  },
  {
    title: "Vegeta",
    description: "The Vegeta is a custom-built game developed ...",
    image: "/portofolio/vegeta.PNG",
    featured: false,
    tags: ["React", "Next.js", "Tailwind"],
    links: [{ type: "github", url: "#" }],
    category: "Frontend",
  },
  {
    title: "JAVA Application AHASS KEMANG FORWARD CHAINING",
    description:
      "The JAVA Application AHASS KEMANG FORWARD CHAINING is a custom-built game developed ...",
    image: "/portofolio/ahaskemang.PNG",
    featured: false,
    tags: ["JAVA"],
    links: [{ type: "github", url: "#" }],
    category: "JAVA",
  },
  {
    title: "python Application GIZI BALITA",
    description:
      "The python Application GIZI BALITA is a custom-built game developed ...",
    image: "/portofolio/gizibalita.PNG",
    featured: false,
    tags: ["python"],
    links: [{ type: "github", url: "#" }],
    category: "python",
  },
];

const categories = [
  "All",
  "Web Development",
  "Frontend web Development",
  "Backend Development",
];

export default function Projects() {
  // Tambahkan state untuk menangani gambar yang gagal dimuat
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  return (
    <div className="space-y-12 pt-8 lg:pt-0">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FolderOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Projects</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          A showcase of both private and open-source projects I've built or
          contributed to.
        </p>
      </section>

      {/* Category Filters */}
      <section className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary/20 transition-colors"
          >
            {category}
          </Badge>
        ))}
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Star className="w-6 h-6 text-primary" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="group hover:bg-card/50 transition-all border-primary/20 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {/* Gambar Full Width di bagian atas */}
                    <div className="w-full h-48 relative">
                      {project.image.startsWith("/") &&
                      !failedImages.has(index) ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={() => {
                            setFailedImages(
                              (prev) => new Set([...prev, index])
                            );
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-6xl">
                          {project.image.startsWith("/") ? "🖼️" : project.image}
                        </div>
                      )}
                    </div>

                    {/* Content di bawah gambar */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Featured
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            size="sm"
                            variant="outline"
                            className="gap-2"
                          >
                            {link.type === "live" ? (
                              <>
                                <Eye className="w-3 h-3" />
                                View Project
                              </>
                            ) : (
                              <>
                                <Github className="w-3 h-3" />
                                View Code
                              </>
                            )}
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">All Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:bg-card/50 transition-all overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="space-y-4">
                  {/* Gambar Full Width di bagian atas */}
                  <div className="w-full h-48 relative">
                    {project.image.startsWith("/") &&
                    !failedImages.has(index) ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={() => {
                          setFailedImages((prev) => new Set([...prev, index]));
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-6xl">
                        {project.image.startsWith("/") ? "🖼️" : project.image}
                      </div>
                    )}
                  </div>
                  {/* Content di bawah gambar */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      {project.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.links.slice(0, 2).map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          size="sm"
                          variant="ghost"
                          className="p-2"
                        >
                          {link.type === "live" ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <Github className="w-4 h-4" />
                          )}
                        </Button>
                      ))}
                    </div>
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
          Interested in collaborating?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Let's
          build something amazing together!
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          <Globe className="w-4 h-4 mr-2" />
          Get In Touch
        </Button>
      </section>
    </div>
  );
}
