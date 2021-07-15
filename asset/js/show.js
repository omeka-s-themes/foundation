(function($) {
    $(document).ready(function() {        
        const lgContainer = document.getElementById('itemfiles');

        const inlineGallery = lightGallery(lgContainer, {
            plugins: [lgThumbnail, lgVideo],
            thumbnail: true,
            container: lgContainer,
            hash: false,
            closable: false,
            showMaximizeIcon: true,
            appendSubHtmlTo: '.lg-item',
            slideDelay: 400
        });  

        inlineGallery.openGallery();
    });
  })(jQuery)