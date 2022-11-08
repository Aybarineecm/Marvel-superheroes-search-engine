 

    var finalres= document.getElementById("results");
    var helping= document.getElementById("searchBar");
    const httpRequest = new XMLHttpRequest(); 
    let url = "http://localhost/info2180-lab4/superheroes.php";
    let searchbutton = document.getElementById("search");
    searchbutton.addEventListener("click",function(e)
    
    {
        e.preventDefault();
        function doSomething() 
      { 
        
        if (httpRequest.readyState === XMLHttpRequest.DONE)
         {
             if (httpRequest.status === 200)
              { 
                let response = httpRequest.responseText;
                finalres.innerHTML=response;
                console.log(helping.value);
              } 
                else
                 { 
                    finalres.innerHTML= ('There was a problem with the request.');  
                 } 
            } 
        }
        httpRequest.onreadystatechange = doSomething; 
        httpRequest.open('GET', url+ "?query=" + helping.value); 
        httpRequest.send();
    }
    )

