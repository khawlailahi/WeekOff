$("#menu-toggle").click(function() {
      $("#wrapper").toggleClass("toggled");
    });
var cart=$('.active-wear')

 var button=document.getElementsByTagName('button')
 for(butt of button){
 	butt.addEventListener("click", (e)=>{
		var parent = e.target.parentNode;
		console.log(parent)
		
		localStorage.setItem("product",parent.outerHTML)
		
 	});
 }
 