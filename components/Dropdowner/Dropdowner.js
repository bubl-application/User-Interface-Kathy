// Code for dropdowner functionality
const triggers = document.querySelectorAll('.awesomeness > li');
const background = document.querySelector('.dropdownerBg');
const nav = document.querySelector('.holder');

console.log(triggers);
function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdowner = this.querySelector('.dropdowner');
  const dropdownerCoords = dropdowner.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownerCoords.height,
    width: dropdownerCoords.width,
    top: dropdownerCoords.top - navCoords.top,
    left: dropdownerCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
