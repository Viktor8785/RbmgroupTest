const mediaQueryMobileOnly=window.matchMedia("(max-width: 719px)"),mediaQueryTablet=window.matchMedia("(min-width: 720px)");let sliderList,arrows,prev,next,slideWidth,lastTrf,posThreshold,sliderRef,sliderTrack=[],slides=[],bullets=[],sectors=[],slidesCount=[],cardIndex=0,cards=[],currentCardIndex=-1,slideIndex=[],posInit=0,posX1=0,posX2=0,posY1=0,posY2=0,posFinal=0,isSwipe=!1,isScroll=!1,allowSwipe=!0,transition=!0,nextTrf=0,prevTrf=0,trfRegExp=/([-0-9.]+(?=px))/;function handleWidthChangeMobile(e){e.matches&&(slideWidth=329,startSettings())}function handleWidthChangeTablet(e){e.matches&&(slideWidth=313,startSettings())}function startSettings(){for(let e=0;e<cardIndex;e++)sliderTrack[e].style.transform="translate3d(0px, 0px, 0px)",bullets[e].forEach((e=>{e.classList.contains("bullet-wrapper--active")&&e.classList.remove("bullet-wrapper--active")})),bullets[e][0].classList.add("bullet-wrapper--active"),slideIndex[e]=0;lastTrf=(slidesCount[cardIndex]-1)*slideWidth,posThreshold=.35*slideWidth}mediaQueryMobileOnly.addEventListener("change",handleWidthChangeMobile),mediaQueryTablet.addEventListener("change",handleWidthChangeTablet);const getEvent=function(){return cards.forEach(((e,t)=>{event.composedPath().includes(e)&&(currentCardIndex=t,console.log(currentCardIndex))})),-1!==event.type.search("touch")?event.touches[0]:event},slide=function(){transition&&(sliderTrack[currentCardIndex].style.transition="transform .5s"),sliderTrack[currentCardIndex].style.transform=`translate3d(-${slideIndex[currentCardIndex]*slideWidth}px, 0px, 0px)`,bullets[currentCardIndex].forEach((e=>{e.classList.contains("bullet-wrapper--active")&&e.classList.remove("bullet-wrapper--active")})),bullets[currentCardIndex][slideIndex[currentCardIndex]].classList.add("bullet-wrapper--active")},swipeStart=function(){let e=getEvent();allowSwipe&&(transition=!0,nextTrf=(slideIndex[currentCardIndex]+1)*-slideWidth,prevTrf=(slideIndex[currentCardIndex]-1)*-slideWidth,posInit=posX1=e.clientX,posY1=e.clientY,sliderTrack[currentCardIndex].style.transition="",document.addEventListener("touchmove",swipeAction),document.addEventListener("touchend",swipeEnd))},swipeAction=function(){let e=getEvent(),t=+sliderTrack[currentCardIndex].style.transform.match(trfRegExp)[0];if(posX2=posX1-e.clientX,posX1=e.clientX,posY2=posY1-e.clientY,posY1=e.clientY,!isSwipe&&!isScroll){let e=Math.abs(posY2);e>7||0===posX2?(isScroll=!0,allowSwipe=!1):e<7&&(isSwipe=!0)}if(isSwipe){if(0===slideIndex[currentCardIndex]){if(posInit<posX1)return void setTransform(t,0);allowSwipe=!0}if(slideIndex[currentCardIndex]===slidesCount[currentCardIndex]-1){if(posInit>posX1)return void setTransform(t,lastTrf);allowSwipe=!0}if(posInit>posX1&&t<nextTrf||posInit<posX1&&t>prevTrf)return void reachEdge();sliderTrack[currentCardIndex].style.transform=`translate3d(${t-posX2}px, 0px, 0px)`}},swipeEnd=function(){posFinal=posInit-posX1,isScroll=!1,isSwipe=!1,document.removeEventListener("touchmove",swipeAction),document.removeEventListener("touchend",swipeEnd),allowSwipe?(Math.abs(posFinal)>posThreshold&&(posInit<posX1?slideIndex[currentCardIndex]--:posInit>posX1&&slideIndex[currentCardIndex]++),posInit!==posX1?(allowSwipe=!1,transition&&(sliderTrack[currentCardIndex].style.transition="transform .5s"),sliderTrack[currentCardIndex].style.transform=`translate3d(-${slideIndex[currentCardIndex]*slideWidth}px, 0px, 0px)`,bullets[currentCardIndex].forEach((e=>{e.classList.contains("bullet-wrapper--active")&&e.classList.remove("bullet-wrapper--active")})),bullets[currentCardIndex][slideIndex[currentCardIndex]].classList.add("bullet-wrapper--active")):allowSwipe=!0):allowSwipe=!0},setTransform=function(e,t){e>=t&&e>t&&(sliderTrack[currentCardIndex].style.transform=`translate3d(${t}px, 0px, 0px)`),allowSwipe=!1},reachEdge=function(){transition=!1,swipeEnd(),allowSwipe=!0};export function sliderInit(e,t,r){sliderRef=e,cards[cardIndex]=t,slideIndex[cardIndex]=0,sliderList=e.querySelector(".card_slider"),sliderTrack[cardIndex]=e.querySelector(".slider_container"),slides[cardIndex]=e.querySelectorAll(".card_picture"),bullets[cardIndex]=e.querySelectorAll(".bullet-wrapper"),sectors[cardIndex]=e.querySelectorAll(".sector"),slidesCount[cardIndex]=slides[cardIndex].length,slideWidth=slides[cardIndex][0].offsetWidth,lastTrf=(slides[cardIndex].length-1)*slideWidth,posThreshold=.35*slideWidth,sliderTrack[cardIndex].style.transform="translate3d(0px, 0px, 0px)",sectors[cardIndex].forEach((e=>{e.addEventListener("mouseover",(e=>setActiveEl(e.target)))})),sliderTrack[cardIndex].addEventListener("transitionend",(()=>allowSwipe=!0)),sliderList.addEventListener("touchstart",swipeStart),cardIndex++}const setActiveEl=function(e){getEvent();const t=[...sectors[currentCardIndex]].indexOf(e);slides[currentCardIndex].forEach((e=>{e.classList.contains("card_picture--active")&&e.classList.remove("card_picture--active")})),bullets[currentCardIndex].forEach((e=>{e.classList.contains("bullet-wrapper--active")&&e.classList.remove("bullet-wrapper--active")})),slides[currentCardIndex][t].classList.add("card_picture--active"),bullets[currentCardIndex][t].classList.add("bullet-wrapper--active")};