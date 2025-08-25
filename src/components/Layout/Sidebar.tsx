import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
            <AvatarImage src="/public/images/irfan.jpg" />
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
