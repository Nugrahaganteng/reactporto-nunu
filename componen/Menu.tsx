import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun,} from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import { useTheme } from './ThemeProvider'; 

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <div className="flex justify-end p-5 px-30 pt-10">
          <button 
            className="font-bold block ml-auto border border-[#333] w-[132px] py-2 rounded-full text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-[#1a1a1a] cursor-pointer"
            onClick={toggleMenu}
          >
            MENU
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex flex-col bg-violet-200 dark:bg-violet-900 text-gray-900 dark:text-white"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center p-6">

              <button 
                className="p-3 rounded-full bg-violet-300 dark:bg-violet-800 hover:bg-violet-400 dark:hover:bg-violet-700 transition-colors"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <FaX size={24} />
              </button>
            </div>

            <motion.nav 
              className="flex flex-col items-start justify-center flex-grow p-10 md:p-16 text-4xl md:text-5xl font-bold space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {['Home', 'My Work', 'See certificate', 'My Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative overflow-hidden group cursor-pointer"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-1 bg-violet-600 dark:bg-violet-300 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;