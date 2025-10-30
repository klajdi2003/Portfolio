// Create modal element
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.id = 'imageModal';
document.body.appendChild(modal);

// Add close button
const closeBtn = document.createElement('span');
closeBtn.classList.add('image-modal-close');
closeBtn.innerHTML = '&times;';
modal.appendChild(closeBtn);

// Add image element
const modalImg = document.createElement('img');
modal.appendChild(modalImg);

// Close modal when clicking close button or outside image
closeBtn.onclick = () => modal.style.display = 'none';
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

// Open modal when clicking any project image
document.querySelectorAll('.project-image').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});
