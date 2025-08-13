import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className='w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg'>
                
              </div>
              <p className='text-white text-[18px] font-bold'>
              Portfolio  <span className='text-accent'></span>
              </p>
            </div>
            <p className="text-secondary text-[16px] max-w-xs">
              Fullstack Developer & BCA Student creating beautiful, interactive experiences for the web.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-white text-[18px] font-medium mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-secondary hover:text-accent transition-colors">About</a></li>
                <li><a href="#skills" className="text-secondary hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-secondary hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-secondary hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-[18px] font-medium mb-4">Social</h3>
              <div className="flex gap-4">
                <a href="https://github.com/noorali78"  className="text-secondary hover:text-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/noor-ali-7aa206274" className="text-secondary hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/NoorAli31198016" className="text-secondary hover:text-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-secondary text-[14px]">
            © {new Date().getFullYear()}  Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;