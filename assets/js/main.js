/*
 * common animation
 */

// gsap.set('[data-fade-down]', { yPercent: -20, opacity: 0 })
// gsap.set('[data-fade-up]', { yPercent: 20, opacity: 0 })
// /**
//  * @i index
//  * @el element
//  *
//  */
// $('[data-fade-down]').each(function (i, el) {
//   gsap.to(el, {
//     scrollTrigger: {
//       trigger: el,
//       start: '0% 80%',
//       end: '100% 0%',
//       toggleActions: 'restart none none none',
//       // markers:true,
//     },
//     yPercent: 0,
//     opacity: 1,
//   })
// })
// $('[data-fade-up]').each(function (i, el) {
//   gsap.to(el, {
//     scrollTrigger: {
//       trigger: el,
//       start: '0% 80%',
//       end: '100% 0%',
//       // markers:true,
//     },
//     yPercent: 0,
//     opacity: 1,
//   })
// })

/*
 * intro
 */

const introAniTl = gsap.timeline({})

introAniTl
  .set('.v_tit span', {
    yPercent: -60,
    opacity: 0,
  })
  .to('.v_tit span:nth-child(1)', {
    yPercent: 0,
    opacity: 1,
    delay: 0.6,
  })
  .to('.v_tit span:nth-child(2)', {
    yPercent: 0,
    opacity: 1,
    delay: 0.2,
  })
  .to('.v_tit span:nth-child(3)', {
    yPercent: 0,
    opacity: 1,
  })
  .fromTo(
    '.line',
    { width: 0, opacity: 0 },
    { width: '205%', opacity: 1, duration: 0.4 },
  )

// '.v_txt' 클래스의 하위 요소 선택 및 애니메이션 적용
introAniTl
  .from('.v_txt > *', {
    opacity: 0,
    y: 60,

    stagger: 0.3, // 요소들 사이의 간격을 조정합니다.
    duration: 0.9, // 애니메이션 지속 시간
  })

  .to('.v_txt .one', {
    yPercent: 0,
    opacity: 1,
    delay: '-= 0.4',
  })
  .to('.v_txt .two', {
    yPercent: 0,
    opacity: 1,
  })
  .to('.v_txt .three', {
    yPercent: 0,
    opacity: 1,
  })

/**
 * scroll Down
 */

$(document).on('click', '.btn_scr', function () {
  const targetpos = $('.sc-result').offset().top
  $('html, body').animate(
    {
      scrollTop: targetpos,
    },
    1000,
  )
})

/*
 * result
 */

const resultAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-result',
    // markers: true,
    start: '0% 0%',
    end: '100% 100%',
    toggleActions: 'play none none restart',

    //기본 none
    // play = 한번 실행되고 끝
    // restart = 스크르롤을 올리고 다시내리면 다시시작

    // pause = 안보고 그냥 내려서 지나가면 멈춘다
    // resume = 위에 퍼즈된걸 보면 멈춘걸 움직인다.

    // reverse = 위로 올라가면 퍼즈된걸 시작지점으로 다시돌아간다.
    // pause = 마지막 퍼즈는 위로올라가면 원상태지점으로 돌아가는 애니메이션 실행
    onEnter: function () {
      $('.sc-result').addClass('active')
      resultAniTl.play() // 애니메이션을 다시 재생
    },
    onLeaveBack: function () {
      $('.sc-result').removeClass('active')
      resultAniTl.pause()
    },
  },
})

resultAniTl
  .fromTo(
    '.sc-result .tit span',
    { opacity: 0, yPercent: -60 },
    { opacity: 1, yPercent: 0, stagger: 0.2 },
  )
  .fromTo(
    '.deco',
    {
      scale: 0,
      opacity: 0,
    },
    {
      opacity: 1,
      scale: 1,
      delay: '-= 0.4',
      duration: 0.6,
    },
  )
  .fromTo(
    '.result_list .result_item',
    {
      opacity: 0,
      yPercent: 60,
    },
    {
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
    },
  )

