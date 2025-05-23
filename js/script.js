/* Smooth-scroll to in-page anchors (top-bar height already reserved) */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
