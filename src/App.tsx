"use client";

import ScrollAnimation from "scroll-animation-framer-motion";

const ExampleCard = ({
  title,
  direction,
  gradient,
}: {
  title: string;
  direction:
    | "left"
    | "right"
    | "up"
    | "down"
    | "popIn"
    | "fadeIn"
    | "zoomIn"
    | "flipX"
    | "flipY";
  gradient: string;
}) => {
  return (
    <ScrollAnimation direction={direction}>
      <div className="bg-white/5 backdrop-blur rounded-xl p-8 shadow-lg">
        <div className={`h-40 rounded-lg bg-gradient-to-br ${gradient}`} />
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">
          direction="<span className="text-indigo-400">{direction}</span>"
        </p>
      </div>
    </ScrollAnimation>
  );
};

export default function App() {
  return (
    <main className="bg-[#0B0F1A] text-white overflow-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <ScrollAnimation direction="up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Scroll Animations
            <br />
            <span className="text-indigo-400">Made Simple</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fadeIn">
          <p className="mt-6 max-w-xl text-gray-400 text-lg">
            A lightweight Framer Motion utility for clean, reusable
            scroll-triggered animations in React & Next.js.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="zoomIn">
          <div className="mt-10 flex gap-4">
            <a
              href="https://www.npmjs.com/package/scroll-animation-framer-motion"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
            >
              View on NPM
            </a>
            <a
              href="#examples"
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              See Examples
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* ALL EXAMPLES */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-32">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold text-center mb-16">
            Animation Examples
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10">
          <ExampleCard
            title="Slide Left"
            direction="left"
            gradient="from-indigo-500/30 to-purple-500/30"
          />
          <ExampleCard
            title="Slide Right"
            direction="right"
            gradient="from-cyan-500/30 to-blue-500/30"
          />
          <ExampleCard
            title="Slide Up"
            direction="up"
            gradient="from-emerald-500/30 to-green-500/30"
          />
          <ExampleCard
            title="Slide Down"
            direction="down"
            gradient="from-pink-500/30 to-rose-500/30"
          />
          <ExampleCard
            title="Fade In"
            direction="fadeIn"
            gradient="from-gray-500/30 to-gray-300/30"
          />
          <ExampleCard
            title="Pop In"
            direction="popIn"
            gradient="from-yellow-500/30 to-orange-500/30"
          />
          <ExampleCard
            title="Zoom In"
            direction="zoomIn"
            gradient="from-indigo-400/30 to-violet-500/30"
          />
          <ExampleCard
            title="Flip X"
            direction="flipX"
            gradient="from-teal-500/30 to-cyan-500/30"
          />
          <ExampleCard
            title="Flip Y"
            direction="flipY"
            gradient="from-fuchsia-500/30 to-purple-500/30"
          />
        </div>
      </section>

      {/* CODE EXAMPLE */}
      <section className="bg-black/40 py-32">
        <ScrollAnimation direction="up">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Example Usage
            </h3>

            <pre className="bg-black/60 rounded-xl p-6 text-sm text-gray-300 overflow-x-auto">
              {`import ScrollAnimation from "scroll-animation-framer-motion";

<ScrollAnimation direction="fadeIn">
  <div>Your content here</div>
</ScrollAnimation>`}
            </pre>
          </div>
        </ScrollAnimation>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-gray-500 text-sm">
       ❤️ using scroll-animation-framer-motion by
        <br />
        Forhad Khan
      </footer>
    </main>
  );
}
