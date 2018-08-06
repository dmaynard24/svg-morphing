(function() {
    $('body').on('click touch', '.morphing-canvas', function() {
        // reset morphing-canvas
        $('.morphing-canvas .left-vertical').attr({
            'x': '0%',
            'width': '0%'
        });
        $('.morphing-canvas .right-vertical').attr({
            'x': '100%',
            'width': '0%'
        });
        $('.morphing-canvas .top-horizontal').attr({
            'x': '0%',
            'height': '0%'
        });
        $('.morphing-canvas .bottom-horizontal').attr({
            'y': '100%',
            'height': '0%'
        });

        var morphingTimeline = anime.timeline(),
            duration = 400,
            size = $(window).outerWidth() < 992 ? 40 : 80,
            rectWidth = (size / $(this).outerWidth()) * 100,
            rectHeight = (size / $(this).outerHeight()) * 100;
        
        morphingTimeline
            .add({
                targets: '.morphing-canvas .left-vertical',
                width: rectWidth,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.morphing-canvas .right-vertical',
                width: rectWidth,
                x: 100 - rectWidth,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.morphing-canvas .top-horizontal',
                height: rectHeight,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.morphing-canvas .bottom-horizontal',
                height: rectHeight,
                y: 100 - rectHeight,
                easing: 'easeOutQuad',
                duration: duration,
                offset: 0
            })
            .add({
                targets: '.morphing-canvas .left-vertical',
                width: 100,
                easing: 'easeOutQuad',
                duration: duration,
                offset: duration
            });
    });
})();