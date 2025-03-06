"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

export function ProjectCard({ title, description, url }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Extract domain for preview image and display with error handling
  let domain = "";
  let previewUrl = "";

  try {
    // Validate URL format
    if (url && url.startsWith("http")) {
      const urlObj = new URL(url);
      domain = urlObj.hostname;
      previewUrl = `https://image.thum.io/get/width/400/crop/600/viewportWidth/1200/png/${url}`;
    } else {
      // Handle invalid URLs
      domain = "Invalid URL";
      previewUrl = "/placeholder.svg";
    }
  } catch (error) {
    // Fallback for any URL parsing errors
    console.error("Error parsing URL:", url, error);
    domain = "Invalid URL";
    previewUrl = "/placeholder.svg";
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block transition-all duration-200 !no-underline hover:!no-underline group py-2 ${
        isHovered ? "bg-gray-50" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 group px-2">
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-900 truncate ">
              {title}
            </h3>
          </div>
          <span className="text-stone-400 text-xs group-hover:underline">
            {" "}
            {url}
          </span>
          <p className="text-stone-600 text-sm">{description}</p>
        </div>

        <div className="flex-shrink-0 w-24 h-16 relative overflow-hidden rounded border border-gray-200">
          {!imageError ? (
            <>
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt={`Preview of ${title}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-pulse w-full h-full bg-gray-200"></div>
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-xs text-center p-1">
              {domain}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
