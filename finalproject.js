// Array of image URLs
const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
    "https://picsum.photos/id/1020/400/250",
    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdj64dpWLM_4Yj5nEfKF-KKkrVSnhslTrPA&s",
  "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1787042/pexels-photo-1787042.jpeg?auto=compress&cs=tinysrgb&w=600"
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