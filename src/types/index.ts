export type IconName = 'letter-text' | 'search' | 'banknote-arrow-up';

export interface MenuItem {
  name: string;
  url: string;
}

export interface Menus {
  header: MenuItem[];
  footer: MenuItem[];
}

export interface FooterProps {
  menuItems: MenuItem[];
}

export interface HeaderProps {
  menuItems: MenuItem[];
}

export interface CTA {
  name: string;
  url: string;
}

export interface HeroProps {
  title: string;
  description: string;
  image: string;
  ctas: CTA[];
}

export interface SolutionProps {
  title: string;
  description: string;
  icon: IconName;
  ctas: CTA;
}

export interface SolutionsSectionProps {
  solutions: SolutionProps[];
}


export interface HomeData {
  menus: Menus;
  hero: HeroProps;
  solutions: SolutionProps[];
}

