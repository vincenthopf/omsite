import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Method from '@/components/Method';
import Pillars from '@/components/Pillars';
import Programs from '@/components/Programs';
import Systems from '@/components/Systems';
import Community from '@/components/Community';
import Results from '@/components/Results';
import Apply from '@/components/Apply';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <Header />
      <Hero />
      <Method />
      <Pillars />
      <Programs />
      <Systems />
      <Community />
      <Results />
      <Apply />
      <Footer />
      <BackToTop />
    </div>
  );
}
