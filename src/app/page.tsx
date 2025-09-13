import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SolutionsSection from '@/components/SolutionsSection';
import { MenuItem, HomeData, HeroProps, SolutionProps,} from '@/types/index';
import HeroSection from '@/components/Hero';
import { fetchHomeData } from '@/services/api';


export default async function HomePage() {
  let menuItemsHeader: MenuItem[] = [];
  let menuItemsFooter: MenuItem[] = [];
  let heroData: HeroProps | null = null;
  let solutionsData: SolutionProps[] = [];
    
  try {
    const data = await fetchHomeData();
    menuItemsHeader = data.menus.header;
    menuItemsFooter = data.menus.header;
    heroData = data.hero;
    solutionsData = data.solutions;
    
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
  
  return (
    <>
    <Header menuItems={menuItemsHeader} />
    {heroData && (
      <HeroSection
      title={heroData.title}
      description={heroData.description}
      image={heroData.image}
      ctas={heroData.ctas}
      />
    )}
    {solutionsData && <SolutionsSection solutions={solutionsData} />}
    
    <Footer menuItems={menuItemsFooter}></Footer>
    </>
  );
}