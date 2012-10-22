
     
            var oldMouse = null;
              
            function tester() {
     
                var mouseDragMe = document.getElementById("mouseDragMe");
              
                mouseDragMe.onmousemove = handleMouseMove;
     
                mouseDragMe.onmousedown = function(ev) {
     
                    ev = ev || window.event;
     
                    oldMouse = { 
											x : ev.clientX, 
											y : ev.clientY 
										};
     
                }
     
                mouseDragMe.onmouseup = function(ev) { 
									oldMouse = null; 
								}
     
            }
              
            function handleMouseMove(ev){
     
                ev = ev || window.event;
              
                var results = document.getElementById("results");
     
                if(oldMouse) {
     
                    results.innerHTML =
     
                        "Old (X: " + oldMouse.x + " Y: " + oldMouse.y + ") " +
     
                        "New (X: " + ev.clientX + " Y: " + ev.clientY + ")";
     
                    oldMouse = { 
											x : ev.clientX, 
											y : ev.clientY 
										};
     
                }
     
            }
     
     