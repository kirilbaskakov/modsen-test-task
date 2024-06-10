import { useState } from 'react';
import getLocalStorage from '#utils/getLocalStorage/getLocalStorage';

const useFavorites = () => {
  const getFavorites = () => {
    return getLocalStorage<number[]>('favorites', []);
  };

  const [favorites, setFavorites] = useState<number[]>(getFavorites());

  window.addEventListener('storage', () => {
    setFavorites(getFavorites());
  });

  return favorites;
};

export default useFavorites;
