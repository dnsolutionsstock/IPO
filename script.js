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



window.onload = function() {
  // 로컬 스토리지에서 팝업이 숨겨졌는지 확인
  if (!localStorage.getItem("popupClosed")) {
      document.getElementById("popup").classList.add("show");
  }

  // "오늘 하루 보지 않기" 체크박스가 체크되었는지 확인
  document.getElementById("dont-show-again").addEventListener("change", function() {
      if (this.checked) {
          localStorage.setItem("popupClosed", "true");
      } else {
          localStorage.removeItem("popupClosed");
      }
  });

  // "닫기" 버튼 클릭 시 팝업 숨기기
  document.getElementById("close-popup").addEventListener("click", function() {
      document.getElementById("popup").classList.remove("show");
  });
}

