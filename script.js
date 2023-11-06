// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();


//formulario sucess












  
  // JavaScript para mostrar o modal de sucesso e o fundo escurecido
document.addEventListener("DOMContentLoaded", function () {
  const successMessage = document.getElementById("success-message"); // Selecione o elemento da mensagem de sucesso
  const modalBackground = document.createElement("div"); // Crie o fundo escurecido
  modalBackground.className = "modal-background";

  form.appendChild(modalBackground); // Adicione o fundo escurecido ao formulário

  form.addEventListener("submit", function (e) {
  

    // Aqui, você pode adicionar código para enviar os dados do formulário para o servidor, se necessário.

    // Exibir o modal de sucesso e o fundo escurecido
    successMessage.style.display = "block";
    modalBackground.style.display = "block";
  });

  modalBackground.addEventListener("click", function () {
    // Fechar o modal de sucesso e o fundo escurecido quando clicado no fundo escurecido
    successMessage.style.display = "none";
    modalBackground.style.display = "none";
  });
});



