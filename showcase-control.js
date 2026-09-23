document.addEventListener("DOMContentLoaded", () => {
  // Open modal matching data-target ID
  document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-target");
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add("active");
      }
    });
  });

  // Close active modal on close button click
  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal-overlay").classList.remove("active");
    });
  });

  // Close modal when clicking outside content area
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Carousel Image Navigation Logic
  document.querySelectorAll(".carousel-container").forEach((container) => {
    const slides = container.querySelectorAll(".slide");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
    }
  });
});