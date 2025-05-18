/* Context file used to set the Image or PDF file
 * It is used on APP.js and passed to the Fullsize */
import { createContext, useContext,  useState } from "react";

export const ImageContext = createContext();
export const SetImageContext = createContext();
export const useImageContext = () => useContext(ImageContext);
export const useSetImageContext = () => useContext(SetImageContext);

export const ImageProvider = ({ children }) => {
    const [image, setImage] = useState("");

    return (
        <ImageContext.Provider value={image}>
          <SetImageContext.Provider value={setImage}>
            {children}
          </SetImageContext.Provider>
        </ImageContext.Provider>
    )
}