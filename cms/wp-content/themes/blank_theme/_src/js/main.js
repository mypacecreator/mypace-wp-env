(function($) {

  /*
   * トグル処理
   * */
    $.fn.clickToggle = function (attr1, attr2) {
        return this.each(function () {
            let status = false;
            $(this).on('click', function (e) {
                e.preventDefault();
                status = !status;
                if (status) {
                    return attr1.apply(this, arguments);
                }
                return attr2.apply(this, arguments);
            });
        });
    };

    $(function () {
        // 上へボタンをクリックしたらぬるっと上へ戻る
        $('a[href^="#"]').not('.js-toggle').on('click', function () {
            // スクロールの速度
            var speed = 400; // ミリ秒
            // アンカーの値取得
            var href = $(this).attr('href');
            // 移動先を取得
            var target = $(href === "#" || href === "" ? 'html' : href);
            // 移動先を数値で取得
            var position = target.offset().top - 180;
            // スムーススクロール
            $('body,html').animate({
                scrollTop: position
            }, speed, 'swing');
            return false;
        });
        $(window).on('load', function(){
            if(location.hash !== ""){
                var targetOffset = $(location.hash).offset().top;
                $(window).scrollTop(targetOffset - 240);
            }
        });

        /*
        * ドロワーメニュー
        * */
        const breakpoint = 1024;
        const $toggle = $('.c-toggle');
        const $nav = $('.l-gnav');
        let $currentWidth = $(window).width();

        /*
         * アコーディオンメニュー
         * */
        const $accordion = $('.l-gnav__child');
        const $accordion_toggle = $('.l-gnav__item--has-child > a');

        /*
         * ウィンドウサイズに応じた初期状態
         * */
        if ($currentWidth < breakpoint) {
            $toggle.attr('aria-expanded', 'false');
            $nav.attr('aria-hidden', 'true').hide();
            $accordion_toggle.attr('aria-expanded', 'false');
            $accordion.attr('aria-hidden', 'true').hide();
        }

        /*
         * ウインドウサイズ変更時
         * */
        $(window).on('resize', function () {
            if ($(window).width() === breakpoint) {
                return; // ウインドウ横幅が変わっていないとき
            }

            $currentWidth = $(window).width();
            if ($currentWidth < breakpoint) {
                $toggle.attr('aria-expanded', 'false').find('.c-toggle__text').text('MENU');
                $nav.attr('aria-hidden', 'true').hide();
                $accordion_toggle.attr('aria-expanded', 'false');
                $accordion.attr('aria-hidden', 'true').hide();
                $('body').removeClass('menu-open');
            } else {
                $toggle.removeAttr('aria-expanded');
                $nav.removeAttr('aria-hidden').show();
                $accordion_toggle.removeAttr('aria-expanded');
                $accordion.removeAttr('aria-hidden').show();
            }
        });

        /*
         * ボタンクリック時
         * */
        $toggle.clickToggle(
            function () {
                $(this).attr('aria-expanded', 'true')
                    .find('.c-toggle__text').text('CLOSE');
                $('.l-gnav:not(:animated)').attr('aria-hidden', 'false').slideDown('400', 'swing');
                $('body').addClass('menu-open');
            },
            function () {
                $(this).attr('aria-expanded', 'false')
                    .find('.c-toggle__text').text('MENU');
                $nav.attr('aria-hidden', 'true').slideUp('400', 'swing');
                $('body').removeClass('menu-open');
            }
        );
        $accordion_toggle.clickToggle(
            function () {
                $(this).attr('aria-expanded', 'true');
                $(this).parent().addClass('is-active');
                $(this).next('.l-gnav__child').attr('aria-hidden', 'false').slideDown('400', 'swing');
            },
            function () {
                $(this).attr('aria-expanded', 'false');
                $(this).parent().removeClass('is-active');
                $(this).next('.l-gnav__child').attr('aria-hidden', 'true').slideUp('400', 'swing');
            }
        );
    });

    /*
    * リンク範囲をボックス全体に広げる
    * */
    $('.js-clickable').css('cursor','pointer');
    $('.js-clickable').on('click',function () {
        window.location.href = $(this).find('a').attr('href');
    });

})(jQuery);
