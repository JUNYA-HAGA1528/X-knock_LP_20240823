jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    
    
    //ヘッダーの色の変化
    const header = document.querySelector('.header');
    // スクロールイベントを監視
    $(window).on('scroll', function() {
        if (window.scrollY > 1000) { // 1000pxを超えたらクラスを追加
            header.classList.add('js-header');
        } else { // 1000px未満ならクラスを削除
            header.classList.remove('js-header');
        }
    });


    jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
        // ロゴがクリックされたときにトップへスクロール
        $('.header__logo a').on('click', function(e) {
            e.preventDefault(); // 通常のリンク動作を無効化
            $('html, body').animate({ scrollTop: 0 }, 'slow'); // スムーズにトップへスクロール
        });
    });
    
});
