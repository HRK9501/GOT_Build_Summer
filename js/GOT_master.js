(() => {
    console.log('fired!');

    //variable stack -> get the shields / sigils first
    const sigils = document.querySelectorAll('.sigilContainer');
          lightBox = document.querySelector('.lightBox');
          closeButton = document.querySelector('.close-lightbox');
          houseVideo = document.querySelector('.house-video');

    function popLightBox() {
        //make the lightbox show up
        lightBox.classList.add('show-lightbox');

        houseVideo.play();
    }

    function closeLightBox(event) {
        event.preventDefault();

        //make the lightbox close
        lightBox.classList.remove('show-lightbox');
        houseVideo.currentTime = 0; //rewind the video
        houseVideo.pause();
    }

    sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
    closeButton.addEventListener("click", closeLightBox);

    houseVideo.addEventListener('ended', closeLightBox);
})();