import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Send,
  ExternalLink,
  MessageCircle,
  User,
  AtSign,
} from "lucide-react";

const socialLinks = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for inquiries or collaborations.",
    action: "Go to Gmail",
    icon: "📧",
    color: "bg-red-500/10 border-red-500/20",
    buttonColor: "bg-red-500 hover:bg-red-600",
    href: "mailto:suhermanirfan23@gmail.com",
  },
  {
    title: "Follow My Journey",
    description: "Follow my creative journey.",
    action: "Go to Instagram",
    icon: "📸",
    color:
      "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20",
    buttonColor:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    href: "https://www.instagram.com/irf.annss?utm_source=qr&igsh=MXdsdmMxa2U5d284Yg==",
  },
  {
    title: "Let's Connect",
    description: "Connect with me professionally.",
    action: "Go to LinkedIn",
    icon: "💼",
    color: "bg-blue-500/10 border-blue-500/20",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    href: "https://www.linkedin.com/in/muhammad-irfan-suherman-7b7871194/",
  },
  {
    title: "Join the Fun",
    description: "Watch engaging and fun content.",
    action: "Go to Tiktok",
    icon: "🎵",
    color: "bg-gray-800/10 border-gray-600/20",
    buttonColor: "bg-gray-800 hover:bg-gray-900",
    href: "https://www.tiktok.com/@tulisancode",
  },
  {
    title: "Explore the Code",
    description: "Explore my open-source work.",
    action: "Go to Github",
    icon: "👨‍💻",
    color: "bg-gray-900/10 border-gray-700/20",
    buttonColor: "bg-gray-900 hover:bg-black",
    href: "https://github.com/irfan-gitbash",
  },
];

export default function Contact() {
  return (
    <div className="space-y-12 pt-8 lg:pt-0">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Contact</h1>
        </div>
        <p className="text-muted-foreground text-lg">Let's get in touch</p>
      </section>

      {/* Social Media Links */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Find me on social media
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <Card
              key={index}
              className={`${link.color} hover:bg-opacity-20 transition-all group cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{link.icon}</div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>

                  <Button
                    className={`${link.buttonColor} text-white border-0 w-full group-hover:scale-105 transition-transform`}
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.action}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Or send me a message
        </h2>

        <Card className="max-w-2xl">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <AtSign className="w-4 h-4" />
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Additional Info */}
      <section className="bg-card border border-border rounded-lg p-8">
        <div className="text-center space-y-4">
          <div className="text-4xl">🚀</div>
          <h3 className="text-2xl font-bold text-foreground">
            Ready to collaborate?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Whether you're a startup
            looking for a technical co-founder, a company needing a developer,
            or someone who just wants to chat about technology, feel free to
            reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Available for Projects
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-500/10 text-blue-500 border-blue-500/20"
            >
              Open to Remote Work
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-500/10 text-green-500 border-green-500/20"
            >
              Quick Response Time
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
