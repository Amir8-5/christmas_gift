import { Snowfall } from "./Snowfall";
import { BackgroundDecorations } from "./decorations/BackgroundDecorations";

export const WelcomePage = () => (
  <div className="snap-start h-screen relative flex items-center justify-center bg-gradient-to-b from-red-950 to-red-900">
    <Snowfall />
    <BackgroundDecorations />
    <div className="relative z-10 text-center mt-[-10vh]">
      <h1 className="font-christmas text-8xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Merry Christmas
      </h1>
      <div className="w-[300px] h-auto mx-auto mb-8 relative">
        <img
          src="./assets/Christmas-tree.png"
          alt="Decore"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
      <p className="text-2xl text-white font-christmas">
        Scroll down to begin ↓
      </p>
    </div>
  </div>
);
