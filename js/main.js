const PHOTOS_COUNT = 25;
const MAX_COMMENTS_COUNT = 1000;
const AVATAR_COUNT = 6;

const DESCRIPTIONS = [
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Воскресенье — еще один способ сказать: «Какой чудесный день!»',
  'В простоте есть удивительная красота.',
  'Я устал сегодня. Пожалуйста, дайте мне новый день.',
  'Котики, ну куда же без них?',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Все только начинает становиться действительно хорошим.'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Света',
  'Александр',
  'Иван',
  'Дмитрий',
  'Александра',
  'Анна',
  'Илья',
  'Михаил',
  'Лиза',
  'Вова'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(1, MAX_COMMENTS_COUNT);
const createRandomUrlNumber = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const createPhotoData = () => ({
  id: generatePhotoId(),
  url: `photos/${createRandomUrlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: [
    {
      id: generateCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    },
    {
      id: generateCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    }
  ]
});

// когда сохраняю результат в переменную линтер ругается на неиспользуемую переменную.
// так что оставлю так
// const similarPhotoData =
Array.from({length: PHOTOS_COUNT}, createPhotoData);
