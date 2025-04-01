(function($) {
    $(document).ready(function() {
        var offCanvas = $('#offCanvas');
        var responsiveMenu = $('#responsive-menu');
        var responsiveMenuContents = $('#search-form');
        $(document).on('opened.zf.offCanvas', function() {
            offCanvas.append(responsiveMenuContents);
        });
        $(document).on('close.zf.offCanvas', function() {
            responsiveMenu.append(responsiveMenuContents);
        });
    });
  })(jQuery)