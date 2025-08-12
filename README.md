SMARTHOUSE- Sistema de Automação Residencial
Descrição
Projeto de automação residencial para controle de três ambientes: garagem, sala de estar e quarto. Desenvolvido com interface web (HTML, CSS, JavaScript) para monitoramento e controle dos dispositivos de cada cômodo.

AMBIENTES E FUNCIONALIDADES
1. GARAGEM
Componentes:

2 Servo Motores (portão basculante e social)

1 LED (luz da garagem)

1 Sensor de movimento PIR

FUNCIONALIDADES:

Sensor PIR: detecta movimento e liga a luz da garagem por 5 segundos.

Portão social: ao abrir, acende a luz; após 5 segundos, fecha o portão e apaga a luz.

Portão basculante: ao abrir, liga a luz; ao fechar, desliga a luz.

Dashboard com botões para abrir/fechar portões e interruptor para a luz da garagem.

Exibição de status dos portões e luz.

2. SALA DE ESTA:
   COMPONENTES

1 LED (luz da sala)

2 Módulos Relé (ar-condicionado e umidificador)

1 Sensor de temperatura e umidade (simulado)

Funcionalidades:

Exibição clara e estilizada da temperatura (°C) e umidade (%).

Controle automático: liga/desliga ar-condicionado e umidificador conforme temperatura e umidade.

Controles manuais para luz, ar-condicionado e umidificador.

3. QUARTO
COMPONENTES

1 LED (luz do quarto)

1 Módulo Relé (tomada inteligente)

1 Motor de Passo Bipolar com driver A4988 (cortina)

FUNCIONALIDADES:

Controle via web para abrir/fechar cortina acionando o motor por 5 segundos em cada direção.

Botões para controlar luz do quarto e tomada inteligente.

Integração do frontend com backend para envio de comandos REST ao hardware.

TECNOLOGIAS USADAS 
HTML, CSS e JavaScript para interface web e lógica de controle simulada.

Comunicação via HTTP POST (fetch API) para enviar comandos ao backend (ex: ESP32).

Simulação dos sensores no frontend para testes sem hardware real.
