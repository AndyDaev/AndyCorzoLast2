import workList from "../../data/workList";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "tailwindcss";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const trailContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    if (!stickySection || titles.length !== 3) {
      console.warn("Sticky section or titles missing — skipping scroll animation.");
    } else {
      // Only run this stuff if titles are present
      gsap.set(titles[0], { opacity: 1, scale: 1 });
      // ...rest of the timeline
    }

    gsap.set(titles[0], { opacity: 1, scale: 1 });
    gsap.set(titles[1], { opacity: 0, scale: 0.75 });
    gsap.set(titles[2], { opacity: 0, scale: 0.75 });

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 5}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        scrub: 0.5,
      },
    });

    masterTimeline
      .to(
        titles[0],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        1
      )

      .to(
        titles[1],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        1.25
      );

    masterTimeline
      .to(
        titles[1],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        2.5
      )

      .to(
        titles[2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        2.75
      );

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    // Trail effect setup
    const container = trailContainerRef.current;
    if (!container) return;

    const config = {
      imageCount: 21,
      imageLifespan: 750,
      removalDelay: 50,
      mouseThreshold: 100,
      scrollThreshold: 50,
      idleCursorInterval: 300,
      inDuration: 750,
      outDuration: 1000,
      inEasing: "cubic-bezier(.07,.5,.5,1)",
      outEasing: "cubic-bezier(.87, 0, .13, 1)",
    };

    const images = Array.from(
      { length: config.imageCount },
      (_, i) => `/assets/img${i + 1}.png`
    );
    const trail = [];

    let mouseX = 0,
      mouseY = 0,
      lastMouseX = 0,
      lastMouseY = 0;
    let isMoving = false,
      isCursorInContainer = false;
    let lastRemovalTime = 0,
      lastSteadyImageTime = 0,
      lastScrollTime = 0;
    let isScrolling = false,
      scrollTicking = false;

    const isInContainer = (x, y) => {
      const rect = container.getBoundingClientRect();
      const heroRect = container.closest('.hero').getBoundingClientRect();
      return (
        x >= heroRect.left && 
        x <= heroRect.right && 
        y >= heroRect.top && 
        y <= heroRect.bottom
      );
    };

    const setInitialMousePos = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      isCursorInContainer = isInContainer(mouseX, mouseY);
      document.removeEventListener("mouseover", setInitialMousePos, false);
    };
    document.addEventListener("mouseover", setInitialMousePos, false);

    const hasMovedEnough = () => {
      const distance = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
      );
      return distance > config.mouseThreshold;
    };

    const createTrailImage = () => {
      if (!isCursorInContainer) return;

      const now = Date.now();

      if (isMoving && hasMovedEnough()) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        createImage();
        return;
      }

      if (!isMoving && now - lastSteadyImageTime >= config.idleCursorInterval) {
        lastSteadyImageTime = now;
        createImage();
      }
    };

    const createImage = () => {
      const img = document.createElement("img");
      img.classList.add("trail-img");

      const randomIndex = Math.floor(Math.random() * images.length);
      const rotation = (Math.random() - 0.5) * 50;
      img.src = images[randomIndex];

      const heroRect = container.closest('.hero').getBoundingClientRect();
      const relativeX = mouseX - heroRect.left;
      const relativeY = mouseY - heroRect.top;

      img.style.left = `${relativeX}px`;
      img.style.top = `${relativeY}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
      img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

      container.appendChild(img);

      setTimeout(() => {
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
      }, 10);

      trail.push({
        element: img,
        rotation: rotation,
        removeTime: Date.now() + config.imageLifespan,
      });
    };

    const createScrollTrailImage = () => {
      if (!isCursorInContainer) return;

      lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
      lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

      createImage();

      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const removeOldImages = () => {
      const now = Date.now();

      if (now - lastRemovalTime < config.removalDelay || trail.length === 0)
        return;

      const oldestImage = trail[0];
      if (now >= oldestImage.removeTime) {
        const imgToRemove = trail.shift();

        imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
        imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

        lastRemovalTime = now;

        setTimeout(() => {
          if (imgToRemove.element.parentNode) {
            imgToRemove.element.parentNode.removeChild(imgToRemove.element);
          }
        }, config.outDuration);
      }
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isCursorInContainer = isInContainer(mouseX, mouseY);

      if (isCursorInContainer) {
        isMoving = true;
        clearTimeout(window.moveTimeout);
        window.moveTimeout = setTimeout(() => {
          isMoving = false;
        }, 100);
      }
    });

    window.addEventListener(
      "scroll",
      () => {
        isCursorInContainer = isInContainer(mouseX, mouseY);

        if (isCursorInContainer) {
          isMoving = true;
          lastMouseX += (Math.random() - 0.5) * 10;

          clearTimeout(window.scrollTimeout);
          window.scrollTimeout = setTimeout(() => {
            isMoving = false;
          }, 100);
        }
      },
      { passive: true }
    );

    window.addEventListener(
      "scroll",
      () => {
        const now = Date.now();
        isScrolling = true;

        if (now - lastScrollTime < config.scrollThreshold) return;

        lastScrollTime = now;

        if (!scrollTicking) {
          requestAnimationFrame(() => {
            if (isScrolling) {
              createScrollTrailImage();
              isScrolling = false;
            }
            scrollTicking = false;
          });
          scrollTicking = true;
        }
      },
      { passive: true }
    );

    const animate = () => {
      createTrailImage();
      removeOldImages();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      pinTrigger.kill();
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      document.removeEventListener("mouseover", setInitialMousePos, false);
      document.removeEventListener("mousemove", () => {});
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero bg-[#121212]">
          <div className="hero-img ">
          </div>

          <div className="hero-header">
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
              Andy
            </AnimatedCopy>
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.8}>
              Corzo
            </AnimatedCopy>
          </div>
          <section ref={trailContainerRef} className="trail-container">
            <p>( Move your cursor around and see the magic unfold )</p>
          </section>
        </section>



        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
          <AnimatedCopy tag="h1" animateOnScroll="true">
            Andy Projects
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to="/altavoz"
                key={work.id}
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <Reviews />

        <section className="hobbies">
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Camera
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Editing
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Story
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Sound
            </AnimatedCopy>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
