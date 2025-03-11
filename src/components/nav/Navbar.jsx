import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import MenuDescription from "./MenuDescription";
import SideInfo from "./SideInfo";
import BackgroundEffect from "./BackgroundEffect";
import Logo from "./Logo";

const navItems = [
  { name: "HOME", description: "Back to start" },
  { name: "ABOUT", description: "Get to know me" },
  { name: "WORK", description: "View my projects" },
  { name: "CONTACT", description: "Let's talk" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        toggleOpen={() => setIsOpen(!isOpen)}
        toggleClose={() => setIsOpen(isOpen)}
      />
      <Logo />

      <AnimatePresence>
        {isOpen && (
          <>
            <BackgroundEffect />

            <div className="fixed inset-0 z-50 flex">
              <div className="w-full md:w-2/3 h-screen flex items-center justify-center p-8">
                <nav className="flex flex-col gap-8">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="relative">
                      <MenuItem
                        item={item}
                        index={index}
                        isHovered={hoveredIndex === index}
                        onHover={setHoveredIndex}
                        onClick={() => setIsOpen(false)}
                      />
                      <MenuDescription
                        item={item}
                        isHovered={hoveredIndex === index}
                      />
                    </div>
                  ))}
                </nav>
              </div>

              <SideInfo />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
