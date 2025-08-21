import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initializeAnimations = () => {
      // Create a timeline for the scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          id: "main-timeline",
        },
      });

      // Initial setup - hide elements
      gsap.set([textRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animate container first
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.1"
      );

      // Animate gradient position
      tl.to(
        textRef.current,
        {
          backgroundPosition: "200% center",
          ease: "none",
        },
        0
      );

      // Enhanced typing effect with smooth animation
      const textContent = textRef.current;
      if (textContent) {
        // Split text into words and preserve spaces
        const words = textContent.textContent.split(" ");
        textContent.innerHTML = words
          .map(
            (word) =>
              `<span class="word" style="opacity: 0; display: inline;">${word}</span>`
          )
          .join(" ");

        const wordElements = textContent.querySelectorAll(".word");

        // Smooth typing effect animation
        gsap.to(wordElements, {
          opacity: 1,
          duration: 0.1, // Quick fade for each word
          stagger: {
            amount: 3, // Total duration for typing effect (3 seconds)
            ease: "none", // Linear for consistent typing rhythm
          },
          ease: "none", // No easing for crisp typing effect
          scrollTrigger: {
            trigger: textRef.current,
            start: "top center",
            end: "bottom top",
            scrub: 1,
            id: "word-animation",
          },
        });

        // Pin animation
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinRef.current,
          pinSpacing: false,
          pinType: "fixed",
          id: "pin-animation",
        });
      }
    };

    // Initialize animations with a small delay
    const timer = setTimeout(() => {
      initializeAnimations();
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="px-4 bg-black h-[200vh] flex items-start pt-0"
      >
        <div className="max-w-7xl mx-auto w-full pt-30" ref={pinRef}>
          {/* Title */}
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
          </div>

          {/* Two-column layout */}
          <div>
            {/* Description Part */}
            <div className="space-y-6">
              <p
                ref={textRef}
                className="gradient-text text-2xl sm:text-4xl leading-relaxed font-semibold"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                Macroly transforms health tracking into natural conversations.
                Simply chat about your meals and workouts while our AI companion
                provides intelligent insights. Watch your real-time energy
                balance unfold on an intuitive dashboard that shows exactly
                where you stand with calories in versus calories out. Every
                interaction is personalized to your unique goals, creating a
                truly holistic health experience that grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
