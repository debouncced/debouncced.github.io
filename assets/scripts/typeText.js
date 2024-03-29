let description = document.getElementById('description');
let idx = 0;
const descriptionText = 'Свою первую строчку кода написал ещё 3 года назад, когда узнал что мой приятель умеет создавать сайты и захотелось самому) Тогда и начался мой путь frontend разработчика на react.';

function typeWriter() {
  if (idx < descriptionText.length) {
    description.innerHTML += descriptionText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 30);
  }
}

let options = {
    rootMargin: '0px',
    threshold: 0
  };
target = document.querySelector('.about__code');

observerDescription = new IntersectionObserver(entries => {
var entry = entries[0];
if (entry.isIntersecting) {
    typeWriter();
}
}, options);

observerDescription.observe(target);