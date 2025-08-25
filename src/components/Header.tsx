import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactUspopUp from "../pages/ContactUs/ContactUsPopUp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50  border-b border-border h-fit bg-background/80 backdrop-blur-md">
        {/*  h-screen  */}
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                B
              </span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              BuildU
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#app-preview"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              App Preview
            </a>
            <a
              href="#team"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Team
            </a>
            <NavLink to="">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setOpen(true)}
              >
                Contact Us
              </Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
              <nav className="flex flex-col space-y-4 p-4">
                <a
                  href="#about"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#app-preview"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  App Preview
                </a>
                <a
                  href="#team"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Team
                </a>
                <NavLink to="">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    Contact Us
                  </Button>
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </header>
      <ContactUspopUp
        open={open}
        onClose={() => setOpen(false)}
      ></ContactUspopUp>
    </>
  );
};

export default Header;
