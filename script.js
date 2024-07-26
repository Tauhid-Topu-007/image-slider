var photoes=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg"];
var imgTag=document.querySelector("img");


count=0;
function next(){
    count++;
    if(count>=photoes.length){
        count=0;
        imgTag.src=photoes[count];
    }
    else{
        imgTag.src=photoes[count];
        // count++;
    }

}

function prev(){
    count--;
    if(count<0){
        count=photoes.length-1;
        imgTag.src=photoes[count];
    }
    else{
        imgTag.src=photoes[count];
        // count++;
    }

}
