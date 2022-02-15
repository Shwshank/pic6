const pupupBox = document.getElementById('pupup_box');

const uploadBtn = document.getElementById('upload');

const popupClose = document.getElementById('popup_close');

const preview = document.getElementById('preview');

const nameInp = document.getElementById('name');

const idInp = document.getElementById('id');

const imgPrew = document.getElementById('img_view');

const newTab = document.getElementById('new_tab');

const save = document.getElementById('save');

const popupContent = document.getElementById('popup_content');

const container = document.getElementById('container');

//set visiblity to none, as buttons will be visible after preview is clicked
imgPrew.style.display = 'none';
newTab.style.display = 'none';
save.style.display = 'none';

// upload btn click function
uploadBtn.addEventListener('click', function () {
  pupupBox.style.display = 'flex';
});

// close modal popup
popupClose.addEventListener('click', function () {
  pupupBox.style.display = 'none';
  imgPrew.style.display = 'none';
  newTab.style.display = 'none';
  save.style.display = 'none';
  nameInp.value = '';
  idInp.value = '';
  popupContent.style.height = '350px';
});

// name inp validation
nameInp.addEventListener('focusout', function () {
  if (nameInp.value == '') {
    nameInp.classList.remove('success');
    nameInp.classList.add('error');
  } else {
    nameInp.classList.remove('error');
    nameInp.classList.add('success');
  }
});

// id input validation
idInp.addEventListener('focusout', function () {
  if (!idInp.value) {
    idInp.classList.remove('success');
    idInp.classList.add('error');
  } else {
    idInp.classList.remove('error');
    idInp.classList.add('success');
  }
});

// preview button click function
preview.addEventListener('click', function () {
  if (nameInp.value && idInp.value) {
    // show input elements
    imgPrew.style.display = 'block';
    newTab.style.display = 'block';
    save.style.display = 'block';
    popupContent.style.height = '650px';
    imgPrew.innerHTML = '';

    var elem = document.createElement('img');
    elem.setAttribute(
      'src',
      'https://picsum.photos/id/' + idInp.value + '/250/250'
    );
    imgPrew.appendChild(elem);

    newTab.addEventListener('click', function () {
      window
        .open('https://picsum.photos/id/' + idInp.value + '/500/500', '_blank')
        .focus();
    });
  }
});

save.addEventListener('click', function () {

  // add new image to existing list of images
  // create a card element, append image to card
  // append card to container
  var newCard = document.createElement('div');
  newCard.className = "card";
  var elem = document.createElement('img');
  elem.setAttribute(
    'src',
    'https://picsum.photos/id/' + idInp.value + '/250/250'
  );
  newCard.appendChild(elem);
  container.prepend(newCard);

  pupupBox.style.display = 'none';
  imgPrew.style.display = 'none';
  newTab.style.display = 'none';
  save.style.display = 'none';
  nameInp.value = '';
  idInp.value = '';
  popupContent.style.height = '350px';
  pupupBox.style.display = 'none';
});
