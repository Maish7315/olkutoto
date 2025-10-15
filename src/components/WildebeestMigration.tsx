import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import videoSrc from "@/assets/wildebeest-migration.mp4";
import posterImg from "@/assets/hero-kenya.jpg";

const WildebeestMigration = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Great <span className="gradient-text">Wildebeest Migration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness one of nature's most spectacular events - over 1.5 million wildebeest, zebras, and gazelles migrate across the Serengeti-Mara ecosystem in search of fresh grazing.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover"
              poster={posterImg}
              controls={false}
              muted={isMuted}
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button
                onClick={togglePlay}
                className="bg-black/50 hover:bg-black/70 text-white border-0"
                size="lg"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>

              <Button
                onClick={toggleMute}
                className="bg-black/50 hover:bg-black/70 text-white border-0"
                size="lg"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </Button>
            </div>

            {/* Migration Dates Overlay */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
              <div className="text-sm font-semibold">Migration Season</div>
              <div className="text-lg font-bold">July - October</div>
            </div>
          </div>
        </div>

        {/* Migration Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1.5M+</div>
            <div className="text-muted-foreground">Wildebeest Migrate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1,000+</div>
            <div className="text-muted-foreground">Km Journey</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4</div>
            <div className="text-muted-foreground">Months Duration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">25,000</div>
            <div className="text-muted-foreground">Zebras Join</div>
          </div>
        </div>

        {/* Migration Calendar */}
        <div className="bg-gradient-surface rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Migration Calendar 2025
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-primary/10 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">July</div>
              <div className="text-sm text-muted-foreground">Calving Season</div>
              <div className="text-xs mt-2">Wildebeest give birth to 500,000 calves</div>
            </div>

            <div className="text-center p-4 bg-accent/10 rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2">August</div>
              <div className="text-sm text-muted-foreground">Migration Begins</div>
              <div className="text-xs mt-2">Herds start moving north towards Kenya</div>
            </div>

            <div className="text-center p-4 bg-adventure/10 rounded-xl">
              <div className="text-2xl font-bold text-adventure mb-2">September</div>
              <div className="text-sm text-muted-foreground">Peak Migration</div>
              <div className="text-xs mt-2">River crossings and predator action</div>
            </div>

            <div className="text-center p-4 bg-sunset/10 rounded-xl">
              <div className="text-2xl font-bold text-sunset mb-2">October</div>
              <div className="text-sm text-muted-foreground">Mara River Crossings</div>
              <div className="text-xs mt-2">Most dramatic wildlife spectacles</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">
              The Great Wildebeest Migration occurs annually from July to October, with the most spectacular river crossings happening in September and October.
            </p>
            <Button
              onClick={() => window.open(`https://wa.me/0711939160?text=Hi! I'm interested in booking a safari to see the Great Wildebeest Migration. Can you help me plan the perfect trip?`, '_blank')}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary transition-bounce hover:scale-105"
            >
              Book Migration Safari
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WildebeestMigration;