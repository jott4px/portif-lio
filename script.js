const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


document.querySelectorAll('.skill-box').forEach(box => {
  const expText = document.createElement('div');
  expText.classList.add('experience-text');
  expText.textContent = box.getAttribute('data-experience');
  box.appendChild(expText);

 
  box.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      box.classList.add('expanded');
    }
  });
  box.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
      box.classList.remove('expanded');
    }
  });

  box.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      box.classList.toggle('expanded');
    }
  });
});

document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.classList.add('expanded');
  });
  box.addEventListener('mouseleave', () => {
    box.classList.remove('expanded');
  });

  box.addEventListener('click', () => {
    box.classList.toggle('expanded');
  });
});
