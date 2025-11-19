import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import FreeCourses from "@/components/landing/freecourses";
import CareerMaster from "@/components/landing/careermaster";
import SkillsTransform from "@/components/landing/skillstransform";
import GetVerified from "@/components/landing/getverified";
import ReadyFuture from "@/components/landing/readyfuture";
import TrendingCourses from "@/components/landing/trendingcourses";
import ReportSection from "@/components/landing/reportsection";
import FAQ from "@/components/landing/faq";
import StartForFree from "@/components/landing/startforfree";
import Footer from "@/components/landing/footer";


export default function Home () {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <FreeCourses />
      <CareerMaster />
      <SkillsTransform />
      <GetVerified />
      <ReadyFuture />
      <TrendingCourses />
      <ReportSection />
      <FAQ />
      <StartForFree />
      <Footer />
    </div>
  );
};