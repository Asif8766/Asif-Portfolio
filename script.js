console.log("script running...")
document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.close').style.display='none'
    }

    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
        document.querySelector('.close').style.display='inline'   
            },300);    }
})


// qaedx
document.getElementById("downloadButton").addEventListener("click", function() {
    var filename = "dec.pdf";
    var cvContent = "<html><head><title></title></head><body>kutgfhjhgghvghghjg</body></html>";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(cvContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });
  
  document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "contact.html"; // Replace with the URL or file path of your second page
  });
  

  // 


  // Example data base