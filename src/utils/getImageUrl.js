const imageMap = {
  'echidna.jpg': '/images/Echidna.jpg',
  'tasmanian-devil.jpg': '/images/TasmanianDevil.jpg',
  'quokka.jpg': '/images/quokka.jpg',
  'frill-neckedlizard.jpg': '/images/frill-neckedLizard.jpg',
  'hawksbill-turtle.jpg': '/images/Hawksbill-Turtle.jpg',
  'perentie.jpg': '/images/Perentie.jpg',
  'cassowary.jpg': '/images/Cassowary.jpg',
  'kookaburra.jpg': '/images/Kookaburra.jpg',
  'yellow-tailed-black-cockatoo.jpg': '/images/Yellow-tailed-Black-Cockatoo.jpg',
};

export function getImageUrl(animalImageName) {
  if (!animalImageName) return '';
  const key = animalImageName.toLowerCase();
  return imageMap[key] || '';
}
