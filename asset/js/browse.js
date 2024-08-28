(function($) {

    // Get parameter from current URL. Source: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript

    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    // Replace parameter within a given URL. Source: https://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery

    function replaceUrlParam(url, paramName, paramValue)
    {
        if (paramValue == null) {
            paramValue = '';
        }
        var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
        if (url.search(pattern)>=0) {
            return url.replace(pattern,'$1' + paramValue + '$2');
        }
        url = url.replace(/[?#]$/,'');
        return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
    }

    $(document).ready(function() {
        var layoutSetting = findGetParameter('browse_layout');
        var layoutHiddenInput = $('<input type="hidden" name="browse_layout">');

        if (layoutSetting) {
            $('.layout-toggle button').attr('disabled', false);
            var currentLayoutButton = $('.layout-toggle button.' + layoutSetting);
            currentLayoutButton.attr('disabled', true);            
            $('.resources').attr('class', 'resources resource-' + layoutSetting);
            if (layoutSetting == 'list') {
                $('.resources .resource').addClass('media-object');
                $('.resource-meta, .resource-image').addClass('media-object-section');
            } else {
                $('.resources .resource').removeClass('media-object');
                $('.resource-meta, .resource-image').removeClass('media-object-section');
            }
        }

        $('.layout-toggle button').click(function() {
            const newLayoutName = $(this).attr('aria-label').toLowerCase();
            $('.layout-toggle button:disabled').removeAttr('disabled');
            $(this).attr('disabled', true);
            $('.resources').toggleClass('resource-list').toggleClass('resource-grid');
            $('.resources .resource').toggleClass('media-object');
            $('.resource-meta, .resource-image').toggleClass('media-object-section');

            // Update URLs.
            var queryParams = new URLSearchParams(window.location.search);
            queryParams.set('browse_layout', newLayoutName);
            history.replaceState('', '', "?"+queryParams.toString());
            $('.omeka-pagination a').each(function() {
                var paginationLink = $(this);
                var currentUrl = paginationLink.attr('href');
                var newUrl = replaceUrlParam(currentUrl, 'browse_layout', newLayoutName);
                paginationLink.attr('href', newUrl);
            });
            if ($('.omeka-pagination [name="browse_layout"]').length > 0) {
                $('.omeka-pagination [name="browse_layout"]').each(function() {
                    $(this).val(newLayoutName);
                });
            } else {
                $('.omeka-pagination form').each(function() {
                    var newLayoutHiddenInput = layoutHiddenInput.clone();
                    newLayoutHiddenInput.val(newLayoutName);
                    $(this).prepend(newLayoutHiddenInput);
                });
            }
            $('.sorting [name="browse_layout"]').val(newLayoutName);
        });
        
        $('.browse-toggle').click(function() {
            $('.browse-controls').toggleClass('open closed');
            $(this).toggleClass('open closed');
        });
    });
})(jQuery)