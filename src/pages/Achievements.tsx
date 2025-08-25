import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Calendar,
  ExternalLink,
} from "lucide-react";

const achievements = [
  {
    title: "Belajar Dasar AI ",
    issuer: "PT. Dicoding Indonesia",
    date: "08 Januari 2025",
    type: "Learning Online Course",
    description:
      "Belajar Dasar AI adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar AI (Intelligent Agent) dan teknologi AI (Artificial Intelligence).",
    image: "/images/dicodingai.PNG",
    verified: true,
  },
  {
    title: "Belajar Dasar Pemrograman Javascript",
    issuer: "PT. Dicoding Indonesia",
    date: "06 Januari 2025",
    type: "Learning Online Course",
    description:
      "Belajara Dasar Pemrograman Javascript adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar pemrograman javascript.",
    image: "/images/js1coding.PNG",
    verified: true,
  },
  {
    title: "Belajar Membuat Front-end Web Untuk Pemula ",
    issuer: "PT. Dicoding Indonesia",
    date: "06 Januari 2025",
    type: "Learning Online Course",
    description:
      "Belajar Membuat Front-end Web Untuk Pemula adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar front-end web development.",
    image: "/images/js2coding.PNG",
    verified: true,
  },
  {
    title: "Belajar Dasar Pemrogran Web ",
    issuer: "PT. Dicoding Indonesia",
    date: "06 Januari 2025",
    type: "Learning Online Course",
    description:
      "Belajar Dasar Pemrogran Web adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar pemrograman web.",
    image: "/images/js3coding.PNG",
    verified: true,
  },
  {
    title: "Introduction To Javascript",
    issuer: "PT.Sololearn",
    date: "19 September 2024",
    type: "Learning Online Course",
    description:
      "Introduction To Javascript adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar javascript.",
    image: "/images/js4coding.PNG",
    verified: true,
  },
  {
    title: "MBKM Course Batch 6 Full Stack Web Development",
    issuer: "PT LX International",
    date: "Juni 2024",
    type: "Internship",
    description:
      "MBKM Course Batch 6 Full Stack Web Development adalah sebuah program pengembangan web yang bertujuan untuk mempelajari dasar-dasar full stack web development.",
    image: "/images/js5coding.PNG",
    verified: true,
  },
  {
    title: "Legacy Javascript Algoritms and Data Structures",
    issuer: "PT.Freecodecamp",
    date: "December 2021",
    type: "Learning Online Course",
    description:
      "Legacy Javascript Algoritms and Data Structures adalah sebuah kursus online yang bertujuan untuk mempelajari algoritma dan struktur data javascript.",
    image: "/images/js6coding.PNG",
    verified: true,
  },
  {
    title: "Responsive Web Design ",
    issuer: "PT.Freecodecamp",
    date: "December 2021",
    type: "Learning Online Course",
    description:
      "Responsive Web Design adalah sebuah kursus online yang bertujuan untuk mempelajari dasar-dasar responsive web design.",
    image: "/images/js7coding.PNG",
    verified: true,
  },
];

const stats = [
  {
    label: "Certifications Earned",
    value: "12+",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    label: "Projects Completed",
    value: "25+",
    icon: Star,
    color: "text-blue-500",
  },
  {
    label: "GitHub Contributions",
    value: "570+",
    icon: Trophy,
    color: "text-green-500",
  },
  {
    label: "Years Learning",
    value: "3+",
    icon: Medal,
    color: "text-purple-500",
  },
];

export default function Achievements() {
  return (
    <div className="space-y-12 pt-8 lg:pt-0">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Achievements</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          A collection of certifications, awards, and milestones from my
          learning journey.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="space-y-2">
                <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Achievements Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Certifications & Awards
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:bg-card/50 transition-all overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="space-y-4">
                  {/* Gambar Full Width di bagian atas */}
                  <div className="w-full h-48 relative">
                    {achievement.image.startsWith("/") ? (
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display =
                            "block";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-6xl">
                        {achievement.image}
                      </div>
                    )}
                  </div>

                  {/* Content di bawah gambar */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {achievement.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                          >
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {achievement.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {achievement.issuer}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {achievement.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        View Certificate
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
        <div className="text-4xl mb-4">🏆</div>
        <h3 className="text-2xl font-bold text-foreground">
          Continuous Learning
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I believe in continuous improvement and staying updated with the
          latest technologies. These achievements represent my commitment to
          excellence and lifelong learning.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            Certified Developer
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-500/10 text-blue-500 border-blue-500/20"
          >
            Open Source Contributor
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-500/10 text-green-500 border-green-500/20"
          >
            Community Leader
          </Badge>
        </div>
      </section>
    </div>
  );
}
