export const greet = (fullName, random, arr) => {
  let place = '';
  const to_greet = arr.map((item, index) => {
    if (index === random) {
      return (place += item);
    }
  });
  if (place) {
  }

  return 'Hallo' + fullName + 'selamat datang di' + place;
};
