var circle=document.querySelector(".circle");
var t=40;
var left=40;
var bottom=45;
var right=48;
document.addEventListener("keypress",function(e){
    if(e.key=="w"){
        if(t>0){
            t--;
            bottom++;
        }
        circle.style.bottom="unset";
        circle.style.top=t+"%" ;
    }
    if(e.key=="s"){
        if(bottom>0){
            bottom--;
            t++;
        }
        circle.style.top="unset";
        circle.style.bottom=bottom+"%";
        
    }
    if(e.key=="a"){
        if(left>0){
            left--;
            right++;
        }
        circle.style.right="unset";
        circle.style.left=left+"%";
        
    }
    if(e.key=="d"){
        if(right>0){
            left++;
            right--;
        }
        circle.style.left="unset";
        circle.style.right=right+"%";
        
    }

})