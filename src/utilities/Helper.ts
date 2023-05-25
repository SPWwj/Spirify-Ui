import { useState, useEffect } from "react";
import loadingImage from "../assets/svgs/image-loading.svg";
import errorImage from "../assets/svgs/image-error.svg";
type ImageStyle = {
    opacity?: number;
    filter?: string;
    transition: string;
};

export const useImageLoader = (image: string) => {
    const [src, setSrc] = useState(loadingImage);  // Start with loading image
    const [style, setStyle] = useState<ImageStyle>({ opacity: 0, transition: "opacity 2s ease-in-out" }); // Initialize with loading style

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setSrc(image);  // Set image source to the loaded image
            setStyle({ opacity: 1, transition: "opacity 0.5s ease-in-out" }); // On load, update to loaded style
        };
        img.onerror = () => {
            setSrc(errorImage); // On error, show error image
            setStyle({ filter: "grayscale(100%)", transition: "filter 0.5s ease-in-out" }); // On error, update to error style
        };
    }, [image]);

    return { src, style };
};

