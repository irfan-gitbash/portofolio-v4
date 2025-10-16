import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  ChevronDown,
  Building,
  Clock,
} from "lucide-react";

const experiences = [
  {
    title: "Freelance Full Stack Web Developer",
    location: "Jakarta, Indonesia 🇮🇩",
    period: "April 2025 - September 2025",
    duration: "5 Months",
    status: "Remote",
    logo: "🚀",
    description:
      "Audit Management System – Bank Neo CommerceDeveloped an internal audit management system to improve efficiency and transparency for Bank Neo Commerce (Phase 1 project by PT Sekawan Media Informatika).Built with React.js, Axios, Redux, and Moment.js for state management and real-time data handling.Designed a responsive UI with dynamic reporting features for audit tracking.\n\n" +
      "Real-Time Skincare Recommendation Dashboard: Built an AI-powered recommendation tool with native PHP, TailwindCSS, and JavaScript, delivering personalized skincare suggestions through dynamic criteria management and optimized performance.\n\n" +
      "School Selection Decision Support System (DSS): Designed a data-driven school selection system using native PHP for scoring logic and Bootstrap + JavaScript for dashboards, providing instant results with visual feedback for users.\n\n" +
      "Analytical Hierarchy Process (AHP) Decision Dashboard: Created a multi-criteria evaluation system with pairwise comparison, consistency ratio validation, and automated report generation, built on PHP and Bootstrap for structured decision-making.\n\n" +
      "Motorcycle Damage Diagnosis System – Honda AHASS Kemang: Developed a rule-based expert system using the Forward Chaining method in Java (Visual Studio Code) with a MySQL database to diagnose motorcycle damages. Designed an admin dashboard for managing symptoms, damages, diagnosis history, and generating real-time diagnostic results.\n\n" +
      "Child Nutrition Status Prediction System – Posyandu Rambutan B RW 07: Developed a web-based application using Python, HTML, and Tailwind CSS that applies the Naive Bayes algorithm with anthropometric parameters (age, weight, height, gender) to predict child nutrition status with high accuracy and real-time results.\n",
  },
  {
    title: "Frontend Web Developer",
    company: "PT. Bank Indonesia TBK.",
    location: "Jakarta, Indonesia 🇮🇩",
    period: "Juli 2024 - Februari 2025",
    duration: "8 Months",
    type: "Kontrak",
    status: "Onsite",
    logo: "💻",
    description:
      "PROJECT 2024-2025 \n Team:Government Technology Digital Delivery | Wholesale Digital Delivery \n\n" +
      "Mobile Frontend Developer (Alipay Mini Program) \n" +
      "Developed a responsive UI/UX by slicing Figma designs into functional components. \n" +
      "Integrated backend APIs using Mockoon for mock testing and seamless data retrieval. \n" +
      "Managed version control and collaboration via GitLab, ensuring efficient code tracking and deployment. \n" +
      "Collaborated with cross-functional teams to deliver high-quality features on time. \n\n" +
      "Frontend Developer (Microfrontend Architecture)\n" +
      "Developed reusable React.js 14.0 components in a microfrontend architecture.\n" +
      "Optimized performance with server-side rendering (SSR) and auto-complete search functionality.\n" +
      "Integrated backend APIs for real-time transaction data recaps and credit monitoring.\n" +
      "Implemented notification systems and credit application validation for seamless user workflows.\n\n" +
      "Frontend Developer (Three-Tier Architecture)\n" +
      "Developed a Next.js 14.0 and React 18.0 application with a three-tier architecture.\n" +
      "Sliced Figma designs into functional UI components with server-side rendering (SSR).\n" +
      "Fixed bugs reported by QA and implemented clean code practices.\n" +
      "Created real-time monitoring dashboards for tracking government fund distribution and revenue.\n\n" +
      "Testing & Quality Assurance\n" +
      "Conducted System Integration Testing (SIT) to validate component interactions.\n" +
      "Performed User Acceptance Testing (UAT) with stakeholders to ensure alignment with requirements.\n" +
      "Acted as a user companion during software rollout, addressing issues and optimizing performance.\n" +
      "Resolved live application errors and responded to user-reported bugs promptly.",
  },
  {
    title: "Full Stack Web Developer",
    company: "PT LX INTERNATIONAL",
    location: "Jakarta, Indonesia 🇮🇩",
    period: "Januari 2024 - Juni 2024",
    duration: "8 Months",
    type: "Intership",
    status: "Remote",
    logo: "🎓",
    description:
      "• Participated in an intensive full-stack web development program equivalent to 20 university credits.\n\n" +
      "• Developed dynamic and interactive user interfaces using HTML, CSS, JavaScript, jQuery, and Ajax.\n\n" +
      "• Worked with Bootstrap and Bulma frameworks to create responsive designs.\n\n" +
      "• Implemented server-side scripting using Flask and Python.\n\n" +
      "• Managed flexible and scalable database solutions using MongoDB.\n\n" +
      "• Integrated APIs to connect various systems and services.\n\n" +
      "• Developed authentication mechanisms to enhance security\n\n" +
      "My Project:\n\n" +
      "Developed a data management dashboard for PT Cahaya Toner Printer, enabling real-time monitoring and management of product inventory, sales, and transaction data. The dashboard displays key metrics such as inventory levels, recent sales, and customer distribution by region. The backend was built using Python with Flask and MongoDB, along with a RESTful API to ensure secure and efficient communication with the database. For the frontend, Bootstrap was used to create a responsive, user-friendly interface. Additionally, the application includes dynamic reports with adjustable filters, empowering administrators to track performance metrics and trends over customizable time periods, thereby supporting data-driven decision-making.",
  },
];

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/CV ATS .pdf";
  link.download = "CV ATS .pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const education = {
  degree: "Bachelor's degree",
  field: "Information Engginer",
  GPA: "GPA 3.52",
  school: "Universitas Indraprasta PGRI",
  location: "Jakarta, Indonesia 🇮🇩",
  period: "2021 - 2025",
  logo: "🎓",
};

