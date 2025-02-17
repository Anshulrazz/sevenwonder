'use client'
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export default function App() {
    return (
        <>
            <Header />
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                <Card isFooterBlurred className="border-none" radius="lg">
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src="https://heroui.com/images/hero-card.jpeg"
                        width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button
                            className="text-white text-tiny bg-black/20"
                            color="default"
                            radius="lg"
                            size="sm"
                            variant="flat"
                        >
                            Notify me
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    );
}

