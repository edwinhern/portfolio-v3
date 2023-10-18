import { BlogSection } from '@/components/PortfolioOverview/Blog';
import { ProjectsSection } from '@/components/PortfolioOverview/Project';
import { LocationSection } from '@/components/PortfolioOverview/Location';
import {
  AboutMeSection,
  MobileAboutMeSection,
} from '@/components/PortfolioOverview/AboutMe';

export const PortfolioOverview = () => {
  return (
    <>
      <div className='space-y-4'>
        {/* About Me */}
        <MobileAboutMeSection />
        <AboutMeSection />

        {/* Blog */}
        <BlogSection />

        {/* Contact and Location */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-7'>
          <LocationSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};
