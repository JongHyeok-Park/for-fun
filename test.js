const hj = document.getElementById('hj');
const initialTop = '-50%';

window.addEventListener('scroll', (e) => {
  let val = window.scrollY.toString()
  hj.style.transform = `translate(-50%, calc(${initialTop} + ${val + 'px'}))`;
})