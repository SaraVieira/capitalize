const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const Capitalize = (string: string) => {
  const words = string.split(' ');
  const capitalizedWords = words.map(word => capitalizeFirstLetter(word))
  return capitalizedWords.join(' ');
};


export default Capitalize;
