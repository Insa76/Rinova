import { motion } from "motion/react";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  type: string;
}

export function PropertyCard({
  title,
  location,
  price,
  image,
  beds,
  baths,
  area,
  type,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
  bg-white/20
  rounded-2xl
  overflow-hidden
  shadow-lg
  hover:shadow-blue-300
  transition-all
  duration-300
  h-full
  flex
  flex-col
"
    >
      <div className="relative overflow-hidden group">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
          {type}
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
            isLiked ? "bg-red-500 text-white" : "bg-white/90 text-gray-600"
          }`}
        >
          <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
        </motion.button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg text-gray-900 font-medium mb-2">{title}</h3>
            <div className="flex items-center text-gray-900 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>

        <div className="text-2xl font-semibold text-[#7EC8E3] mb-3">{price}</div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-900">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{beds}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-900">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{baths}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-900">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
