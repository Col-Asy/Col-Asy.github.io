'use client'
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExpandTileProps{
    className?: string;
    
    name: string;
    body: string;
    img: string;
    site: string;
    github: string;
    contribs: string[];
    onClose: any
      
}

const ExpandTile: React.FC<ExpandTileProps> = ({
  className,
  name,
  body,
  img,
  site,
  github,
  contribs,
  onClose
}) => {
    return (
        <div className={cn(
          "grid inset-0 place-items-center z-[100]", className)}>
          <div className="fixed md:top-10 space-y-4 w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden p-5">
            <div className="absolute cursor-pointer top-5 right-5 flex lg:hidden items-center justify-center bg-white rounded-full h-6 w-6" onClick={() => onClose(null)}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
	              <path fill="black" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"></path>
              </svg>
            </div>
            <img src={img} alt={name} className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-middle" />
            <h2 className="font-bold text-neutral-700 dark:text-neutral-200">{name}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{body}</p>
            <div className="flex space-x-2">
              {site!==null && (
                <a
                href={site}
                className="text-blue-500 hover:underline"
              >
                Visit Site
              </a>
              )}
              <a
                href={github}
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
            <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-400">Contributors:</h3>
            <ul className="flex space-x-2">
              {contribs.map((contrib, index) => (
                <a href={`https://github.com/${contrib}`} target="_blank">
                  <li key={index}>
                    <img
                    src={`https://github.com/${contrib}.png`}
                    alt={`Contributor ${index + 1}`}
                    className="w-8 h-8 rounded-full"
                  />
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
    );
    
}

export default ExpandTile