/*
	계기판 카운터 
  */

// 1. ODOMETER 활용
/*
	계기판 카운터 
  */

// $(window).scroll(function () {
//     if ($('.sc-result').hasClass('active')) {
//         setTimeout(function () {
//             $('#odometer1').html(1500748); // 첫 번째 odometer 값 설정
//             $('#odometer2').html(96); // 두 번째 odometer 값 설정
//             $('#odometer3').html(172); // 세 번째 odometer 값 설정
//         },2000)

//     }
// })

$(window).scroll(function () {
  if ($('.sc-result').hasClass('active')) {
    setTimeout(function () {
      odometer1.innerHTML = 1500748
    }, 2000)
    setTimeout(function () {
      odometer2.innerHTML = 86
    }, 3000)
    setTimeout(function () {
      odometer3.innerHTML = 172
    }, 2000)
  } else {
    setTimeout(function () {
      odometer1.innerHTML = 0
    }, 2000)
    setTimeout(function () {
      odometer2.innerHTML = 19
    }, 3000)
    setTimeout(function () {
      odometer3.innerHTML = 0
    }, 2000)
  }
})

// 2. GSAP 활용
// function startCounter() {
//   const numbers = [1500748, 96, 172]
//   numbers.forEach((number, index) => {
//     gsap.to(
//       { var: 0},
//       {
//         var: number,
//         duration: 3,
//         ease: 'none',
//         onUpdate: function () {
//           $('.num').eq(index).text(Math.round(this.targets()[0].var).toLocaleString())
//         },
//       },
//     )
//   })
// }

/**
 * reviewty
 */
const reviewtyAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-reviewty',
    start: '0% 50%',
    end: '100% 100%',
    margkers: true,
    toggleActions: 'play none none reset',
  },
})

reviewtyAniTl
  .fromTo(
    '.sc-reviewty .img_area',
    {
      opacity: 0,
      yPercent: 60,
    },
    {
      opacity: 1,
      yPercent: 1,
      duration: 0.6,
    },
  )
  .fromTo(
    '.sc-reviewty .txt_area .eng span',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
    },
  )
  .fromTo(
    '.sc-reviewty .btn_group',
    {
      opacity: 0,
      yPercent: 60,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 1,
    },
  )

/**
 * marketing
 */
const marketingAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-marketing',
    start: 'top 90%',
    end: 'bottom 20%',
    id: 'marketing',
    toggleActions: 'play none none reset',
    // markers: true,
  },
})

marketingAniTl
  .fromTo(
    '.sc-marketing h3 span',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
      delay: 1,
      duration: 0.3,
    },
  )
  .fromTo(
    '.sc-marketing h3 strong',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.3,
    },
  )
  .fromTo(
    '.sc-marketing .img_list li',
    {
      opacity: 0,
      yPercent: 60,
    },
    {
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
    },
  )

/**
 * success
 */

const successAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-success',
    start: 'top 100%',
    end: 'bottom bottom',
    scrub: true,
    // markers: true,
    duration: 10,
  },
})

successAniTl.addLabel('group')
successAniTl
  .fromTo(
    '.sc-success .move_txt01',
    {
      xPercent: '2000',
    },
    {
      xPercent: 0,
      duration: 10,
    },
    'group',
  )
  .fromTo(
    '.sc-success .move_txt03',
    {
      xPercent: '2000',
    },
    {
      xPercent: 0,
      duration: 10,
    },
    'group',
  )
  .fromTo(
    '.sc-success .move_txt02',
    {
      xPercent: '-2000',
    },
    {
      xPercent: 0,
      duration: 10,
    },
    'group',
  )

/**
 * panel : 오류 pannel요소의 start 값이 end와 동일하게 적용 됨
 */

