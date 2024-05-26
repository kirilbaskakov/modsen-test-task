const getLocalStorage = <T>(key: string, initialValue: T): T => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialValue;
};

export default getLocalStorage;
