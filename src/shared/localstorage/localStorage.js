export const getItem = (key) => {
  localStorage.getItem(key);
};
export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};
export const clearItem = () => {
  localStorage.clear();
};
