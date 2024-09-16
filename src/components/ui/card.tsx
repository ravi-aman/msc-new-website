'use client'

import * as React from "react";
import Image, { StaticImageData } from "next/image"; // Importing Image and StaticImageData from Next.js
import { cn } from "@/lib/utils";

// Define the Card type to accept src as either string or StaticImageData
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | StaticImageData; // Image source can be a URL (string) or StaticImageData
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, src, ...props }, ref) => {
    // Conditionally render the image based on the src type
    const renderImage = () => {
      if (typeof src === "string") {
        return <img src={src} alt="Card Image" className="w-full h-auto rounded-lg" />;
      } else if (src && typeof src === "object") {
        return (
          <Image
            src={src}
            alt="Card Image"
            className="w-full h-auto rounded-lg"
            placeholder="blur" // Optional: for better UX with Next.js image optimization
          />
        );
      }
      return null; // If no image is provided
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        {renderImage()} {/* Render the image if src is provided */}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
