(function($) {
    $(document).ready(function() {

        $('header').on('click', '.search-toggle', function() {
            var toggleButton = $(this);
            var searchContainer = $('#search-container');
            searchContainer.toggleClass('closed');
            if (searchContainer.hasClass('closed')) {
                toggleButton.attr('aria-expanded', 'false');
            } else {
                toggleButton.attr('aria-expanded', 'true');
            }
        });
    });
  })(jQuery)