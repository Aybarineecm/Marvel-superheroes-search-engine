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
                let response = httpRequest.responseText; alert(response); 
              } 
                else
                 { 
                    alert('There was a problem with the request.');  
                } 
            } 
        }
        httpRequest.onreadystatechange = doSomething; 
        httpRequest.open('GET', url); 
        httpRequest.send();
    })

