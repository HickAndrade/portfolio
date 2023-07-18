export interface NavLink {
  name: string;
  url: string;
}
export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

  export interface SrConfig {
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
  } 

   interface Config {
    email: string,
    navLinks: NavLink[],
    socialMedia: SocialMediaLink[],
    srConfig: SrConfig;
}

const config: Config = {
    email: 'henriqandrade@outlook.com',
    navLinks: [
        { name: 'About', url: '#about' },
        { name: 'Works', url: '#works' },
        { name: 'Contact', url: 'mailto:henriqandrade@outlook.com' },
    ],
    socialMedia: [
        { name: 'Github', url: 'https://github.com/HickAndrade',icon: 'IconGitHub' },
        { name: 'Linkedin', url: 'urllinkedin',icon: 'IconLinkedin' }
    ],
    srConfig: (delay = 200, viewFactor = 0.08) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}






export default config;
