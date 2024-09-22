import * as React from "react";
import Image, { StaticImageData } from "next/image"; // Import Image and StaticImageData from Next.js
import { cn } from "@/lib/utils";

// Define the Card type to accept src as either string or StaticImageData
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  card: {
    category?: string;
    title?: string;
    content?: React.ReactNode;
    src: string | StaticImageData; // Image source can be a URL (string) or StaticImageData
  };
  index: number;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, card, ...props }, ref) => {
    // Destructure the card object
    const { category, title, content, src } = card;

    // Conditionally render the image based on the src type
    const renderImage = () => {
      if (typeof src === "string") {
        return <img src={src} alt={title} className="w-full h-auto rounded-lg" />;
      } else if (src && typeof src === "object") {
        return (
          <Image
            src={src}
            alt={title || "Card Image"}
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
        <div className="p-4">
          {category && <p className="text-sm text-muted-foreground">{category}</p>}
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          {content && <div>{content}</div>}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
