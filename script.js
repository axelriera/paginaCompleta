document.getElementById("registrarse").addEventListener('click',registro);
document.getElementById("inciarsesion").addEventListener('click',iniciarSesion);
var contenedorloginRegistro = document.querySelector(".loginRegistro");
var formularioLogin = document.querySelector(".formularioLogin");
var formularioRegistro = document.querySelector(".formularioRegistro");
var cajaTraseraLogin = document.querySelector('.cajatrasera-login');
var cajaTraseraRegistro = document.querySelector('.cajatrasera-registro');

function iniciarSesion(){
	formularioRegistro.style.display = "none";
	contenedorloginRegistro.style.left = "10px";
	formularioLogin.style.display = "block";
	cajaTraseraRegistro.style.opacity = "1";
	cajaTraseraLogin.style.opacity = "0";
}
function registro(){
	formularioRegistro.style.display = "block";
	contenedorloginRegistro.style.left = "410px";
	formularioLogin.style.display = "none";
	cajaTraseraRegistro.style.opacity = "0";
	cajaTraseraLogin.style.opacity = "1";
}

document.getElementById("entrar").addEventListener("click",ingresar);
var contenedor = document.querySelector('.imgIngresar');
var form = document.getElementById(".formularioLogin");


function ingresar()
{	
	var usuario = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
		if (usuario == 'admin' && pass == 'admin')
		{
			return true;	
		}
		else{
		alert("Usuario y pass incorrectos");
		return false;
	}
}

