(function() {
    $('body').on('click touch', '.canvas', function() {
        // reset canvas
        $('.canvas .left-vertical').attr({
            'x': '0%',
            'width': '0%'
        });
        $('.canvas .right-vertical').attr({
            'x': '100%',
            'width': '0%'
        });
        $('.canvas .top-horizontal').attr({
            'x': '0%',
            'height': '0%'
        });
        $('.canvas .bottom-horizontal').attr({
            'y': '100%',
            'height': '0%'
        });

        var morphingTimeline = anime.timeline(),
            duration = 500,
            size = $(window).outerWidth() < 992 ? 40 : 80,
            rectWidth = (size / $(this).outerWidth()) * 100,
            rectHeight = (size / $(this).outerHeight()) * 100;
        
        morphingTimeline
            .add({
                targets: '.canvas .left-vertical',
                width: rectWidth,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.canvas .right-vertical',
                width: rectWidth,
                x: 100 - rectWidth,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.canvas .top-horizontal',
                height: rectHeight,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.canvas .bottom-horizontal',
                height: rectHeight,
                y: 100 - rectHeight,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.canvas .left-vertical',
                width: 100,
                easing: 'easeOutQuad',
                duration: duration,
                offset: duration
            });
    });
})();