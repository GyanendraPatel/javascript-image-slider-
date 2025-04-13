// Array of image URLs
const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
    "https://picsum.photos/id/1020/400/250"
  ];
  
  let currentIndex = 0;
  
  // Get image element from DOM
  const slider = document.getElementById("slider");
  
  // Function to show image
  function showImage(index) {
    slider.src = images[index];
  }
  
  // Show initial image
  showImage(currentIndex);
  
  // Go to next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  // Go to previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }