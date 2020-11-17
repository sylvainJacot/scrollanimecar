import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let timeLine = gsap.timeline();
const FirstScrollTrigger = (ref) => {
  let data = {
    trigger: ref,
    start: "bottom center",
    end: "bottom center",
    scrub: 1,
    markers: false,
  };
  return data;
};
const SecondScrollTrigger = (ref) => {
  let data = {
    trigger: ref,
    start: "-500px center",
    end: "-500px center",
    scrub: 2,
    markers: true,
  };
  return data;
};

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
      delay: 1.6,
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeOut,
    })
    .to(MainTitleRef.current, {
      duration: 2,
      ease: Power2.easeOut,
      y: 240,
      fontSize: 104,
      textShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
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
      ">-2"
    )
    .to(
      MustangPictureMaskRef.current,
      {
        duration: 1,
        height: "400px",
        ease: Power2.easeOut,
      },
      "-=4"
    )
    .to(
      FirstBlockRef.current,
      {
        duration: 1.3,
        visibility: "visible",
        translateX: "-30%",
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(
      FirstWhiteBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "-30%",
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(FirstBlockRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      translateX: "-50%",
      ease: Power2.easeIn,
    })
    .to(FirstWhiteBlockRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      translateX: "0%",
      ease: Power2.easeIn,
    })
    .to(MainTitleRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      ease: Power2.easeOut,
      y: 100,
    });
};

export const SecondAnimSection = (
  SecondSectionRef,
  SecondBlockRef,
  SecondWhiteRef,
  SecondPicRef
) => {
  timeLine
    .to(SecondBlockRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      x: 0,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(SecondPicRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      translateX: "-50%",
      translateY: "-50%",
      ease: Power2.easeOut,
    })
    .to(SecondWhiteRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      width: "850px",
      height: "360px",
      top: "40px",
      left: "40px",
      ease: Power2.easeOut,
    });
};
