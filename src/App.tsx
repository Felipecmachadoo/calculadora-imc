import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";
import { calculateIMC, IMCResult } from "./lib/imc";
import { formatNumber } from "./lib/utils";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [IMCData, setIMCData] = useState<null | {
    weight: number;
    height: number;
    IMC: number;
    IMCResult: string;
  }>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Get data from form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    // handle empty fields
    const { weight, height } = data;
    if (!weight || !height) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // parse and handle strings to numbers
    const weightNumber = parseFloat(weight.replace(",", "."));
    const heightNumber = parseFloat(height.replace(",", ".")) / 100;

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }
    // handle invalid numbers
    if (weightNumber < 2 || weightNumber > 400) {
      alert("Por favor, insira valores maiores que 2kg e menores que 400kg.");
    }

    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert("Por favor, insira valores maiores que 50cm e menores que 2,5m.");
    }
    // calculate IMC
    const IMC = calculateIMC(weightNumber, heightNumber);
    const IMCResultString = IMCResult(IMC);
    console.log(IMC);
    console.log(IMCResultString);

    // set result
    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      IMC: IMC,
      IMCResult: IMCResultString,
    });
    //clear form fields

    console.log("Form submitido");
  }
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input name="weight" className="mt-1" type="text" id="weight" />
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input name="height" className="mt-1" type="text" id="height" />
          </div>

          <Button type="submit">Calcular</Button>
        </form>
      </section>
      <section id="result" className="py-10 px-4 h-40">
        {IMCData ? (
          <ResultsTable IMCData={IMCData} />
        ) : (
          <p className="text-center text-neutral-400 text-xl">
            Saiba agora se está no seu peso ideal!
          </p>
        )}
      </section>
      <section id="referente-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
