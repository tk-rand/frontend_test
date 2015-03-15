if(document.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
        createTabsNavigation();  
    });
}else{
    //If we get here then we already know it's IE so might as well just do what works in IE 8 as well as 9 even though 9 supports the
    //DOMContentLoaded event listener
    document.onreadystatechange = function(){
        if(document.readyState == "interactive"){
            createTabsNavigation();        
        }
    };
} 

var currentTab = '';


function createTabsNavigation(){
    //set default shown tab
    document.getElementById('tab-one').style.display = 'block';
    document.getElementsByClassName('tab-one')[0].className += " active";
    currentTab = 'tab-one';
    
    var tabList = document.getElementsByTagName('li');
    
    for(var n in tabList){
        if(tabList.hasOwnProperty(n)){
            if(tabList[n].tagName === 'LI'){
                if(document.addEventListener){
                    tabList[n].addEventListener("click", navigateTabs);    
                }else{
                    tabList[n].attachEvent("click", navigateTabs);    
                }
            }
        }
    }   
}


function navigateTabs(event){
    var activeTab = event.srcElement.getAttribute('href');
    activeTab = activeTab.slice(1,activeTab.length);
    
    //hide old tab remove active class from Li
    document.getElementsByClassName(currentTab)[0].className = currentTab;
    document.getElementById(currentTab).style.display = 'none';
    
    //show new tab and add active class to li
    document.getElementById(activeTab).style.display = 'block';
    document.getElementsByClassName(activeTab)[0].className += " active";
    
    currentTab = activeTab;
}
