'use client'
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img4 from './img8.jpg'
import img5 from './img4.jpg'
import img6 from './img9.jpg'
import img7 from './img12.jpg'

// Reusable ImageCard Component
import { StaticImageData } from 'next/image';

interface ImageCardProps {
    src: StaticImageData;
    alt: string;
}

const ImageCard = ({ src, alt }: ImageCardProps) => (
    <div className="relative">
        <Image
            src={src}
            alt={alt}
            className="rounded-lg shadow-lg"
            width={640}
            height={480}
        />
    </div>
);

export default function About() {
    const awards = [
        { src: img1, alt: 'Award 1' },
        { src: img2, alt: 'Award 2' },
        { src: img4, alt: 'Award 3' },
        { src: img5, alt: 'Award 3' },
        { src: img6, alt: 'Award 3' },
        { src: img7, alt: 'Award 3' },
    ];

    return (
        <>
            <Header />
            <main className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <section className="text-center">
                    <h1 className="mb-6 text-4xl font-bold">Our Awards & Recognition</h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600">
                        We’re proud of our achievements and the recognition we’ve received for our commitment to excellence in real estate.
                    </p>
                </section>

                <section className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    {awards.map((award, index) => (
                        <ImageCard key={index} src={award.src} alt={award.alt} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
