import DestinationCard from './DestinationCard';
import maasaiMaraImage from "@/assets/maasai-mara.jpg";
import dianiBeachImage from "@/assets/diani-beach.jpg";
import tsavoLionsImage from "@/assets/tsavo-lions.jpg";
import amboseliImage from "@/assets/amboseli-elephants.jpg";
import nakuruImage from "@/assets/lake-nakuru-flamingos.jpg";
import samburuImage from "@/assets/samburu-wildlife.jpg";

const DestinationsShowcase = () => {
  const destinations = [
    {
      title: "Maasai Mara National Park",
      description: "Witness the spectacular Great Wildebeest Migration and encounter Africa's Big Five in their natural habitat. This world-renowned reserve offers unparalleled wildlife viewing opportunities.",
      image: maasaiMaraImage,
      category: "Wildlife Safari",
      rating: 4.9,
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons", "Game Drives"]
    },
    {
      title: "Diani Beach Paradise",
      description: "Pristine white sand beaches meet turquoise Indian Ocean waters. Perfect for relaxation, water sports, and exploring vibrant coral reefs.",
      image: dianiBeachImage,
      category: "Coastal Paradise",
      rating: 4.8,
      highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Dhow Sailing", "Beach Resorts"]
    },
    {
      title: "Tsavo National Parks",
      description: "Kenya's largest protected area, famous for red elephants, diverse wildlife, and dramatic landscapes. Experience authentic African wilderness.",
      image: tsavoLionsImage,
      category: "Wilderness Adventure",
      rating: 4.7,
      highlights: ["Red Elephants", "Lion Prides", "Baobab Trees", "Rock Formations", "Bird Watching"]
    }
  ];

  const additionalDestinations = [
    {
      title: "Amboseli National Park",
      description: "Iconic views of Mount Kilimanjaro provide the perfect backdrop for incredible elephant encounters and diverse wildlife photography.",
      image: amboseliImage,
      category: "Mountain Safari",
      rating: 4.8,
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography", "Maasai Villages", "Birdlife"]
    },
    {
      title: "Lake Nakuru National Park",
      description: "Famous for millions of flamingos creating a pink spectacle, plus rhino sanctuary and diverse wildlife in a compact area.",
      image: nakuruImage,
      category: "Bird Sanctuary",
      rating: 4.6,
      highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Waterfalls", "Baboon Cliffs", "Birdwatching"]
    },
    {
      title: "Samburu National Reserve",
      description: "Unique wildlife species not found elsewhere in Kenya, including Grevy's zebra, reticulated giraffe, and gerenuk antelope.",
      image: samburuImage,
      category: "Unique Wildlife",
      rating: 4.7,
      highlights: ["Unique Species", "Ewaso Nyiro River", "Cultural Visits", "Desert Landscapes", "Endemic Animals"]
    },
    {
      title: "Lamu Island Heritage",
      description: "UNESCO World Heritage site showcasing Swahili culture, ancient architecture, and pristine beaches in a car-free paradise.",
      image: "/src/assets/lamu.jpg",
      category: "Cultural Heritage",
      rating: 4.5,
      highlights: ["UNESCO Site", "Swahili Culture", "Dhow Rides", "Historic Architecture", "Car-Free Island"]
    },
    {
      title: "Hell's Gate National Park",
      description: "Walk or cycle among wildlife in this unique park featuring dramatic gorges, geothermal features, and rock climbing.",
      image: "/src/assets/hell's gate/Hell's Gate National Park lies south of Lake….jpeg",
      category: "Adventure Park",
      rating: 4.4,
      highlights: ["Walking Safaris", "Rock Climbing", "Geothermal Springs", "Cycling", "Gorge Hiking"]
    },
    {
      title: "Fort Jesus Museum",
      description: "Historic Portuguese fort in Mombasa showcasing centuries of coastal history, architecture, and maritime heritage.",
      image: "/src/assets/mombasa_ kenya_ fort jesus museum-C__h5-AU.jpeg",
      category: "Historical Site",
      rating: 4.3,
      highlights: ["Portuguese Architecture", "Maritime History", "Museum Collections", "Coastal Views", "Cultural Tours"]
    }
  ];

  const allDestinations = [...destinations, ...additionalDestinations];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Explore</span> Kenya's Wonders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the legendary Maasai Mara to pristine coastal paradises, discover Kenya's most spectacular destinations with our AI-powered multilingual booking experience.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              className={`animate-fade-in-delayed ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            />
          ))}
        </div>

        {/* More Destinations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            More Amazing Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDestinations.map((destination) => (
              <DestinationCard
                key={destination.title}
                {...destination}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI travel assistant can help you discover hidden gems and create a personalized itinerary that matches your interests perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                🤖 Ask AI Assistant
              </button>
              <button className="px-6 py-3 bg-adventure hover:bg-adventure-glow text-adventure-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                ✨ Custom Trip Planner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;