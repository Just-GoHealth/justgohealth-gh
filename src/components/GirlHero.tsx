/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function GirlHero({ isPlaying = true }: { isPlaying?: boolean }) {
  const [scope, animate] = useAnimate();
  const anim = animate as unknown as (target: any, keyframes?: any, options?: any) => any;
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 1023px)').matches;

  useEffect(() => {
    const run = async () => {
      // Image parallax in
      const controls = [] as any[];
      controls.push(
        anim("[data-girl-image]", { x: [60, 0], scale: [1.04, 1] }, { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 })
      );
      // LOCK / IN words
      controls.push(
        anim("[data-lock]", { y: [40, 0], opacity: [0, 1] }, { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 })
      );
      controls.push(
        anim("[data-in]", { y: [40, 0], opacity: [0, 1] }, { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.75 })
      );
      // Lines under
      controls.push(
        anim("[data-line]", { opacity: [0, 1], y: [10, 0] }, { duration: 0.4, delay: 1.0, ease: "easeOut", stagger: 0.15 })
      );

      // Attach pause/play handlers
      return controls;
    };

    let controls: any[] | undefined;
    run().then((c) => {
      controls = Array.isArray(c) ? c : undefined;
      if (!isPlaying && controls) controls.forEach((ctl) => ctl?.pause?.());
    });

    return () => {
      controls?.forEach((ctl) => ctl?.cancel?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Toggle play/pause for any running WAAPI animations within scope
    const animations = (scope.current as HTMLElement | null)?.getAnimations?.() || [];
    animations.forEach((a) => (isPlaying ? a.play() : a.pause()));
  }, [isPlaying, scope]);

  return (
    <div ref={scope} className={`relative h-screen order-1 lg:order-2 overflow-hidden ${isMobile ? 'hidden' : ''}`}>
      <Image
        src="/hero/girl.png"
        alt="Portrait of a woman"
        width={700}
        height={120}
        className="object-contain object-left ml-[300px] w-[700px] h-[650px]"
        data-girl-image
        priority
      />
      
      {/* LOCK IN Text Overlay with text underneath */}
      <div className="absolute inset-0 flex items-center -left-24 justify-center mb-20 mr-[100px] z-20">
        <div className="text-center">
          <h2 className="text-[200px] ml-20 text-left font-extrabold leading-none mt-56 mb-10 text-[#2bb573]">
            <span data-lock>LOCK</span>
            <p className="bottom-24" data-in>
              IN
            </p>
          </h2>
          
          {/* White Text Overlay - Under LOCK IN */}
          <div className="text-white text-nowrap text-3xl underline underline-offset-4 -mt-65 ml-[400px] font-bold text-left space-y-1">
            <p data-line className="">Feeling depressed or sad?</p>
            <p data-line className="">Screen yourself with our App.</p>
            <p data-line className="">Connect with care.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
