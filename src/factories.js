let gameCount = 0;

export function createGame(attributes) {
  gameCount += 1;
  
  return {
    id: 1505,
    image_url: "https://apollo2.dl.playstation.net/cdn/EP2002/CUSA...",
    name: "Rocket League®",
    uuid: `EP2002-CUSA01433_00-ROCKETLEAGUEEU0${gameCount}`,
    platforms: ["PS4™"],
    released_at: "2015-07-07 00:00:00",
    price: 1399,
    created_at: "2017-05-06 12:42:55",
    updated_at: "2017-05-06 12:42:55",
    vr_enabled: false,
    score: 4.7,
    score_count: 185092,
    ...attributes
  }
}
