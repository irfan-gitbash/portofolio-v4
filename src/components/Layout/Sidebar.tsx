import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Home,
  User,
  Trophy,
  FolderOpen,
  BarChart3,
  MessageCircle,
  Mail,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
  Palette,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Achievements", href: "/achievements", icon: Trophy },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Contact", href: "/contact", icon: Mail },
];

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      name: "Light",
      value: "light" as const,
      icon: Sun,
      description: "Light mode",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Dark",
      value: "dark" as const,
      icon: Moon,
      description: "Dark mode",
      gradient: "from-slate-900 to-slate-700",
    },
    {
      name: "System",
      value: "system" as const,
      icon: Monitor,
      description: "Follow system",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[1];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full justify-start gap-3 h-10 px-3 transition-all duration-300 hover:scale-105 ${
          isOpen
            ? "bg-primary/10 text-primary border border-primary/20"
            : "hover:bg-accent"
        }`}
      >
        <div className="relative">
          <CurrentIcon className="w-4 h-4 transition-transform duration-300" />
          {actualTheme === "light" && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          )}
          {actualTheme === "dark" && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          )}
        </div>
        <span className="text-sm font-medium">Theme</span>
        <div className="ml-auto flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.gradient}`} />
          <div className="w-1 h-4 bg-muted-foreground/30 rounded-full" />
        </div>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute top-full left-0 right-0 mt-2 p-2 z-50 border border-border/50 shadow-xl backdrop-blur-sm bg-card/95">
            <div className="space-y-1">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.value;
                return (
                  <Button
                    key={themeOption.value}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setTheme(themeOption.value);
                      setIsOpen(false);
                    }}
                    className={`w-full justify-start gap-3 h-10 transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-accent hover:scale-[1.02]"
                    }`}
                  >
                    <div className="relative">
                      <Icon className="w-4 h-4" />
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-foreground rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium">{themeOption.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {themeOption.description}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${themeOption.gradient} opacity-70`} />
                  </Button>
                );
              })}
            </div>
            <div className="mt-2 pt-2 border-t border-border/50">
              <div className="flex items-center gap-2 px-3 py-2">
                <Palette className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Current: {actualTheme === "light" ? "☀️ Light" : "🌙 Dark"}
                </span>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
            <AvatarImage src="/images/irfan.jpg" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">
                Muhammad irfan Suherman
              </h2>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">@irf.anns</p>
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="secondary" className="text-xs">
                <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                Onsite
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Based in Jakarta, Indonesia 🇮🇩
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
              {isActive && (
                <div className="ml-auto w-1 h-4 bg-primary-foreground rounded-full opacity-60"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-border">
        <ThemeToggle />
      </div>

      {/* Smart Talk Button */}
      <div className="p-4 border-t border-border">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Sparkles className="w-4 h-4 mr-2" />
          Smart Talk
        </Button>
      </div>

      {/* Copyright */}
      <div className="p-4 text-center">
        <p className="text-xs text-muted-foreground">COPYRIGHT © 2025</p>
        <p className="text-xs text-muted-foreground">
          Muhammad Irfan. All rights reserved.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 bg-card"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-card border-r border-border">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-80 bg-card border-r border-border z-50">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
