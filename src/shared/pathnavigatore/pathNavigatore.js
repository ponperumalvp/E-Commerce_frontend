export const pathNavigatore = (path) => {
  const { origin } = window.location;
  window.location.href = `${origin}/${path}`;
};
