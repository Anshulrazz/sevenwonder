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
                    <div key={image.src} className="overflow-hidden relative rounded-lg shadow-md">
                        <img
                            src={`https://api.sevenwonder.in${image}`}
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
                    className="flex fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/90"
                >
                    <div className="flex relative items-center px-4 w-full max-w-6xl">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 z-10 p-4 text-2xl text-white bg-gray-900 rounded-full shadow-lg transition-transform transform -translate-y-1/2 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Previous image"
                        >
                            ◀
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 z-10 p-4 text-2xl text-white bg-gray-900 rounded-full shadow-lg transition-transform transform -translate-y-1/2 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Next image"
                        >
                            ▶
                        </button>

                        {/* Image Container */}
                        <div className="flex relative justify-center items-center w-full h-full">
                            <img
                                src={`https://api.sevenwonder.in${selectedImage}`}
                                alt={selectedImage.altText || "Selected content"}
                                className="object-contain max-h-[90vh] rounded-lg"
                                loading="eager"
                                draggable="false"
                            />

                            {/* Controls Container */}
                            <div className="flex absolute top-4 right-4 gap-3">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 text-2xl text-white opacity-75 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
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