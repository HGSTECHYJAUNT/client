import Navbar from "@/container/landing/navbar";
import Hero from "@/container/landing/hero";
import FreeCourses from "@/container/landing/freecourses";
import CareerMaster from "@/container/landing/careermaster";
import SkillsTransform from "@/container/landing/skillstransform";
import GetVerified from "@/container/landing/getverified";
import ReadyFuture from "@/container/landing/readyfuture";
import TrendingCourses from "@/container/landing/trendingcourses";
import ReportSection from "@/container/landing/reportsection";
import FAQ from "@/container/landing/faq";
import StartForFree from "@/container/landing/startforfree";
import Footer from "@/container/landing/footer";


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