const images = [
  { small: 'small1.jpg', original: 'large1.jpg', description: 'Description 1' },
  { small: 'small2.jpg', original: 'large2.jpg', description: 'Description 2' },
  // Додайте інші дані за необхідності
];

// Динамічне створення елементів галереї
const gallery = document.querySelector('.gallery');

images.forEach((image) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.small;
  img.alt = image.description;

  link.appendChild(img);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});