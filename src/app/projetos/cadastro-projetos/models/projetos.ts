import { Situacao } from 'src/app/projetos/cadastro-projetos/models/situacao.enum';
export class Projetos {
  id?: number;
  descricao!: string;
  viabilidade!: string;
  dataInicio!: string;
  dataFim!: string;
  situacao!: Situacao;
  valorDaExecucao!: string;
  nomeDoResponsavel!: string;
}
