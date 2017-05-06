import 'whatwg-fetch';

export function loadGames() {
  return fetch('http://localhost:3001');
}
