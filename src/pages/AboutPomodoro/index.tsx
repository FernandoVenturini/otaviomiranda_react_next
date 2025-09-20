import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";


export function AboutPomodoro() {

	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>A Tecnica Pomodoro 🍅</Heading>

					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed distinctio voluptas reprehenderit possimus illum nesciunt perferendis veritatis, dolore rem doloribus et dicta totam magnam dolores ex facilis voluptate ea velit?</p>

					<h2>Como funciona o Pomodoro tradicional?</h2>
					<ul>
						<li><strong>1. Defina uma tarefa</strong> que voce desejaa realizar.</li>
						<li><strong>2. Trabalhe nela por 25 minutos</strong> sem interrupcao.</li>
						<li><strong>3. Faca uma pausa curta de 5 minutos</strong></li>
						<li><strong>4. A cada 4 ciclos, faca uma pausa longa</strong>{' '} (geralmente 15 a 30 minutos).</li>

						<h2>Mas no <strong>Chronos Pomodoro</strong> tem um diferencial 🚀</h2>

						<p>Nosso app segue o conceito original, mas com algumas melhorias e personalizacoes pra deixar o processo ainda mais eficiente:</p>

						<h3>🔁 Ciclos organizados em sequencia</h3>
						<p>A cada ciclo completado, uma nova task e adicionada automaticamente ao seu historico, e o app ja sugere o proximo ciclo (foco e descanso).</p>
						<p><strong>Nosso padrao:</strong></p>
						<ul>
							<li>Ciclos <strong>impares</strong>: Trabalho (foco).</li>
							<li>Ciclos <strong>pares</strong>: Descanso curto.</li>
							<li>Ciclos <strong>8</strong>: Descanso longo especial, pra resetar o ciclo completo.</li>
						</ul>

						<h3>🍅 Visualizacao dos ciclos</h3>
						<p>Logo abaixo do cronometro, voce vera bolinhas coloridas representando os ciclos:</p>
						<ul>
							<li>🟡 Amarelo: Ciclo de trabalho (foco).</li>
							<li>🟢 Verde: descanso curto.</li>
							<li>🟣 Azul: Descanso longo (aparece a cada 8 ciclos).</li>
						</ul>

						<p>Assim, voce sempre sabe em que parte do processo esta e o que vem a seguir. Nao precisa mais anotar no papel ou ficar calculando de cabeca!</p>

						<h3>📊 Historico automatico</h3>
						<p>Todas as suas tarefas e ciclos concluidos ficam salvos no {' '} <a href="/history">historico</a>, com status de completas ou interrompidas. Assim, voce consegue acompanhar sua evolucao ao longo do tempo.</p>

						<h2>Por que usar o Chronos Pomodoro?</h2>
						<ul>
							<li>✅ Organize seu foco com clareza.</li>
							<li>✅ Trabalhe e descanse na medida certa.</li>
							<li>✅ Personalize seus proprios ciclos e tempos.</li>
							<li>✅ Acompanhe seu historico automaticamente.</li>

							<p><strong>Prontro pra focar?</strong> Bora la{' '} <a href="/">voltar para a pagina inicial</a> e iniciar seus Pomodoros! 🍅 🚀</p>

							<p><em>"Foco total, sem pressa, sem pausa, so vai!"</em> 💪🧘‍♂️</p>
						</ul>
					</ul>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
};

