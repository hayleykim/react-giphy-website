import { GiphyFetch } from '@giphy/js-fetch-api';
import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const GifContext = createContext();

const GifProvider = ({children}) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favourites, setFavourites] = useState([]);

    const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

    return (
        <GifContext.Provider 
            value={{giphyFetch, gifs, setGifs, filter, setFilter, favourites}}>{children}
        </GifContext.Provider>
    );
};

export const GifState = () => {
    return useContext(GifContext);
}

export default GifProvider;