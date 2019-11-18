(function($) {
    $(document).ready(function() {
        $('.layout-toggle button').click(function() {
            $('.layout-toggle button:disabled').removeAttr('disabled');
            $(this).attr('disabled', true);
            $('.resources').toggleClass('resource-list').toggleClass('resource-grid');
            $('.resources .resource').toggleClass('media-object');
            $('.resource-meta, .resource-image').toggleClass('media-object-section');
        });
        
        $('.browse-toggle').click(function() {
            $('.browse-controls').toggleClass('open closed');
            $(this).toggleClass('open closed');
        });
    });
})(jQuery)