var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = 0;
    if (numero > slide.length - 1)
    numero = slide.length - 1;
    document.getElementById("slide").src = slide[numero];
	document.getElementById("txt-png").innerText = title[numero]
}