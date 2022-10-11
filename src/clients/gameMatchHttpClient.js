export const getMatches = async () => {
  const response = await fetch("http://localhost:3001/series");
  return await response.json();
};
