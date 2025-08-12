🏠 SmartHouse - Sistema de Automação Residencial
📋 Descrição
Projeto de automação para controle e monitoramento de três ambientes da casa: Garagem, Sala de Estar e Quarto. Interface web responsiva criada com HTML, CSS e JavaScript para simular e controlar dispositivos conectados.

🚪 Ambientes e Funcionalidades
1️⃣ Garagem
Componentes:

2 Servo Motores (Portão Basculante e Social)

1 LED (Luz da Garagem)

1 Sensor de Movimento PIR

Funcionalidades:

Sensor PIR detecta movimento e acende a luz por 5 segundos.

Portão Social: ao abrir, acende a luz; após 5 segundos, fecha o portão e apaga a luz.

Portão Basculante: ao abrir, acende a luz; ao fechar, apaga a luz.

Dashboard com botões para abrir/fechar portões e interruptor da luz.

Exibição em tempo real do status dos portões e da luz.

2️⃣ Sala de Estar
Componentes:

1 LED (Luz da Sala)

2 Módulos Relé (Ar-condicionado e Umidificador)

Sensor de Temperatura e Umidade (simulado)

Funcionalidades:

Exibição elegante da temperatura (°C) e umidade (%) atualizadas a cada 3 segundos.

Controle automático do ar-condicionado e umidificador conforme condições climáticas.

Controles manuais para luz, ar-condicionado e umidificador.

3️⃣ Quarto
Componentes:

1 LED (Luz do Quarto)

1 Módulo Relé (Tomada Inteligente)

Motor de Passo Bipolar com driver A4988 (Cortina)

Funcionalidades:

Botões para abrir e fechar a cortina com motor acionado por 5 segundos em cada sentido.

Controle da luz do quarto e tomada inteligente via interruptores.

Envio de comandos para backend via API REST para controlar o hardware.

🛠️ Tecnologias Utilizadas
Frontend: HTML, CSS e JavaScript para interface e lógica simulada.

Comunicação: API REST via fetch para envio de comandos ao backend.

Simulação: Sensores simulados para facilitar testes sem hardware real.

