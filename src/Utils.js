const getRandomTenPic = pictures => {
  let randomNumber = Math.ceil(Math.random(0, 4990)*4990),
    tenRandomPic = [];
  for (let i = randomNumber; i < randomNumber + 10; i++) {
    tenRandomPic.push(pictures[i]);
  }
  return tenRandomPic;
};

export {getRandomTenPic};