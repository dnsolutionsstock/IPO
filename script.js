window.onload = function() {
    const fixedElement = document.querySelector('.fixed-appear');
    if (fixedElement) {
        // 페이지 로드 후 .show-button 클래스 추가하여 애니메이션 시작
        setTimeout(function() {
            fixedElement.classList.add('show-button');
        }, 100); // 0.1초 후에 클래스 추가 (애니메이션 시작)
    } else {
        console.error('.fixed-appear 요소를 찾을 수 없습니다.');
    }
};



document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.vertical-slider-wrapper');
    const slides = document.querySelectorAll('.vertical-slider-item');
    const prevBtn = document.querySelector('.vertical-slider-btn.prev');
    const nextBtn = document.querySelector('.vertical-slider-btn.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      // 첫 슬라이드에서는 왼쪽 버튼 비활성화
      prevBtn.disabled = currentIndex === 0;
      // 마지막 슬라이드에서는 오른쪽 버튼 비활성화
      nextBtn.disabled = currentIndex === totalSlides - 1;
    }
    
    // 초기 상태 업데이트
    updateSlider();
    
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    nextBtn.addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  });



  const newsContainer = document.querySelector(".news-container");

let isDown = false;
let startX;
let scrollLeft;

newsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  newsContainer.classList.add("active");
  startX = e.pageX - newsContainer.offsetLeft;
  scrollLeft = newsContainer.scrollLeft;
});

newsContainer.addEventListener("mouseleave", () => {
  isDown = false;
  newsContainer.classList.remove("active");
});

newsContainer.addEventListener("mouseup", () => {
  isDown = false;
  newsContainer.classList.remove("active");
});

newsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - newsContainer.offsetLeft;
  const walk = (x - startX) * 2; // 스크롤 속도 조절
  newsContainer.scrollLeft = scrollLeft - walk;
});

