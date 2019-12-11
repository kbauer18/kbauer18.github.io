(() => {
    /* */
    if (document.querySelector(".works .purple_bar")) {
      var right_img = Array.from(document.querySelectorAll(".works .purple_bar")).filter((v, i) =>(i % 2 != 0));
      right_img.forEach(function(obj) { obj.className += ' right_image'; });
    }
  })();