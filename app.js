window.onload = function()
{
    let searchbutton = document.getElementById("search");
    searchbutton.addEventListener("click",function() 
    {
        this.preventDefault();
        get('http://localhost/info2180-lab4/superheroes.php').then(response => {
            return response.text();
        })
        .then(response => {
            alert(response);
        })
    })
};