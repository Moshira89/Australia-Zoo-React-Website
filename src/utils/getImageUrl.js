const imageMap = {
  'echidna.jpg': new URL('../assets/images/Echidna.jpg', import.meta.url).href,
  'TasmanianDevil.jpg': new URL('../assets/images/TasmanianDevil.jpg', import.meta.url).href,
  'quokka.jpg': new URL('../assets/images/quokka.jpg', import.meta.url).href,
  'frill-neckedLizard.jpg': new URL('../assets/images/frill-neckedLizard.jpg', import.meta.url).href,
  'hawksbill-turtle.jpg': new URL('../assets/images/Hawksbill-Turtle.jpg', import.meta.url).href,
  'Perentie.jpg': new URL('../assets/images/Perentie.jpg', import.meta.url).href,
  'cassowary.jpg': new URL('../assets/images/Cassowary.jpg', import.meta.url).href,
  'kookaburra.jpg': new URL('../assets/images/Kookaburra.jpg', import.meta.url).href,
  'Yellow-tailedCockatoo.jpg': new URL('../assets/images/Yellow-tailedCockatoo.jpg', import.meta.url).href, // FIXED
  'placeholder.jpg': new URL('../assets/images/placeholder.jpg', import.meta.url).href
};

export function getImageUrl(imageName) {
  if (imageMap[imageName]) {
    return imageMap[imageName];
  }
  console.error(`Image "${imageName}" not found, using placeholder`);
  return imageMap['placeholder.jpg'];
}
