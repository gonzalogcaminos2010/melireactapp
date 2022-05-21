import './Left.css'
function Left() {
        //get mercadolibre credentials
        // const grant_type = 'authorization_code'
        // const client_id = '619926955204064'
        // const client_secret = 'tT4GKxiw728FBy3JJsFwd0JZmfmzpjnu'
        // const code = 'TG-6287cd332c71ce00133f380f-370993848'
        // //const redirect_uri = 'https://granmeli.test'
   


    //render items from api get
    function loadActivity(){
        fetch("https://api.mercadolibre.com/categories/MLA1055", {
            "method": "GET",
            "headers": {
              "Authorization": "Bearer APP_USR-619926955204064-052013-a09d40a82a03f9747fc91ff1861b2675-370993848"
            }
          })
          .then((response) => response.json())  
          .then((producto) => console.log(producto));
    
            useEffect(()=>{loadActivity()})

    return (
    
   <><h1>qdqwd</h1></>
    )
}
}
export default Left