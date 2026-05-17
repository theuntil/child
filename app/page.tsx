import HeroSection from "../components/home/Hero";
import ProjectGoals from "../components/home/ProjectGoals";

import Acti from "../components/home/ActivitiesSection";
import Basin from "../components/Mediasection";
import Reasons from "../components/home/ReasonsSection";
import Gallery from "../components/home/Gallery";
import Logo from "../components/Loop";
import World from "../components/world";
import Ankara from "../components/ankara";
import newsData from "@/data/news.json";

export default function HomePage() {
  return (
    <div
      className="
       min-h-screen
bg-white
dark:bg-black
transition-colors duration-300

      "
    >
      <HeroSection />
       <Logo /> <Ankara /><World />
      <ProjectGoals />
         <Basin news={newsData} />
         
      <Gallery />
      <Acti />
       <Reasons />
    </div>
  );
}
