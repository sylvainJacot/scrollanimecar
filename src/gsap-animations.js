import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let timeLine = gsap.timeline();
// let MainBgtimeLine = gsap.timeline();

export const MainPicAnimStart = (
  MustangPictureOverlayRef,
  MainTitleRef,
  UnderlineRef,
  MainBGRef,
  MustangPictureMaskRef,
  FirstBlockRef,
  FirstWhiteBlockRef
) => {
  timeLine
    .to(MustangPictureOverlayRef.current, {
      delay: 1,
      duration: 0.6,
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(
      MainTitleRef.current,
      {
        duration: 0.3,
        opacity: 1,
        translateY: 56,
        ease: Power2.easeOut,
      },
      ">-0,6"
    )
    .to(
      UnderlineRef.current,
      {
        width: 236,
        duration: 0.6,
        opacity: 1,
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(UnderlineRef.current, {
      delay: 3,
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeOut,
    })
    .to(MainTitleRef.current, {
      duration: 2,
      ease: Power2.easeOut,
      y: 240,
      fontSize: 104,
      textShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
    })
    .to(
      MainBGRef.current,
      {
        duration: 3,
        width: "50%",
        borderRadius: 8,
        ease: Power2.easeOut,
      },
      ">-2"
    )
    .to(
      MustangPictureOverlayRef.current,
      {
        delay: 0.6,
        duration: 3,
        top: "40%",
        ease: Power2.easeOut,
      },
      ">-3"
    )
    .to(
      MustangPictureMaskRef.current,
      {
        duration: 1,
        height: "400px",
        ease: Power2.easeOut,
      },
      "-=3"
    )
    .to(
      FirstBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "40%",
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(
      FirstWhiteBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "-8%",
        ease: Power2.easeOut,
      },
      ">-2"
    );
};

export const SecondPartAnim = (TestBlockRef) => {
  gsap.to(TestBlockRef.current, {
    scrollTrigger: {
      trigger: TestBlockRef.current,
      // quand le "top" du block touche le "center" du viewport
      start: "top center",
      end: "bottom top",
      scrub: 3,
      pin: true,
      markers: true,
    },
    duration: 1,
    translateX: 0,
    rotate: 360,
  });
};
