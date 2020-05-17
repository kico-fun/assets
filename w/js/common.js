
function popup(url,width,height){
    var top = (window.screen.height-30-height)/2;       //获得窗口的垂直位置;
    var left = (window.screen.width-10-width)/2;        //获得窗口的水平位置;
    window.open(url,'video','height='+height+',,innerHeight='+height+',width='+width+',innerWidth='+width+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
function popPlay(id,width,height){
    var oriWidth=width;
    var oriHeight=height;
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
    popup('/api/play?id='+id,videoWidth,videoHeight);
    return false;
}
