'use client';

import Header from '../../components/Header';
import MethodHero from './MethodHero';
import BenefitsSection from './BenefitsSection';
import ProcessSection from './ProcessSection';
import FarmGallery from './FarmGallery';
import Footer from '../../components/Footer';

export default function OurMethodPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MethodHero />
      <BenefitsSection />
      <ProcessSection />
      <FarmGallery />
      <Footer />
    </div>
  );
}