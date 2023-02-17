 
    fetch("actors.json")
      .then((res) => res.json())
      .then((data) => handleActorList(data));
    
    function handleActorList(data) {
      console.log(data);
      data.forEach(showActor);
    }
    
    function showActor(actor) {
      const template = document.querySelector("template").content;
      const clone = template.cloneNode(true);
    
      clone.querySelector("h2").textContent = actor.fullname;
      clone.querySelector("p").textContent = actor.movie;
      clone.querySelector("p").classList.add("hidden");
      
      clone.querySelector("article").addEventListener("click",showMovie);  
      const parent = document.querySelector("section");
      
      parent.appendChild(clone);
      
    //   OnClick();
    //we should not call a function, we should just reference it in another function

         
    }

    // function OnClick(){
    //     console.log("klik")
    //     document.querySelector(".name").addEventListener("click",showMovie);
        
    //     }
        
        function showMovie(evt){
           console.log(evt) 
           evt.currentTarget.querySelector(".text").classList.toggle("hidden");
         } 
 



