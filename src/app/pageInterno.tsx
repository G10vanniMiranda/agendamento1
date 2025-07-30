'use client';

import { useState } from "react";

export default function Home1() {
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");

  // Função para aplicar a máscara de CEP (XXXXX-XXX)
  function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    setCep(value.slice(0, 9)); // Limita a 9 caracteres (incluindo o "-")
  }

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value.slice(0, 14));
  }

  function handleSalarioChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, "");
    value = (Number(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setSalario(value);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-slate-200">
      <h1>Testes ai</h1>

      <input
        type="text"
        placeholder="cep"
        value={cep}
        onChange={handleCepChange}
        maxLength={9}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />
      <input
        type="text"
        placeholder="cpf"
        value={cpf}
        onChange={handleCpfChange}
        maxLength={14}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />

      <input
        type="text"
        placeholder="salario"
        value={salario}
        onChange={handleSalarioChange}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />

    </div>
  );
}
