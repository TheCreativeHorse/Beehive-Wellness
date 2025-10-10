import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SpecialOfferPopup from '@/components/SpecialOfferPopup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Team />
        <Testimonials />
      </main>
      <Footer />
      <SpecialOfferPopup />
    </div>
  );
}
