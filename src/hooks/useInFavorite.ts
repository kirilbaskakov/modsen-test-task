import { useEffect, useState } from 'react';
import getLocalStorage from '#utils/getLocalStorage/getLocalStorage';
import setLocalStorage from '#utils/setLocalStorage/setLocalStorage';

const useInFavorite = (id: number): [boolean, () => void] => {
  const checkFavorites = () => {
    const favorites = getLocalStorage<number[]>('favorites', []);
    return favorites.includes(id);
  };

  const switchInFavorite = () => {
    const favorites = getLocalStorage<number[]>('favorites', []);
    if (!inFavorite) {
      setLocalStorage('favorites', [...favorites, id]);
    } else {
      setLocalStorage(
        'favorites',
        favorites.filter((i) => i !== id)
      );
    }
  };

  const [inFavorite, setInFavorite] = useState(false);

  window.addEventListener('storage', () => {
    const newValue = checkFavorites();
    if (newValue !== inFavorite) {
      setInFavorite(newValue);
    }
  });

  useEffect(() => {
    setInFavorite(checkFavorites());
  }, [id]);

  return [inFavorite, switchInFavorite];
};

export default useInFavorite;
