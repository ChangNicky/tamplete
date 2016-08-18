window.onload=function(){
	var nav_ul=document.getElementById("nav_ul");
	var nav_a=nav_ul.getElementsByTagName("a");
	var bool=1;
	function getElementByClass(className){
		var allNodes=document.getElementsByTagName("*");
		for(var i=0;i<allNodes.length;i++)
		{
			if(allNodes[i].className==className)
				return allNodes[i];
		
		}
	
	}	
	var contents=document.getElementsByClassName("wrap content");			
	for(var i=0;i<nav_a.length;i++){
	
		nav_a[i].index=i;
		nav_a[i].onclick=function(){
			if(this.className=="nav_font")
					return;
			var oldPos,newPos=this.index;
			for(var j=0;j<nav_a.length;j++){
				
				if(nav_a[j].className=="nav_font"){
					oldPos=j;
			
				}
			
			}
			if(bool==1)
			{
				bool=0;
				fade(oldPos,newPos,0);
				height(oldPos,newPos,0);
			}
		}
		
	}
	function fade(oldPos,newPos,opa){
		if(opa==0)
		{	
			nav_a[oldPos].className="";
			nav_a[newPos].className="nav_font";
			contents[newPos].style.display="";
		
		}
		opa+=10;
		if(opa<=90){
		
			contents[oldPos].style.opacity=(90-opa)/100;
			contents[oldPos].style.filter="alpha(opacity="+(90-opa)+")";
			contents[newPos].style.opacity=opa/100;
			contents[newPos].style.opacity="alpha(opacity="+opa+")"
			window.setTimeout(function(){fade(oldPos,newPos,opa);},50);
			
		}
		else{
			
			contents[oldPos].style.display="none";
			bool=1;
		}
	
	}
	function height(oldPos,newPos,top){
		top+=10;
		if(top<=359){
			contents[newPos].style.marginTop=(359-top)+"px";
			contents[oldPos].style.marginTop=-top+"px";
			window.setTimeout(function(){height(oldPos,newPos,top);},10);
		}
		else
			{
				contents[oldPos].style.display="none";
				bool=1;
			
			}
		
	
	}
	var top=(document.documentElement.scrollHeight >document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight; 
	var boxtop=top-150
	document.getElementById("box").style.height=boxtop+"px"
	//console.log(top)
	footer=document.getElementById("footer")
	footer.style.marginTop=(top-boxtop-58)/2+"px"
	console.log(boxtop,top);
	var music=document.getElementById("audio");
	document.getElementById("off").onmousedown=function(){
		music.pause();
	}
	document.getElementById("on").onmousedown=function(){
		music.play();
	}
}





























