import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from 'react';

const productImages = [
  '/ProductMarque/1.png',
  '/ProductMarque/2.png',
  '/ProductMarque/3.png',
  '/ProductMarque/4.png',
  '/ProductMarque/5.png',
];

const ProductMarque = () => {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Marquee pauseOnHover className="[--duration:20s]">
          {productImages.map((src, index) => (
            <div key={index} className="mx-4 flex justify-center items-center">
              <Image 
                src={src} 
                alt={`Medical product ${index + 1} from Ilkka Healthcare`} 
                width={200} 
                height={200} 
                className="rounded-lg"
                loading="lazy"
                sizes="200px"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default ProductMarque;