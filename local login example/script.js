document.getElementById("submit_button").addEventListener("click", function(event){
  event.preventDefault();
  login();
});

let bd_users = 
[
  ["chris","123"],
  ["cross","123"],
];

function login()
{
  let usr = document.getElementById("usr").value, psswd = document.getElementById("psswd").value, usr_validate = false;

  if(usr=="" || usr==null || usr==" " || psswd=="" || psswd==null || psswd==" ")
  {
    mssg("existen campos vacíos.");
  }else
  {
    bd_users.forEach((usuario) => {
      if(usuario[0]==usr && usuario[1]==psswd){usr_validate=true}
    });
    
    (usr_validate)?mssg("credenciales válidas."):mssg("credenciales inválidas");
  }
}

function mssg(mensaje)
{
  document.getElementById("mssg").value = mensaje;
  document.getElementById("mssg").style.opacity = "1";

  setTimeout(reset_mssg, 5000);

  function reset_mssg()
  {
    document.getElementById("mssg").value = " ";
    document.getElementById("mssg").style.opacity = "0";
  }
}