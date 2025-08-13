import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'skills',
      title: 'Skills',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8'>
        <a
          href='#'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className='w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg'>
              N
            </div>
            <p className='text-white text-[18px] font-bold cursor-pointer hidden sm:block'>
               <span className='text-accent'>Portfolio</span>
            </p>
          </motion.div>
        </a>

        <div className='flex items-center gap-6'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-accent' : 'text-secondary'
                } hover:text-accent text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className='text-white hover:text-accent transition-colors'
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <button
              className='w-[28px] h-[28px] object-contain text-white cursor-pointer z-20'
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <X /> : <Menu />}
            </button>

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-secondary'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;