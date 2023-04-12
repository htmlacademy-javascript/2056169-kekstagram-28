import {getRandomArrayElement, getRandomInteger} from './util.js';

import {
  PHOTOS_COUNT,
  MIN_COMMENTS_PER_PHOTO,
  MAX_COMMENTS_PER_PHOTO,
  MAX_COMMENTS_COUNT,
  AVATAR_COUNT
} from './const.js';

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


const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const getComments = () => {
  const postCommentsCount = getRandomInteger(MIN_COMMENTS_PER_PHOTO, MAX_COMMENTS_PER_PHOTO);
  const comments = [];
  for (let i = 0; i < postCommentsCount; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhotoData = () => ({
  id: generatePhotoId(),
  url: `photos/${createRandomUrlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getComments()
});

const createSimilarPhotoData = () => Array.from({length: PHOTOS_COUNT}, createPhotoData);

export {createSimilarPhotoData};
