// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Define the shape of the context data
// interface LikedProductsContextType {
//     likedProducts: string[];
//     setLikedProducts: React.Dispatch<React.SetStateAction<string[]>>;
// }

// // Create the context with a default value of undefined
// const LikedProductsContext = createContext<LikedProductsContextType | undefined>(undefined);

// // Hook to use the LikedProductsContext
// export const useLikedProducts = () => {
//     const context = useContext(LikedProductsContext);
//     if (!context) {
//         throw new Error("useLikedProducts must be used within a LikedProductsProvider");
//     }
//     return context;
// };

// // Provider component
// export const LikedProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [likedProducts, setLikedProducts] = useState<string[]>([]);

//     return (
//         <LikedProductsContext.Provider value={{ likedProducts, setLikedProducts }}>
//             {children}
//         </LikedProductsContext.Provider>
//     );
// };
