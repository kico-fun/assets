
var docHeight=document.documentElement.clientHeight || document.body.clientHeight;
var height=docHeight-200;
var width=750;
function popup(url,width,height){
    var top = (window.screen.height-30-height)/2;       //获得窗口的垂直位置;
    var left = (window.screen.width-10-width)/2;        //获得窗口的水平位置;
    window.open(url,'video','height='+height+',,innerHeight='+height+',width='+width+',innerWidth='+width+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
function popPlay(id){
    popup('/api/play?id='+id,videoWidth,videoHeight);
    return false;
}