window.onload = function () {
  if (window.matchMedia('(min-width: 680px)').matches) {
    // 미디어 쿼리가 일치하는 경우 ScrollTrigger 설정
    let panelsSection = document.querySelector('#panels'),
      panelsContainer = document.querySelector('.panels_container'),
      tween,
      panelConWidth = panelsContainer.outerWidth

    const panels = gsap.utils.toArray('.panel')
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.panels_container',
        pin: true,
        start: 'top top', // 요소가 화면에 보일 때 핀을 사용하기 시작하는 지점
        end: () => '+=' + outerWidth ,
        // end: () => '+=' + (panelsContainer.outerWidth - innerWidth), // 요소가 화면에서 사라질 때 핀을 사용을 멈추는 지점
        scrub: 0.1, // 값이 1보다 작을 수록 천천히 이동
      },
    })
    console.log(panelConWidth)
  } else {
    const list = gsap.utils.toArray('#panels .solution_item')
    gsap.set(list, {
      opacity: 0,
      yPercent: 40,
    })
    gsap.to(list, {
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#panels .solution',
        start: 'top top',
        end: 'bottom bottom',
      },
    })
  }
}

/**
 * partner
 */

const partnersAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-partner',
    start: 'top 50%',
    end: 'bottom bottom',
    // markers: true,
    toggleActions: 'play none none reset',
  },
})

partnersAniTl
  .fromTo(
    '.sc-partner h3',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
    },
  )
  .fromTo(
    '.sc-partner .partner_list',
    {
      opacity: 0,
      yPercent: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
    },
  )

/**
 * news
 */

const newsAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-news',
    start: 'top 50%',
    end: 'bottom bottom',
    // markers: true,
    toggleActions: 'play none none reset',
  },
})

newsAniTl
  .fromTo(
    '.sc-news h3',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
    },
  )
  .fromTo(
    '.sc-news .news_roll',
    {
      opacity: 0,
      yPercent: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
    },
  )

/*
 * document color change
 */

document.addEventListener('DOMContentLoaded', function () {
  // dom 트리가 구성되고 난 후에
  const target = document.getElementsByClassName('sc-marketing')[0]

  gsap.to('body', {
    backgroundColor: '#F8D899',
    scrollTrigger: {
      trigger: target,
      start: 'top 50%',
      end: 'bottom top',
      // id: 'bodyColor',
      // markers: true,
      onEnter: () => (document.body.style.backgroundColor = '#F8D899'),
      onLeaveBack: () => (document.body.style.backgroundColor = '#000'),
      onEnterBack: () => (document.body.style.backgroundColor = '#F8D899'),
    },
  })
})

/*
 * contact
 */

const contactAniTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-contact',
    start: 'top 50%',
    end: 'bottom bottom',
    // markers: true,
    toggleActions: 'play none play reset',
  },
})
gsap.set('.form > div', {
  opacity: 0,
  yPercent: 40,
})

contactAniTl
  .fromTo(
    '.sc-contact h3',
    {
      opacity: 0,
      yPercent: -60,
    },
    {
      opacity: 1,
      yPercent: 0,
    },
  )
  .to('.tab_btn', {
    opacity: 1,
    yPercent: 0,
    duration: 0.3,
  })
  .to('.tab_cont', {
    opacity: 1,
    yPercent: 0,
    duration: 0.3,
  })

$(document).on('click', '.type-item', function (e) {
  let thisTabId = $(this).attr('data-tab')
  console.log(thisTabId)
  $(this).addClass('active').siblings().removeClass('active')
  $(`#${thisTabId}`).show().siblings('form').hide()
})

$(document).on('click', '.btn_agreeCont', function (e) {
  if ($('.privacy_cont').css('display') == 'block') {
    $('.privacy_cont').hide()
  } else {
    $('.privacy_cont').show()
  }
})

// $('.agree_con .option').click(function () {
//   if ($('.privacy_agree').css('display') == 'block') {
//     $('.privacy_agree').hide()
//   } else {
//     $('.privacy_agree').show()
//   }
// })
