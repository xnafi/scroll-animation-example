import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero title
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="font-sans text-gray-900">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-indigo-600 to-indigo-400 text-white">
        <motion.h1
          style={{ y: heroY }}
          className="text-6xl md:text-7xl font-extrabold text-center"
        >
          Beautiful Scroll Animations
        </motion.h1>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold">Powered by Framer Motion</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-xl text-gray-600">
              Smooth, elegant scroll-based animations using a simple reusable
              component — inspired by
              <span className="font-semibold">
                {" "}
                scroll-animation-framer-motion
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 0.15}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-indigo-600 text-white text-center">
        <ScrollReveal>
          <p className="text-xl font-medium">
            Built with TypeScript • React • Framer Motion
          </p>
        </ScrollReveal>
      </footer>
    </main>
  );
}

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Scroll Reveal",
    description: "Elements animate beautifully as they enter the viewport.",
  },
  {
    title: "Parallax Motion",
    description: "Scroll-linked animations that feel smooth and natural.",
  },
  {
    title: "Reusable API",
    description: "Drop-in wrapper components for fast development.",
  },
];
