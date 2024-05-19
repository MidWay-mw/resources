var button = document.createElement('button');

var img = document.createElement('img');
img.src = 'https://resources.midway.ovh/iconfinder/return-arrow.png';
img.alt = 'Go to Midway.ovh';
img.style.width = '40px';
img.style.height = '40px';
img.style.filter = 'invert(100%)'

button.appendChild(img);

button.style.position = 'fixed';
button.style.top = '15px';
button.style.right = '50px';
button.style.backgroundColor = 'transparent';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.style.zIndex = '11000';

button.addEventListener('click', function() {
    window.location.href = 'https://midway.ovh';
});

document.body.appendChild(button);
