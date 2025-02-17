import React, { useState } from "react";

interface Image {
    src: string;
    altText?: string;
    filename?: string;
}

const ImageGallery: React.FC<{ images: Image[] }> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const openModal = (image: Image, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        if (currentIndex === null || !images.length) return;
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handlePrev = () => {
        if (currentIndex === null || !images.length) return;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <div>
            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                    <div key={image.src} className="relative overflow-hidden rounded-lg shadow-md">
                        <img
                            src={`http://localhost:4000${image}`}
                            alt={image.altText || `Gallery image ${index + 1}`}
                            className="object-cover w-full h-48 transition-transform duration-300 cursor-pointer hover:scale-105"
                            onClick={() => openModal(image, index)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                >
                    <div className="relative flex items-center w-full max-w-6xl px-4">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute z-10 p-4 text-2xl text-white transition-transform transform -translate-y-1/2 bg-gray-900 rounded-full shadow-lg left-4 top-1/2 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Previous image"
                        >
                            ◀
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute z-10 p-4 text-2xl text-white transition-transform transform -translate-y-1/2 bg-gray-900 rounded-full shadow-lg right-4 top-1/2 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Next image"
                        >
                            ▶
                        </button>

                        {/* Image Container */}
                        <div className="relative flex items-center justify-center w-full h-full">
                            <img
                                src={`http://localhost:4000${selectedImage}`}
                                alt={selectedImage.altText || "Selected content"}
                                className="object-contain max-h-[90vh] rounded-lg"
                                loading="eager"
                                draggable="false"
                            />

                            {/* Controls Container */}
                            <div className="absolute flex gap-3 top-4 right-4">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 text-2xl text-white transition-opacity opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                                    aria-label="Close modal"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;