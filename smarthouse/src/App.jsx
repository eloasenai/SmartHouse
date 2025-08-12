import { useState, useEffect } from "react";
import "./App.css";

function Garagem() {
  const [portaoSocialAberto, setPortaoSocialAberto] = useState(false);
  const [portaoBasculanteAberto, setPortaoBasculanteAberto] = useState(false);
  const [luzGaragemLigada, setLuzGaragemLigada] = useState(false);

  const abrirPortaoSocial = () => {
    if (!portaoSocialAberto) {
      setPortaoSocialAberto(true);
      setLuzGaragemLigada(true);

      setTimeout(() => {
        setPortaoSocialAberto(false);
        setLuzGaragemLigada(false);
      }, 5000);
    }
  };

  const alternarPortaoBasculante = () => {
    if (!portaoBasculanteAberto) {
      setPortaoBasculanteAberto(true);
      setLuzGaragemLigada(true);
    } else {
      setPortaoBasculanteAberto(false);
      setLuzGaragemLigada(false);
    }
  };

  // Simulação PIR
  useEffect(() => {
    const intervalo = setInterval(() => {
      setLuzGaragemLigada(true);
      setTimeout(() => {
        if (!portaoSocialAberto && !portaoBasculanteAberto) {
          setLuzGaragemLigada(false);
        }
      }, 5000);
    }, 15000);

    return () => clearInterval(intervalo);
  }, [portaoSocialAberto, portaoBasculanteAberto]);

  return (
    <div className="ambiente">
      <h2>Garagem</h2>
      <button onClick={abrirPortaoSocial}>Abrir Portão Social</button>
      <button onClick={alternarPortaoBasculante}>Abrir Portão Basculante</button>
      <label>
        <input
          type="checkbox"
          checked={luzGaragemLigada}
          onChange={(e) => setLuzGaragemLigada(e.target.checked)}
        />
        Luz da Garagem
      </label>
      <div>Status Portão Social: {portaoSocialAberto ? "Aberto" : "Fechado"}</div>
      <div>Status Portão Basculante: {portaoBasculanteAberto ? "Aberto" : "Fechado"}</div>
      <div>Status Luz: {luzGaragemLigada ? "Ligada" : "Desligada"}</div>
    </div>
  );
}

function Sala() {
  const [luzSala, setLuzSala] = useState(false);
  const [arCond, setArCond] = useState(false);
  const [umidificador, setUmidificador] = useState(false);
  const [temperatura, setTemperatura] = useState(25);
  const [umidade, setUmidade] = useState(50);

  const controleTemperatura = (temp) => {
    if (temp >= 28) setArCond(true);
    else if (temp < 20) setArCond(false);
  };

  const controleUmidade = (umi) => {
    if (umi <= 20) setUmidificador(true);
    else if (umi >= 80) setUmidificador(false);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      const novaTemp = Math.min(Math.max(temperatura + (Math.random() * 2 - 1), 15), 35);
      const novaUmi = Math.min(Math.max(umidade + (Math.random() * 4 - 2), 10), 90);
      setTemperatura(novaTemp);
      setUmidade(novaUmi);
      controleTemperatura(novaTemp);
      controleUmidade(novaUmi);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [temperatura, umidade]);

  return (
    <div className="ambiente">
      <h2>Sala de Estar</h2>
      <label>
        <input type="checkbox" checked={luzSala} onChange={(e) => setLuzSala(e.target.checked)} />
        Luz da Sala
      </label>
      <label>
        <input type="checkbox" checked={arCond} onChange={(e) => setArCond(e.target.checked)} />
        Ar-condicionado
      </label>
      <label>
        <input
          type="checkbox"
          checked={umidificador}
          onChange={(e) => setUmidificador(e.target.checked)}
        />
        Umidificador
      </label>
      <div>Temperatura: {temperatura.toFixed(1)} °C</div>
      <div>Umidade: {umidade.toFixed(1)} %</div>
    </div>
  );
}

function Quarto() {
  const [luzQuarto, setLuzQuarto] = useState(false);
  const [tomada, setTomada] = useState(false);

  const abrirCortina = () => {
    alert("Cortina abrindo por 5 segundos (simulação)");
  };

  const fecharCortina = () => {
    alert("Cortina fechando por 5 segundos (simulação)");
  };

  return (
    <div className="ambiente">
      <h2>Quarto</h2>
      <button onClick={abrirCortina}>Abrir Cortina</button>
      <button onClick={fecharCortina}>Fechar Cortina</button>
      <label>
        <input type="checkbox" checked={luzQuarto} onChange={(e) => setLuzQuarto(e.target.checked)} />
        Luz do Quarto
      </label>
      <label>
        <input type="checkbox" checked={tomada} onChange={(e) => setTomada(e.target.checked)} />
        Tomada Inteligente
      </label>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Garagem />
      <Sala />
      <Quarto />
    </div>
  );
}
