// common.js

function init(){
    // load
    $('header').load('inc.html header > div');
    $('footer').load('inc.html footer > div');

    // popup   
    // 오늘 하루 그만보기
    $('.pop a').on('click',function(){
        event.preventDefault();  //  → a태그를 썼기 때문에 넣음
        $('.pop').addClass('active');
    });

    // main2
    let idx = 0, data;
    $.ajax({
        url:'./data.json',
        success:function(d){
            data = d;
            $('.main2-left > p').html(`<img src="${data.gallery[idx][0]}">`);
            $('.main2-right > p').html(`<img src="${data.gallery[idx][1]}">`);
            $('.main2-rinfo > p:eq(0)').html(`<img src="${data.gallery[idx][2]}">`);            
        }
    })
    // $.ajax({
    //     url:'data.json',

    //     success:function(data){
    //         let elData ='';

    //         $.each(data.gallery,function(key){
    //             elData += `<img src="${data.gallery[key]}">`;
    //         });

    //         $('.main2-left > p').html(elData);
    //         $('.main2-right > p').html(elData);
    //         $('.main2-rinfo > p:eq(0)').html(elData);
    //     }
    // });

    $('.arrow2 > a:eq(0)').on('click',function(){
        // console.log('aaa')
        event.preventDefault();
        (idx>0) ? idx-- : idx=9;
        $('.main2-left > p img').attr('src',data.gallery[idx][0]);
        $('.main2-right > p img').attr('src',data.gallery[idx][1]);
        $('.main2-rinfo > p:eq(0) img').attr('src',data.gallery[idx][2]);    
    })
    $('.arrow2 > a:eq(1)').on('click',function(){
        event.preventDefault();
        (idx<9) ? idx++ : idx=0;
        $('.main2-left > p img').attr('src',data.gallery[idx][0]);
        $('.main2-right > p img').attr('src',data.gallery[idx][1]);
        $('.main2-rinfo > p:eq(0) img').attr('src',data.gallery[idx][2]);    
    })

    // main3
    let main3 = $('.main3').offset().top;

    $(window).on('scroll',function(){
        scrollTop = $(window).scrollTop();

        if( main3 < scrollTop){
            $('.main3-img').addClass('active');
        }
    });

    // main4

    $('.main4-img>a').on('click',function(){
        let idx = $(this).index();
        $(this).addClass('active');
        $('.m4-pre').fadeIn();
        $('.m4-pre1').eq(idx).addClass('active');
    });

    $('.m4-preinfo > a').on('click',function(){
        $('.main4-img>a').removeClass('active');
        $('.m4-pre').fadeOut();
        $('.m4-pre1').removeClass('active');
    });

}

$(window).on('load',init);
