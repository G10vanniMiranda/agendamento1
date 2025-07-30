'use client';

import { formatCep, formatCpf, formatCurrency, formatPhone } from "@/lib/mask";
import { useState } from "react";

export default function Home2() {
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [telefone, setTelefone] = useState(""); // Novo estado para o telefone

  // A lógica do handler permanece, mas agora ele chama a função importada
  function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCep(formatCep(e.target.value));
  }

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(formatCpf(e.target.value));
  }

  function handleSalarioChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSalario(formatCurrency(e.target.value));
  }

  // Novo handler para o telefone
  function handleTelefoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(formatPhone(e.target.value));
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-slate-200">
      <h1>Testes ai</h1>

      <input
        type="text"
        placeholder="CEP"
        value={cep}
        onChange={handleCepChange}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={handleCpfChange}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />
      <input
        type="text"
        placeholder="Salário"
        value={salario}
        onChange={handleSalarioChange}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />
      {/* Novo input para o telefone */}
      <input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={handleTelefoneChange}
        className="border-none bg-white p-2 rounded-md shadow-md"
      />

    </div>
  );
}
