import Button from "./Button";
import heroImg from "../img/hero.png";

function Hero() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content - Left Side */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Learn something @ your own pace
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Start today and turn professional - This is your best chance at
            being competitive in the Global Job Market.
          </p>
          <div className="flex gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="flex-1">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
            <img
              src={heroImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
