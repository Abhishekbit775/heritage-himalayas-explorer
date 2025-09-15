import { MonasteryCard } from "./MonasteryCard";
import rumtekImage from "@/assets/rumtek-monastery.jpg";
import encheyImage from "@/assets/enchey-monastery.jpg";
import pemayangtseImage from "@/assets/pemayangtse-monastery.jpg";

const monasteries = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "East Sikkim",
    century: "16th Century",
    image: rumtekImage,
    description: "The largest monastery in Sikkim, home to the Karmapa and center of the Karma Kagyu lineage. Features stunning architecture and precious Buddhist artifacts.",
    toursCount: 8,
    rating: 4.9,
    featured: true,
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "Gangtok",
    century: "19th Century",
    image: encheyImage,
    description: "Perched on a hilltop above Gangtok, this serene monastery offers panoramic views and houses precious manuscripts and artifacts.",
    toursCount: 5,
    rating: 4.7,
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    century: "17th Century",
    image: pemayangtseImage,
    description: "One of Sikkim's oldest and most important monasteries, featuring intricate wood carvings and magnificent wall paintings.",
    toursCount: 6,
    rating: 4.8,
  },
];

export const FeaturedMonasteries = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-monastery-brown">
            Featured Monasteries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the most significant monastic centers of Sikkim, each with unique history and spiritual significance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries.map((monastery) => (
            <MonasteryCard
              key={monastery.id}
              {...monastery}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-monastery-gold font-medium hover:text-monastery-brown transition-monastery">
            View All Monasteries →
          </button>
        </div>
      </div>
    </section>
  );
};