import { gsap, Power3 } from "gsap";

let timeLine = gsap.timeline();
let MainBgtimeLine = gsap.timeline();

export const MainBgAnim = (MainBGRef) => {
  MainBgtimeLine.to(MainBGRef.current, {
    duration: 1,
    width: "50%",
    marginTop: 80,
    borderRadius: 8,
    ease: Power3.easeIn,
    delay: 2,
  });
};

export const MainPicAnimStart = (
  MustangPictureOverlayRef,
  MainTitleRef,
  UnderlineRef
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
    );
};

export const MainPicAnimEnd = (MainTitleRef) => {
  MainBgtimeLine.to(MainTitleRef.current, {
    delay: 0.3,
    duration: 2,
    ease: Power3.easeOut,
    y: 200,
    fontSize: 104,
    textShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
  });
};
