import { Link } from "lucide-react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";


export function NotFound() {

	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>404 - Página Não Encontrada</Heading>
					<p>Opa! Parece que a pagina que voce esta tentando acessasr nao existe. Talvez ela tenha tirado ferias, resolvido explorar o universa ou se perdido em algum lugar entre dois buracos negros.</p>
					<p>Mas calma, voce nao esta perdido no espaco (ainda). Da pra voltar  em seguranca para <a href="/">pagina principal</a> ou {'  '} <a href="history">para o historico</a> - ou pode ficar por aqui e fingir que achou uma pagina secreta que so os exploradores mais legais conseguem acessar.</p>
					<p>Se vocec acha que essa pagina deveria existir (ou se quiser bater papo sobre viagem no tempo e buracos de minhoca), e so entrar contato. Caso contrario, use o menu para voltar ao mundo real.</p>
					<p>Enquanto isso, fica aqui uma reflexao: "Se uma pagina nao existe na internet, sera que ela existiu de verdade?" 🤔</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
};

