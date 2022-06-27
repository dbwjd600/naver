                // $.ajax()
// 정리해 놓은 문서를 가져와서 (문서의 전부를 이용해서)
// html문서에 출력하는 것.
// (중간 통신 역할)

$.ajax({

// 1
    // url:'data.json',

// 2
    beforeSend:function(){
        // console.log('준비중.....');
        $('.loading').show();
                    // ↑ display:block;
    },

// 3
    success:function(data){
        $('.loading').hide();
                    // ↑ display:none;

        console.log('성공')
        // console.log(  data   )
        // console.log(  data.gallery[1]  );
        let elData='';

        // elData = `<li><img src="${data.gallery[0]}"></li>`;
        // elData += `<li><img src="${data.gallery[1]}"></li>`;
        // elData += `<li><img src="${data.gallery[2]}"></li>`;
                        // 반복문으로 ↓ ↓   
        $.each(data.gallery,function(key,url){

            elData += `<li><img src="${data.gallery[key]}"></li>`;
                                            // ↑ key      // url(val) 실제값 넣어도됨
        })

        $('article:eq(0) ul').html(elData);
                // ↑ nth:Childe()써도됨
    },
    error : function(){
        console.log('실패')
    }
});

$.ajax({

    url:'data2.json',
    success:function(data){
        // console.log(data.gallery[0].url)
        let elData ='';
        $.each(data.gallery,function(k,d){

            // d = {"url":"../../img/01.jpg", "title":"상품명01"}
                    // d로 씀
            // elData += `<li><img src="${d.url}"> ${d.title} </li>`;
                    // key로 씀
            elData += `<li><img src="${data.gallery[key]}"> ${data.gallery[key].title} </li>`;
        });

        $('article:eq(1) ul').html(elData);
        // 출력 (뿌리다) ↑
    }
});

