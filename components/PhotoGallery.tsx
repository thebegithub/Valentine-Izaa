import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery: React.FC = () => {
  // CONFIGURATION: Real photos from 'public/photos'
  const allPhotos = [
    { src: "/photos/WIN_20251024_09_54_53_Pro.jpg", caption: "Kenangan 1" },
    { src: "/photos/WIN_20251217_14_42_41_Pro.jpg", caption: "Kenangan 2" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.25.jpeg", caption: "Kenangan 3" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.26.jpeg", caption: "Kenangan 4" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.27.jpeg", caption: "Kenangan 5" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.40.jpeg", caption: "Kenangan 6" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.42.jpeg", caption: "Kenangan 7" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.43 (1).jpeg", caption: "Kenangan 8" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.43.jpeg", caption: "Kenangan 9" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.44 (1).jpeg", caption: "Kenangan 10" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.44 (2).jpeg", caption: "Kenangan 11" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.44 (3).jpeg", caption: "Kenangan 12" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.44.jpeg", caption: "Kenangan 13" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.45 (1).jpeg", caption: "Kenangan 14" },
    { src: "/photos/WhatsApp Image 2026-02-15 at 17.24.45.jpeg", caption: "Kenangan 15" },
  ];

  // How many photos to show at once (Grid size)
  const GRID_SIZE = 6;

  // State to keep track of which photos are currently visible in the grid slots
  const [visibleIndices, setVisibleIndices] = useState<number[]>(() => {
    // Initialize with first N photos, repeating if user has fewer than grid size
    return Array.from({ length: GRID_SIZE }, (_, i) => i % (allPhotos.length || 1));
  });

  useEffect(() => {
    // Only start the swapping effect if we have more photos than slots
    if (allPhotos.length <= GRID_SIZE) return;

    const interval = setInterval(() => {
      // 1. Pick a random slot in the grid to update
      const slotToReplace = Math.floor(Math.random() * GRID_SIZE);

      // 2. Pick a random photo from collection that is NOT currently visible
      let newPhotoIndex = Math.floor(Math.random() * allPhotos.length);
      let attempts = 0;
      while (visibleIndices.includes(newPhotoIndex) && attempts < 10) {
        newPhotoIndex = Math.floor(Math.random() * allPhotos.length);
        attempts++;
      }

      // 3. Update the state for that specific slot
      setVisibleIndices(prev => {
        const newIndices = [...prev];
        newIndices[slotToReplace] = newPhotoIndex;
        return newIndices;
      });

    }, 2500); // Change one photo every 2.5 seconds

    return () => clearInterval(interval);
  }, [allPhotos.length, visibleIndices]);

  if (allPhotos.length === 0) {
    return (
      <div className="text-center p-8 bg-white/50 rounded-xl">
        <p className="text-cinna-blue font-cute">Belum ada foto. Masukin ke folder <code>public/photos</code> ya!</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* The Magic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((photoIndex, slotIndex) => {
            const photo = allPhotos[photoIndex] || allPhotos[0]; // Fallback
            return (
              <motion.div
                layout
                key={`${slotIndex}-${photo.src}-${photoIndex}`} // Unique key ensures animation happens on change
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white group hover:z-10 hover:shadow-xl transition-all"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/400/400?random=${photoIndex}`;
                  }}
                />

                {/* Hover Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinna-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-cute text-sm md:text-lg font-bold truncate w-full shadow-sm text-center">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoGallery;