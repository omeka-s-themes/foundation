(function($) {
    $(document).ready(function() {        
        var galleryState = ($('#itemfiles li').length > 1) ? true : false;

        var lgContainer = document.getElementById('itemfiles');
        var inlineGallery = lightGallery(lgContainer, {
            container: lgContainer,
            dynamic: false,
            hash: true,
            closable: false,
            thumbnail: true,
            selector: '.media.resource',
            exThumbImage: 'data-thumb',
            showMaximizeIcon: true,
            autoplayFirstVideo: false,
            flipVertical: false,
            flipHorizontal: false,
            plugins: [
                lgThumbnail,lgZoom,lgVideo,lgHash,lgRotate
            ],
        });

        inlineGallery.openGallery();
    });
})(jQuery)

