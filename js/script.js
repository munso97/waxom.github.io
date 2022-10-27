const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper .swiper-button-next',
    prevEl: '.swiper .swiper-button-prev',
  },
});

// Number Animation

// var $statItem = $('.item .count');

// $statItem.each(function(){

//   var currentItem = $(this),
//       $rateNum = currentItem.attr('date-rate');

//   $({mycount:0}).animate({mycount:$rateNum}, {
//       duration: 2500,
//       progress:function(){
//           var now = this.mycount;
//           currentItem.text(Math.floor(now));
//       },

//       });
//   }); // stat item each


// 숫자 애니메이션
var memberCountConTxt = 3587;

$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon1").text(num);
  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon1").text(num);
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt = 207;

$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num);
  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num);
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt = 2500;

$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon3").text(num);
  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon3").text(num);
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt = 873;

$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon4").text(num);
  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon4").text(num);
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var memberCountConTxt = 900;

$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon5").text(num);
  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon5").text(num);
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// recent_posts slider
var swiper_recent = new Swiper(".swiper-date", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-date .swiper-button-next_recent',
    prevEl: '.swiper-date .swiper-button-prev_recent',
  },
  
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  
    768: {
      slidesPerView: 2,
    },
    
    0: {
      slidesPerView: 1,
    }
  }
});

// 메뉴바 라이브러리 사용하면서 web 메뉴 보이지 않아
// .main-menu web 에서 보이도록 js 설정
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".main-menu").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 1200) {
      $(".main-menu").show();
    } else {
      $(".main-menu").hide();
    }
  });


});

// 필터
var mixer = mixitup('.project_list', {
  animation: {
    effects: 'fade translateZ(-100px)'
  }
});