export default function About() {
  return (
    <div className="space-y-12 pt-8 lg:pt-0">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">About</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          A brief introduction to who I am.
        </p>
      </section>

      {/* Introduction */}
      <section className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Final-year informatics engineering student at indraprasta pgri
            university (gpa 3.52) with strong expertise in full-stack web
            development. Experienced as a frontend developer at pt bank negara
            indonesia (bni) and as a freelance full stack developer,
            contributing to large-scale digital projects and custom
            applications. Skilled in laravel (php), react.js, next.js,
            tailwindcss, bootstrap, and mysql, with additional experience in
            python and java for decision support systems and predictive
            analytics. Passionate about building scalable, data-driven, and
            user-friendly applications, with proven strengths in ui/ux design,
            api integration, system optimization, and decision support systems
            (dss).
          </p>
          <div className="pt-4">
            <p className="text-primary font-script text-2xl">Muhammad Irfan</p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Career</h2>
        </div>
        <p className="text-muted-foreground">My professional journey.</p>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:bg-card/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                      {exp.logo}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {exp.duration}
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {exp.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <details className="group">
                      <summary className="flex items-center gap-2 text-sm text-primary cursor-pointer list-none">
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                        Show responsibilities
                      </summary>
                      <div className="mt-3 pl-6">
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {exp.description}
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
        </div>
        <p className="text-muted-foreground">My educational journey.</p>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                  {education.logo}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {education.school}
                </h3>
                <p className="text-primary font-medium">
                  {education.degree} • {education.field} {education.GPA}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {education.location}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Download Resume */}
      <section className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          Interested in my background?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download my resume or portfolio to learn more about my experience and
          projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={handleDownloadCV}>
            <Download className="w-4 h-4 mr-2" />
            Download CV SAYA
          </Button>
        </div>
      </section>
    </div>
  );
}
