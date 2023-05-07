const calcularIMC = () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura)) {
      document.getElementById("resultado").textContent = "Preencha os campos corretamente";
      return;
    }

    const imc = peso / (altura * altura);

    document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)}`;
  };

  document.getElementById("calcular").addEventListener("click", calcularIMC);
    
