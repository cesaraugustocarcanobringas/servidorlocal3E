    function encriptado() {
        let areaescribir = document.getElementById("areaescribir").value;
        let textoRa = document.getElementById("textoRa");
        let textoRb = document.getElementById("textoRb");
        let lupita = document.getElementById("lupita");

        let textoCifrado = areaescribir
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");
    
        if( document.getElementById("areaescribir").value.length !=0) {
            document.getElementById("areaescribir").value = textoCifrado;
            lupita.src ="./imagen/sonrisa.png";
            textoRa.textContent = "Texto encriptado con éxito";
            textoRb.textContent = "";
            
        } else{
            lupita.src ="./imagen/mario.png";
            textoRa.textCintent = "Ningun mensaje fue encontrado";
            textoRb.textContent = "ingrese el texto que desea encriptar o desencriptar";
            alert("ingresa algun texto");
            
        }
    }

