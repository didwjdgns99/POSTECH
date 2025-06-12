


$(document).ready(function(){
       new fullpage('#full-page', {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: false,
  onLeave: function () { 
    // 페이지가 바뀔 때마다 AOS를 다시 초기화
    AOS.refresh(); // AOS 요소 위치를 다시 계산
  },
  fixedElements: '.header', // ✅ 여기에 고정할 요소 선택자 입력
  scrollOverflow: true,
  showActiveTooltip: false, // ✅ 마우스 올려도 툴팁 안 뜨게 하기
  afterLoad: function(origin, destination, direction){
    // destination.index는 0부터 시작하므로 1번째 섹션은 0입니다.
    if(destination.index === 0){
      const video = document.querySelector('video'); // video 태그 선택
      if(video){
        video.play();
        setTimeout(() => {
        fullpage_api.reBuild(); // 높이 재계산
      }, 200); // 여유를 줘야 비디오가 제대로 렌더링됨
      }
      
    }

    if(destination.index === 1){
      $('.pos').addClass('active')
      $('.uni').addClass('active')
      $('.aos_box').addClass('active');
    }

    if(destination.index === 2){
      $('.login_cart a').addClass('active')
      $('.bod').addClass('active')
      $('.sec3_head_txt').addClass('active')
      $('.sec3_righttxt').addClass('active')
      $('.menu ul li a').css({
        'color': '#000'
      });
      $('.sns_icon img').css({
        'background-color': '#000',
        'border-radius':'50%',
        'border':'1.5px solid'
      });
    }else{
      $('.menu ul li a').css({
        'color': '#fff'
      });
      $('.sns_icon img').css({
        'background-color': 'transparent'
      });
      $('.login_cart a').removeClass('active')
      $('.bod').removeClass('active')
    }
    
}


});

  // ----탑버튼---
 $('.top_btn').click(function() {
  fullpage_api.moveTo(1); 
});



    //-----햄버거 로테이트
  $('.quick_btn').click(function(){
    $(this).toggleClass('active');
    $('.quick_menu').toggleClass('active');
  });

  //--------sns active
  $('.sns_icon img').mouseenter(function(){
    $(this).addClass('active')
  });
  $('.sns_icon img').mouseleave(function(){
    $(this).removeClass('active')
  });



// window.addEventListener('DOMContentLoaded', () => {
//     const section = document.getElementById('scroll-section');
//     const bg = document.getElementById('parallax-background');
  
//     function handleScroll() {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const pos = document.querySelector('.pos');
//       const uni = document.querySelector('.uni');
//       // 현재 스크롤이 해당 섹션 안에 있을 때만
//       if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight - windowHeight) {
//         const scrollRatio = (scrollY - sectionTop) / (sectionHeight - windowHeight); // 0~1
//         const posPosX = scrollRatio * 65; // 0% → 50% 까지 이동
//          const uniPosX = scrollRatio * -65; // 0% → 50% 까지 이동
  
//         // 💡 핵심: 전체 backgroundPosition 속성을 지정해야 확실하게 반영됨
//         pos.style.transform = `translateX(${posPosX}%)`; // ✅ 이게 맞는 사용법!
//         uni.style.transform = `translateX(${uniPosX}%)`; // ✅ 이게 맞는 사용법!
//       }
//     }
  
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // 초기값도 적용
//   });
$('.next_btn').click(function(){
  $('.aos_section').toggleClass('active');
  $('.next_btn i').toggleClass('active');
});


$('.b01').mouseenter(function(){
  $(this).children('.b_top').addClass('active')
  $(this).children('.b_bot').addClass('active')
  $(this).children('.black_bg').addClass('active')
  $(this).children('.body_txt').addClass('active')
});

$('.b01').mouseleave(function(){
  $(this).children('.b_top').removeClass('active')
  $(this).children('.b_bot').removeClass('active')
  $(this).children('.black_bg').removeClass('active')
  $(this).children('.body_txt').removeClass('active')
});

$('.b02').mouseenter(function(){
  $(this).children('.b_top').addClass('active')
  $(this).children('.b_bot').addClass('active')
  $(this).children('.black_bg').addClass('active')
  $(this).children('.body_txt').addClass('active')
});

$('.b02').mouseleave(function(){
  $(this).children('.b_top').removeClass('active')
  $(this).children('.b_bot').removeClass('active')
  $(this).children('.black_bg').removeClass('active')
  $(this).children('.body_txt').removeClass('active')
});

$('.b03').mouseenter(function(){
  $(this).children('.b_top').addClass('active')
  $(this).children('.b_bot').addClass('active')
  $(this).children('.black_bg').addClass('active')
  $(this).children('.body_txt').addClass('active')
});

$('.b03').mouseleave(function(){
  $(this).children('.b_top').removeClass('active')
  $(this).children('.b_bot').removeClass('active')
  $(this).children('.black_bg').removeClass('active')
  $(this).children('.body_txt').removeClass('active')
});


   AOS.init({
offset: 200, // 애니메이션이 트리거되는 지점 조정
duration: 600, // 애니메이션 지속 시간
easing: 'ease-in-out', // 애니메이션 효과
once: true, // 애니메이션이 한 번만 실행되도록 설정
});


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:2,
      },
      1350:{
        slidesPerView:3,
      }
      
    }
  });

  $('.q_menu_img').click(function() {
    // 현재 클릭한 요소의 형제인 m_list 선택
    const $currentMenu = $(this).siblings('.m_list');
  
    // 현재 메뉴 제외한 나머지 메뉴들 닫기
    $(this).parent('li').siblings().children('.m_list').removeClass('active');
  
    // 현재 메뉴 토글
    $currentMenu.toggleClass('active');
  });



});




  