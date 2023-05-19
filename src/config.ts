export interface NavLink {
  name: string;
  url: string;
}
export interface SocialMediaLink {
  name: string;
  url: string;
}

 /* export interface SrConfig {
    (delay?: number, viewFactor?: number): {
      origin: string;
      distance: string;
      duration: number;
      delay: number;
      rotate: { x: number; y: number; z: number };
      opacity: number;
      scale: number;
      easing: string;
      mobile: boolean;
      reset: boolean;
      useDelay: string;
      viewFactor: number;
      viewOffset: { top: number; right: number; bottom: number; left: number };
    };
  } */

   interface Config {
    email: string,
    navLinks: NavLink[],
    socialMedia: SocialMediaLink[],
    /*srConfig: SrConfig */
}

const config: Config = {
    email: 'henriqandrade@outlook.com',
    navLinks: [
        { name: 'About', url: '#about' },
        { name: 'Skills', url: '#skills' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' },
    ],
    socialMedia: [
        { name: 'Github', url: 'urlgit' },
        { name: 'Linkedin', url: 'urllinkedin' }
    ],
}

export default config;
