// common.js

$('main').load('main.html');

let idx;
$('header nav a').click(function(){

    event.preventDefault();  // 페이지이동 차단 (링크이동이아닌 내용을 가져올때 / 타이밍이아닐때)

    let pageUrl = $(this).attr('href');
                  // ↑ "내가클릭한 a태그다."
    $('main').load(pageUrl);

    $('header nav a').eq(idx).removeClass('active');

    $(this).addClass('active')
        // css ↑

    idx = $(this).index();

});

// $(this).attr('href')
    // 바닐라 ↓
    // .getAttribute('src')
    // .getAttribute('src','변경값')
    // ( 선택자.href )
