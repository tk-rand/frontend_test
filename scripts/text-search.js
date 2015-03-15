if(document.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
        var form = document.getElementById('search-form');
        form.addEventListener('submit', searchText);
    });
}else{
    //If we get here then we already know it's IE so might as well just do what works in IE 8 as well as 9 even though 9 supports the
    //DOMContentLoaded event listener
    document.onreadystatechange = function(){
        if(document.readyState == "interactive"){
            var form = document.getElementById('search-form');
            form.attachEvent('submit', searchText);      
        }
    };
}

function searchText(event){
    if(event.preventDefault){ event.preventDefault();}
    
    var searchTerm = document.getElementById('search_input').value;
    var textContainer = document.getElementById('search_text');
    var resultsContainer = document.getElementById('search-results');
    var text = '';
    
    for(var n in textContainer.childNodes){
        if(textContainer.childNodes.hasOwnProperty(n)){
            text += textContainer.childNodes[n].textContent;
        }
    }
    
    var curIndex = 0;
    var numOccurances = 0;
    var length = text.length;
    //I personally really dislike when searches are case specific. 
    searchTerm = searchTerm.toLowerCase();
    while(curIndex < length ){
       if(text.indexOf(searchTerm, curIndex) != -1){
           curIndex = text.indexOf(searchTerm, curIndex + 1);
           if(curIndex == -1){
              curIndex = length; 
           }else{
               numOccurances++;
           }
       }else{
           curIndex = length;
       }
    }
    resultsContainer.innerHTML = "Found "+ numOccurances +" occurances of the word <em>&quot" + searchTerm + "&quot</em> in the below text.";
    
    return false;
}
