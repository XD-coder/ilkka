import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from 'react';
import { imageConfig } from "@/lib/imageUtils";

const ProductMarque = () => {
  const productImages = imageConfig.productMarque.images;

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Marquee pauseOnHover className="[--duration:20s]">
          {productImages.map((src, index) => (
            <div key={index} className="mx-4 flex justify-center items-center">
              <Image 
                src={src} 
                alt={`Medical Product ${index + 1}`} 
                width={200} 
                height={200} 
                className="rounded-lg"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R6i+JCyf//Z"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default ProductMarque;