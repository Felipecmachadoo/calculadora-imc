export function calculateIMC(weight: number, height: number): number {
  return weight / (height * height);
}

export function IMCResult(imc: number): string {
  if (imc < 17) {
    return "Muito abaixo do peso";
  } else if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
}
