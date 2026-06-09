//IMAGE GALLERY
//Handles previous, next navigation and dot indicators.
//Called manually after slides are injected into the DOM.

function initGallery() {
  const track = document.getElementById('gallery-track');
  if (!track) return;

  const slides = track.querySelectorAll('.gallery-slide');
  if (slides.length === 0) return;

  const dotsContainer = document.getElementById('gallery-dots');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');

  let currentIndex = 0;

  //Clear any existing dots before rebuilding.
  dotsContainer.innerHTML = '';

  //Build dot indicators dynamically based on number of slides.
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('gallery-dot');
    dot.setAttribute('aria-label', `Go to image ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  //Move to a specific slide.
  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    //Update active dot.
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  //Previous button: loops back to last slide from first.
  prevBtn.addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  });

  //Next button: loops back to first slide from last.
  nextBtn.addEventListener('click', () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  });
  //Touch support for mobile swipe.
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    //Swipe left: go to next slide.
    if (diff > 50) {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      goToSlide(newIndex);
    }

    //Swipe right: go to previous slide.
    if (diff < -50) {
      const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      goToSlide(newIndex);
    }
  });
}