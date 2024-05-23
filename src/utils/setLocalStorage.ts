const setLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("storage"));
};

export default setLocalStorage;
