import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <PersonalSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PublicationsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Tanner Wright
      </footer>
    </>
  );
}
