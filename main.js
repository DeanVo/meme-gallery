var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
var imageUrls = [
  'https://preview.redd.it/r1mxfqfi6kl51.jpg?width=768&auto=webp&s=9116688bd89e9e9e654a7b7d96dd92ee1fbcf54e',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://preview.redd.it/z9a3lm2lklk51.png?width=518&auto=webp&s=d99544c33f23e4d6e47529bbe3360cc74545010d',
  'https://preview.redd.it/adx6evqot5l51.jpg?width=500&auto=webp&s=2ef1b883a6a4d070d68607a167b35f73273fef5d'
];
var gallery = document.querySelector('main');

addImageButton.addEventListener('click', function() {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }

  imageUrlInput.value = ''
});

function updateGallery() {
  gallery.innerHTML = ""
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.classList.add('gallery-image');
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
    addImageButton.addEventListener('click', updateGallery)
  }
}

updateGallery()
