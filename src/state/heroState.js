// Estado efímero en memoria (vive mientras la SPA esté abierta)

let heroAlreadyPlayed = false

export const getHeroPlayed = () => heroAlreadyPlayed

export const setHeroPlayed = () => {
  heroAlreadyPlayed = true
}
