document.addEventListener("DOMContentLoaded", function() {
    const imageList = document.querySelector(".images");
    const loadMoreButton = document.querySelector(".load-more");
    const imagesToLoadPerClick = 10;
    let currentLoadedImages = imagesToLoadPerClick;
  
    // Function to load more images
    function loadMoreImages() {
      for (let i = currentLoadedImages; i < currentLoadedImages + imagesToLoadPerClick; i++) {
        const img = document.createElement("img");
        img.src = `..//photos/1 (${i + 1}).jpg`; // Assuming your image names follow a pattern
        img.alt = `Image ${i + 1}`;
        const card = document.createElement("li");
        card.classList.add("card");
        card.appendChild(img);
        imageList.appendChild(card);
      }
      currentLoadedImages += imagesToLoadPerClick;
    }
  
    // Load more button click event
    loadMoreButton.addEventListener("click", loadMoreImages);
  });
  