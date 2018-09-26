window.addEventListener('load',function(){
    

    var jdcategory=new Jdcategory();
    
    jdcategory.initLeftSlide();
    jdcategory.initRightSlide();
    jdcategory.leftCeiling();

    

    

});

 var Jdcategory=function () {

   }
   Jdcategory.prototype={
    leftCeiling:function(){

        var ul=document.querySelector('.category-left ul');
    
        var lis=ul.children;
    
    
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].classList
        };
    
        ul.addEventListener('click',function(e){
            e=e||window.event;
            var li=e.target.parentNode;
            var index=li.index;
            var liHeight=li.offsetHeight;   
            var moveHeight=-index*liHeight;   
            //得出的结果是溢出隐藏的高度,移动的最大距离只能是这个,不然会跑出去了
            var maxMoveHeight=document.querySelector('.category-left').offsetHeight-ul.offsetHeight;
            console.log(moveHeight);
            console.log(maxMoveHeight);           
            if(moveHeight>maxMoveHeight){            
                ul.parentNode.parentNode.style.transform='translateY('+moveHeight+'px)';
            }else{
                ul.parentNode.parentNode.style.transform='translateY('+maxMoveHeight+'px)';   
            }

            ul.parentNode.parentNode.style.transitionDuration='500ms';
          for(var i=0;i<lis.length;i++){
                lis[i].classList.remove('active');
            }
            li.classList.add('active');
    
    
        });
    
    },
    initLeftSlide:function(){
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });

    },

    initRightSlide:function(){
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    }

   };

