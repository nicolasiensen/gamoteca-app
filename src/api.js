import 'whatwg-fetch';

export const loadGames = async () => {
  const response = await fetch('http://localhost:3001');
  const json = await response.json();
  return json;
}
