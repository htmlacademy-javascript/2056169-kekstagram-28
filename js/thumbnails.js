import {createSimilarPhotoData} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = createSimilarPhotoData();
const photoFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  photoFragment.append(picture);
});

const drawPhotos = () => {
  picturesContainer.append(photoFragment);
};

export {drawPhotos};
