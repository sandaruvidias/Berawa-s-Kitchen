import { useState } from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { galleryImages } from '../data/gallery';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20 pb-20">
      <Container>
        <SectionTitle
          title="Gallery"
          subtitle="Take a visual journey through our restaurant and dishes"
          centered
        />

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <GalleryLightbox
            images={galleryImages}
            initialIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </Container>
    </div>
  );
};

