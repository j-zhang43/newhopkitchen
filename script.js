function clickDefualt(){document.getElementById("defaultOpenMenu").click();}
//gallery tabs
document.getElementById("galleryButton1").onclick = function Gallery1(){
  document.getElementById("gallerySeclection1").style.display = "block";
  document.getElementById("gallerySeclection2").style.display = "none";
  document.getElementById("gallerySeclection3").style.display = "none";
}
document.getElementById("galleryButton2").onclick = ()=>{
  document.getElementById("gallerySeclection1").style.display = "none";
  document.getElementById("gallerySeclection2").style.display = "block";
  document.getElementById("gallerySeclection3").style.display = "none";
}
document.getElementById("galleryButton3").onclick = ()=>{
  document.getElementById("gallerySeclection1").style.display = "none";
  document.getElementById("gallerySeclection2").style.display = "none";
  document.getElementById("gallerySeclection3").style.display = "block";
}
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  
  if(document.getElementById("tabMenu").onclick){
    clickDefualt();
  }
  if(document.getElementById("tabGallery").onclick){
    document.getElementById("gallerySeclection1").style.display = "block";
    document.getElementById("gallerySeclection2").style.display = "none";
    document.getElementById("gallerySeclection3").style.display = "none";
  }
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function openCityMenu(evts, cityNameMenu) {
  // Declare all variables
  var j, tabcontentMenu, tablinksMenu;

  // Get all elements with class="tabcontent" and hide them
  tabcontentMenu = document.getElementsByClassName("tabcontentMenu");
  for (j = 0; j < tabcontentMenu.length; j++) {
    tabcontentMenu[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinksMenu = document.getElementsByClassName("tablinksMenu");
  for (j = 0; j < tablinksMenu.length; j++) {
    tablinksMenu[j].className = tablinksMenu[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityNameMenu).style.display = "block";
  evts.currentTarget.classNames += " active";
}
//home menu tabs 
document.getElementById("imageMenuTabs1").onclick = ()=>{document.getElementById("tabMenu").click();}

document.getElementById("imageMenuTabs2").onclick = ()=>{
  document.getElementById("tabMenu").click();
  document.getElementById("imageMenu2").click();
}
document.getElementById("imageMenuTabs3").onclick = ()=>{
  document.getElementById("tabMenu").click();
  document.getElementById("imageMenu3").click();
}
document.getElementById("imageMenuTabs4").onclick = ()=>{
  document.getElementById("tabMenu").click();
  document.getElementById("imageMenu4").click();
}







