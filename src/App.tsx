import ScrollAnimation from "scroll-animation-framer-motion";
import "./App.css";

function App() {
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="fadeIn" delay={1}>
          <h1 className="text-4xl font-bold">Im fade in</h1>
        </ScrollAnimation>
      </div>
      {/* Im flipX */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="flipX" once={false} delay={0.5}>
          <h1 className="text-4xl font-bold">Im flipX</h1>
        </ScrollAnimation>
      </div>

      {/* Im flipY */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="flipY" delay={0.5}>
          <h1 className="text-4xl font-bold">Im flipY</h1>
        </ScrollAnimation>
      </div>

      {/* Im flip down */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="down" delay={0.5}>
          <h1 className="text-4xl font-bold">Im flip down</h1>
        </ScrollAnimation>
      </div>

      {/* Im flip up */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="up" delay={0.5}>
          <h1 className="text-4xl font-bold">Im flip up</h1>
        </ScrollAnimation>
      </div>

      {/* Im left */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="left" delay={0.5}>
          <h1 className="text-4xl font-bold">Im flip left</h1>
        </ScrollAnimation>
      </div>

      {/* Im right */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="right" delay={0.5}>
          <h1 className="text-4xl font-bold">Im flip right</h1>
        </ScrollAnimation>
      </div>

      {/* Im popIn */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="popIn" delay={0.5}>
          <h1 className="text-4xl font-bold">Im popIn</h1>
        </ScrollAnimation>
      </div>

      {/* Im ZoomIn */}
      <div className="h-screen w-full flex justify-center items-center">
        <ScrollAnimation direction="zoomIn" delay={0.5}>
          <h1 className="text-4xl font-bold">Im ZoomIn</h1>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default App;
