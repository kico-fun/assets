var docHeight=document.documentElement.clientHeight || document.body.clientHeight;
var height=docHeight-200;
var width=750;

$('.open-video a').click(function(){
    return false
})

$('.open-video').click(function(){
    var type=$(this).attr('data-type');

    var oriWidth=parseInt($(this).attr('data-width'));
    var oriHeight=parseInt($(this).attr('data-height'));
    var id=$(this).attr('data-id');
    var poster=$(this).find('img').attr('src');
    var videoWidth=0;
    var videoHeight=0;

    if (oriWidth>oriHeight){
        if (oriWidth > width){
            videoWidth=width;
            videoHeight=(width/oriWidth)*oriHeight
        }else{
            videoWidth=oriWidth;
            videoHeight=oriHeight;
        }
    }else{
        if (height > oriHeight){
            videoWidth=oriWidth;
            videoHeight=oriHeight
        }else{
            videoWidth=(height/oriHeight)*oriWidth;
            videoHeight=height;
        }
        if (videoHeight<500){
            videoHeight=500;
            videoWidth=(500/oriHeight)*oriWidth;
        }
    }


    if (type=='toutiao'){
        popup('/api/play?id='+id,videoWidth,videoHeight);
        return false;
    }
    var player = videojs('my-video', {
        autoplay: 'muted',
        poster:poster,
        height:videoHeight,
        width:videoWidth
    });
});
$('#video-modal').on('shown.bs.modal', function (e) {
    var target = $(e.relatedTarget);
    var id=target.data('id');
    var poster=target.data('poster');
    var player = videojs('my-video');
    player.poster(poster);
    player.src({type: 'video/mp4', src: '/api/play?id='+id});
    player.ready(function() {
        player.play();
    });

})
$('#video-modal').on('hidden.bs.modal', function (e) {
    var player = videojs('my-video');
    player.ready(function() {
        player.pause();
    });
})
function popup(url,width,height){
    var top = (window.screen.height-30-height)/2;       //获得窗口的垂直位置;
    var left = (window.screen.width-10-width)/2;        //获得窗口的水平位置;
    window.open(url,'video','height='+height+',,innerHeight='+height+',width='+width+',innerWidth='+width+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
function popPlay(id){
    popup('/api/play?id='+id,videoWidth,videoHeight);
    return false;
}
