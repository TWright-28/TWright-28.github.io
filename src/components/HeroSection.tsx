import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full">
        <p className="text-gray-400 text-base mb-4">hey, I&apos;m</p>
        <h1 className="font-display text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
          {siteConfig.name}.
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
          {siteConfig.bio}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
