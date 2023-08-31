  $(document).ready(function() {
      function setMarginBasedOnImageHeight() {
          // Get the image element
          var image = $('.homeimg');

          // Get the image height
          var imageHeight = image.height();

          // Set the margin based on the image height (adjust the value as needed)
          var marginValue = imageHeight * 0.5; // Example: Set the margin to half of the image height
          image.css('margin-top', (-marginValue) + 'px');
      }

      // Call the function on document ready
      setMarginBasedOnImageHeight();

      // Recalculate and set the margin if the window is resized
      $(window).on('resize', function() {
          setMarginBasedOnImageHeight();
      });
  });