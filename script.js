gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ==========================
// Intro Animation
// ==========================
gsap.timeline()
.from("#main-screen", {
  opacity: 0,
  duration: 1,
  ease: "power3.out",
})
.from("#main-screen h1", {
  opacity: 0,
  duration: 0.42,
  ease: "bounce.out",
})
.from("#main-screen label", {
  opacity: 0,
  duration: 0.2,
  ease: "bounce.out",
})
.from("#main-screen input", {
  opacity: 0,
  duration: 0.2,
  ease: "bounce.out",
})
.from("#Submit", {
  opacity: 0,
  duration: 0.2,
  ease: "bounce.out",
})
.from("#main-screen h2", {
  opacity: 0,
  duration: 0.2,
  ease: "power3.out",
});

// ==========================
// Submit Logic
// ==========================
const button = document.getElementById("Submit");
const input = document.getElementById("name-input");
const specialMessage = document.getElementById("special-message");
const page2 = document.getElementById("page2");

button.addEventListener("click", function () {
  const userName = input.value.trim();

  // Validation
  if (userName === "") {
    alert("Please enter your name first!");
    return;
  }

  // Hide main inputs
  gsap.timeline()
    .to("#main-screen h1", { 
        opacity: 0, 
        duration: 0.2 
    })
    .to("#main-screen label", { 
        opacity: 0, 
        duration: 0.2 
    })
    .to("#main-screen input", { 
        opacity: 0, 
        duration: 0.2 
    })
    .to("#Submit", { 
        opacity: 0, 
        duration: 0.2 
    })
    .to("#main-screen h2", { 
        opacity: 0, 
        duration: 0.2 
    });

  // Show welcome message
  specialMessage.textContent = `Hello ${userName}, we’re glad you’re here ✨`;

  gsap.to("#special-message", {
    opacity: 1,
    duration: 0.8,
    y: -20,
    ease: "power3.out",
    onComplete: () => {
      gsap.set(page2, { 
        display: "block" 
    });

      gsap.to(window, {
        duration: 1.2,
        scrollTo: page2,
        ease: "power2.out"
      });
    }
  });
});
