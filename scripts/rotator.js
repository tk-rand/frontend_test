document.addEventListener('DOMContentLoaded', function(){
    createSlideShow();    
});

function createSlideShow(){
    var imageArray = document.getElementsByTagName('img');
    var rotator = document.getElementById('rotator');
    var rotatorTitle = document.getElementById('rotator-title');
    var paragraphs = document.getElementsByTagName('p');
    var titles = document.getElementsByTagName('h4');
    var rotatorObjs = [];

    for(var i = 0; i < imageArray.length; i++){
        rotatorObjs[i] = {
            'image': imageArray[i],
            'description': paragraphs[i + 2],
            'title': titles[i]    
        };
    }
    
    var imgNum = 1;
    //this ensures that I start with an image and don't have to wait 3 seconds, I also don't see the first image for 6 seconds
    rotator.innerHTML = rotatorObjs[0].title.outerHTML;
    rotator.innerHTML += rotatorObjs[0].description.outerHTML;
    rotator.innerHTML += rotatorObjs[0].image.outerHTML;
    
    window.setInterval(function(){
        if(imgNum == 4){
            imgNum = 0;
        }
        
        rotator.setAttribute('class', 'faded');
        //have to get the outerHTML attribute because the actual html collection object can't be put right back in the dom
        rotator.innerHTML = rotatorObjs[imgNum].title.outerHTML;
        rotator.innerHTML += rotatorObjs[imgNum].description.outerHTML;
        rotator.innerHTML += rotatorObjs[imgNum].image.outerHTML;
        //this ensures that the document actually registers that the faded class is there, otherwise it executes to fast and the css
        //transition is never called.
        window.setTimeout(function(){
            rotator.setAttribute('class','shown');          
        },10);
        imgNum++;        
    }, 3000);   
} 