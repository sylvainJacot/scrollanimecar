import { gsap, Power3 } from "gsap";

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
      ease: Power3.easeOut,
    })
    .to(
      MainTitleRef.current,
      {
        duration: 0.3,
        opacity: 1,
        translateY: 40,
        ease: Power3.easeOut,
      },
      ">-0,6"
    )
    .to(
      UnderlineRef.current,
      {
        width: 236,
        duration: 0.6,
        ease: Power3.easeOut,
      },
      ">-1"
    )
    .to(MainBGRef.current, {
      duration: 2,
      width: "50%",
      marginTop: 80,
      borderRadius: 8,
      ease: Power3.easeOut,
    })
    .to(
      MustangPictureOverlayRef.current,
      {
        duration: 1,
        width: "110%",
        ease: Power3.easeIn,
      },
      "-=2"
    )
    .to(MainTitleRef.current, {
      duration: 2,
      ease: Power3.easeOut,
      y: 200,
      fontSize: 104,
      textShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
    },"-=1")
    .to(
      UnderlineRef.current,
      {
      opacity: 0,
        ease: Power3.easeOut,
      },
      "-=2"
    )
    .to(
      MustangPictureMaskRef.current,
      {
        duration: 1,
        height: "400px",
        ease: Power3.easeOut,
      },
      "-=3"
    )
    .to(
      FirstBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "40%",
        ease: Power3.easeOut,
      },
      ">-1"
    )
    .to(
      FirstWhiteBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "-8%",
        ease: Power3.easeOut,
      },
      ">-2"
    );
};
