# Academia Navigator

Quero criar o FRONTEND completo de uma plataforma educacional pessoal chamada:

disciplinIA

IMPORTANTE:

Nesta etapa, crie APENAS o frontend.

Não criar backend.

Não criar Supabase.

Não criar banco de dados.

Não criar autenticação real.

Não criar APIs reais.

Use dados mockados e React state/local state para que a interface seja navegável e demonstre todas as principais funcionalidades.

Depois o projeto será exportado para VS Code e conectado a um backend próprio e a um motor de processamento de documentos/IA.

==================================================

1. VISÃO DO PRODUTO

==================================================

A disciplinIA é uma plataforma pessoal para organizar e acompanhar toda a vida acadêmica de um estudante.

A proposta não é ser apenas:

- calendário;

- lista de tarefas;

- calculadora de notas;

- pomodoro;

- dashboard acadêmico.

A proposta central é:

"Transformar documentos, informações acadêmicas e compromissos espalhados em uma visão única da graduação e, a partir disso, ajudar o estudante a decidir como organizar seus estudos todos os dias."

A plataforma deve reunir:

- documentos acadêmicos;

- programas de disciplinas;

- cronogramas;

- grade horária;

- aulas;

- conteúdos;

- provas;

- trabalhos;

- entregas;

- notas;

- créditos;

- faltas;

- planejamento de estudos;

- organização diária.

O objetivo é que o usuário sinta:

"Minha graduação inteira está organizada aqui e eu sei exatamente o que preciso fazer."

==================================================

2. PRINCÍPIO FUNDAMENTAL

==================================================

A IA organiza primeiro.

O usuário sempre mantém o controle.

Toda informação importada deve poder ser:

- visualizada;

- editada;

- corrigida;

- excluída;

- complementada manualmente.

Se o motor encontrar uma informação em um documento mas não souber classificá-la com segurança:

NÃO ignorar.

Mostrar:

"Informação encontrada — revisão necessária"

O usuário poderá:

- confirmar;

- editar;

- alterar categoria;

- ignorar.

Não inventar informações ausentes.

==================================================

3. ESTILO VISUAL

==================================================

Quero uma plataforma educacional moderna, premium, limpa e séria.

Ela deve parecer um produto tecnológico real, não um template gerado por IA.

REFERÊNCIA DE SENSAÇÃO:

- Linear

- Notion

- Arc

- Raycast

- produtos modernos de produtividade

- plataformas educacionais premium

Não copiar diretamente nenhum produto.

EVITAR COMPLETAMENTE:

- gradients exagerados;

- glassmorphism;

- glow;

- sombras fortes;

- excesso de cards arredondados;

- dezenas de badges;

- ícones decorativos;

- emojis;

- dashboards genéricos de SaaS;

- gráficos sem necessidade;

- elementos enormes;

- excesso de CTAs;

- frases de marketing;

- visual infantil;

- aparência de ERP acadêmico antigo.

PREFERIR:

- muito espaço em branco;

- fundo off-white ou cinza muito claro;

- texto quase preto;

- azul profundo / índigo como cor principal;

- bordas sutis;

- divisores;

- listas;

- tabelas;

- timelines;

- drawers;

- hierarquia tipográfica forte;

- alta densidade de informação sem poluição.

Usar fonte moderna como:

Geist

Inter

ou equivalente.

==================================================

4. STACK

==================================================

Utilizar:

- React

- TypeScript

- Tailwind CSS

- React Router ou equivalente

- Lucide Icons

- componentes reutilizáveis

Código simples e organizado.

Evitar overengineering.

==================================================

5. NAVEGAÇÃO

==================================================

Desktop:

Sidebar fixa à esquerda.

Logo:

disciplinIA

Navegação principal:

Visão Geral

Agenda

Planejamento

Grade Horária

Disciplinas

Graduação

Faltas

Uploads

Parte inferior:

Configurações

Não criar header global gigante.

Cada página possui seu próprio PageHeader.

Mobile:

Sidebar deve virar menu lateral ou navegação mobile apropriada.

==================================================

6. VISÃO GERAL — HOME PRINCIPAL

==================================================

Essa página é extremamente importante.

Ela representa a organização diária do aluno.

Ela deve responder imediatamente:

1. O que tenho hoje?

2. Qual é minha próxima aula?

3. Tenho prova ou entrega próxima?

4. O que devo estudar hoje?

5. Existe algo acadêmico que exige atenção?

6. Como estão minhas próximas semanas?

Header:

"Bom dia, Rafael"

Subtexto:

"Quinta-feira, 4 de setembro"

A ideia é que, futuramente, todas as manhãs o backend/motor organize automaticamente esta página.

--------------------------------------------------

6.1 SEU DIA

--------------------------------------------------

Criar uma timeline cronológica.

Exemplo:

08:00

Fundamentos Científicos e Modelagem para Eng. I

Aula

Espaços vetoriais

10:00

Introdução à Computação

Aula

Estruturas condicionais

12:00

Almoço / horário livre

14:00

Introdução ao Projeto na Engenharia

Aula

17:00

Estudo planejado

Introdução à Computação

45 minutos

18:00

Estudo planejado

Fundamentos

1h15

Diferenciar discretamente:

Aula

Prova

Entrega

Estudo planejado

Evento

A timeline deve combinar:

- grade horária;

- agenda;

- provas;

- entregas;

- planejamento de estudos.

--------------------------------------------------

6.2 EVENTOS IMPORTANTES MAIS PRÓXIMOS

--------------------------------------------------

Criar seção muito visível, sem ocupar espaço exagerado.

Título:

Próximos eventos importantes

Exemplo:

AMANHÃ

Lista de Computação

Entrega

18 SET

Prova de Fundamentos

23 SET

Projeto de Engenharia

Entrega

30 SET

Avaliação de Estática

Destacar proximidade, não usar cards enormes.

--------------------------------------------------

6.3 PLANO DE ESTUDOS DE HOJE

--------------------------------------------------

Mostrar:

"Seu plano de hoje"

Exemplo:

Introdução à Computação

Estruturas condicionais

45 min

Fundamentos

Autovalores

1h15

Texto:

"Carga planejada hoje: 2h"

Botão:

Ver planejamento

Permitir marcar sessões como:

Concluído

Não realizado

--------------------------------------------------

6.4 ATENÇÃO

--------------------------------------------------

Exibir apenas informações realmente relevantes.

Exemplo:

Fundamentos

17,8% de faltas

Estática

Média atual 5,4

Projeto

Entrega em 3 dias

Não criar dezenas de alertas.

--------------------------------------------------

6.5 PRÓXIMAS SEMANAS

--------------------------------------------------

Criar uma visão compacta:

Próximos 7 dias

Próximos 14 dias

Exemplo:

Semana atual

2 provas

3 entregas

8 aulas

7h30 de estudo planejado

Próxima semana

1 prova

2 entregas

10 aulas

9h de estudo planejado

Permitir:

Ver semana

==================================================

7. AGENDA

==================================================

A Agenda representa fatos e compromissos.

Ela NÃO é o planejamento inteligente de estudo.

Header:

Agenda

Visualizações:

Mês

Semana

Default:

Mês

Botão:

+ Novo evento

Mostrar:

- aulas;

- provas;

- entregas;

- trabalhos;

- atividades;

- eventos pessoais/manuais.

Todos os eventos são editáveis.

Ao clicar:

abrir drawer lateral.

Campos:

Título

Tipo

Disciplina

Data

Horário inicial

Horário final

Conteúdo

Peso da avaliação

Observações

Origem:

Importado de documento

Importado da grade

Adicionado manualmente

Botões:

Salvar

Excluir

Permitir criação manual.

Se possível:

drag-and-drop para mover eventos.

==================================================

8. UPLOADS

==================================================

Separar claramente:

A. DOCUMENTOS ACADÊMICOS

B. GRADE HORÁRIA

--------------------------------------------------

8.1 DOCUMENTOS ACADÊMICOS

--------------------------------------------------

Título:

Documentos acadêmicos

Descrição:

"Envie programas de disciplinas, planos de ensino, cronogramas e outros documentos acadêmicos."

Drag-and-drop.

Aceitar visualmente:

PDF

DOCX

Imagem

Texto

Botão:

Adicionar documento

Arquivos processados:

Programa — Fundamentos.pdf

Processado

04/09/2026

Plano — Estática.pdf

Processado

Cronograma — Computação.pdf

Revisão necessária

O futuro motor poderá extrair:

- disciplina;

- código;

- professor;

- créditos;

- datas de aula;

- conteúdos;

- provas;

- trabalhos;

- entregas;

- pesos;

- critérios de avaliação;

- observações.

==================================================

8.2 GRADE HORÁRIA

==================================================

Área separada.

Título:

Grade horária

Descrição:

"Envie sua grade semanal para que a disciplinIA conheça seus horários fixos."

Botão:

Enviar grade horária

Mostrar:

Grade 2026/2

Atualizada em 04/09/2026

Botões:

Visualizar

Substituir

IMPORTANTE:

Grade horária e documentos acadêmicos devem ser tratados como fontes distintas.

A grade será posteriormente utilizada para:

- gerar aulas;

- evitar conflitos de planejamento;

- calcular quantidade de aulas;

- calcular faltas;

- organizar o dia.

==================================================

9. REVISÃO DE IMPORTAÇÃO

==================================================

Criar tela:

"Revise o que encontramos"

Exemplo:

Fundamentos Científicos e Modelagem para Eng. I

Código

2000101

Créditos

23

Duração

Anual

Professor

Não identificado

Avaliações:

18/09 — Avaliação

23/10 — Avaliação

Conteúdos:

Espaços vetoriais

Autovalores

Oscilações

Equações diferenciais

Otimização

Informação encontrada:

"Avaliações formativas ao longo do período"

Status:

Revisão necessária

Permitir:

Editar

Confirmar

Alterar categoria

Ignorar

Botão:

Importar informações

==================================================

10. GRADE HORÁRIA

==================================================

Página:

Grade Horária

Visual semanal.

Segunda

Terça

Quarta

Quinta

Sexta

Exemplo:

08:00–10:00

Fundamentos

10:00–12:00

Computação

14:00–16:00

Projeto

Cada bloco:

Disciplina

Horário

Sala

Ao clicar:

drawer de detalhes.

Permitir editar:

Disciplina

Dia

Horário inicial

Horário final

Sala

Quantidade de períodos/aulas

Mostrar:

Grade 2026/2

Importada em 04/09/2026

==================================================

11. PLANEJAMENTO DE ESTUDOS

==================================================

Criar uma página nova e importante:

Planejamento

Essa página utiliza as demandas acadêmicas do usuário para criar um plano de estudos personalizado.

IMPORTANTE:

Agenda = compromissos existentes.

Planejamento = recomendação de quando estudar.

==================================================

11.1 CRIAR PLANEJAMENTO

==================================================

Botão principal:

Criar planejamento

Abrir fluxo em etapas.

--------------------------------------------------

ETAPA 1 — PERÍODO

--------------------------------------------------

Pergunta:

"Por quanto tempo você quer se planejar?"

Opções:

7 dias

14 dias

30 dias

Até uma data específica

Permitir data personalizada.

--------------------------------------------------

ETAPA 2 — DISPONIBILIDADE

--------------------------------------------------

Pergunta:

"Quais dias você pode estudar?"

Mostrar:

Seg

Ter

Qua

Qui

Sex

Sáb

Dom

Permitir marcar/desmarcar qualquer dia.

O usuário deve poder escolher:

"Não quero estudar neste dia"

Isso é importante.

Não obrigar estudo diário.

Para cada dia, permitir opcionalmente informar:

Horário disponível

Exemplo:

Segunda

18:00–21:00

Terça

Sem estudo

Quarta

14:00–18:00

Sábado

Horário flexível

Também permitir:

"Meu horário é flexível"

==================================================

11.3 INTENSIDADE

==================================================

Pergunta:

"Qual intensidade você quer para este período?"

Opções:

Leve

Moderada

Intensa

A intensidade influencia a carga de estudo.

Mostrar explicação.

Exemplo visual:

Leve

Carga menor e mais sustentável.

Moderada

Equilíbrio entre estudo e tempo livre.

Intensa

Maior concentração de horas e sessões.

O motor futuramente calculará a quantidade sugerida de horas por dia com base em:

- intensidade;

- dias disponíveis;

- grade horária;

- provas;

- entregas;

- dificuldade das disciplinas.

Não criar uma quantidade rígida universal.

Mostrar uma estimativa no frontend mockado.

Exemplo:

Intensidade moderada

Carga estimada:

2h por dia de estudo disponível

aproximadamente 9h na semana

==================================================

11.4 DIFICULDADE POR MATÉRIA

==================================================

Pergunta:

"Quais matérias exigem mais de você?"

Mostrar todas as disciplinas atuais.

Para cada uma:

Fundamentos

Baixa | Média | Alta

Computação

Baixa | Média | Alta

Estática

Baixa | Média | Alta

Projeto

Baixa | Média | Alta

A dificuldade informada pelo usuário deve influenciar o planejamento.

Matérias marcadas como difíceis recebem mais atenção.

==================================================

11.5 PRIORIDADES AUTOMÁTICAS

==================================================

Explicar visualmente:

"O planejamento também considera automaticamente:"

- proximidade das provas;

- proximidade de entregas;

- quantidade de conteúdo;

- dificuldade informada;

- grade horária;

- disponibilidade;

- intensidade escolhida.

Futuramente também poderá considerar:

- média atual;

- peso da avaliação;

- desempenho anterior.

==================================================

11.6 PLANO GERADO

==================================================

Depois das perguntas:

"Seu planejamento"

Mostrar semana.

SEGUNDA

18:00–19:00

Fundamentos

Autovalores

19:15–20:00

Computação

Estruturas condicionais

TERÇA

Dia livre

Sem estudo planejado

QUARTA

16:00–17:30

Fundamentos

Oscilações

18:00–19:00

Estática

Equilíbrio

Cada sessão mostra:

Disciplina

Tema

Tempo

Motivo da prioridade

Exemplo:

"Prova em 8 dias"

ou:

"Matéria marcada como dificuldade alta"

==================================================

11.7 FLEXIBILIDADE

==================================================

O planejamento NÃO pode parecer uma agenda rígida.

Permitir:

Editar sessão

Mover sessão

Excluir sessão

Adicionar sessão

Marcar dia como livre

Botão:

Reorganizar planejamento

Se o usuário perder um dia, futuramente o motor poderá redistribuir as sessões.

Representar isso visualmente.

Exemplo:

"Você não estudou ontem."

Botão:

Reorganizar restante da semana

==================================================

11.8 CARGA DE ESTUDO

==================================================

Mostrar um resumo:

Planejamento de 14 dias

Carga total:

18h30

Média nos dias de estudo:

2h03

Dias de estudo:

9

Dias livres:

5

Disciplinas mais priorizadas:

Fundamentos

7h

Computação

4h30

Estática

3h

==================================================

12. VISÃO SEMANAL DO PLANEJAMENTO

==================================================

Criar página/visualização semanal moderna.

Combinar discretamente:

- aulas;

- compromissos;

- sessões de estudo.

IMPORTANTE:

Não agendar sessão de estudo em cima de uma aula.

Exemplo:

SEGUNDA

08:00–12:00

Aulas

18:00–19:00

Estudo — Fundamentos

19:15–20:00

Estudo — Computação

Mostrar espaços livres discretamente.

==================================================

13. ORGANIZAÇÃO AUTOMÁTICA DO DIA

==================================================

A disciplinIA futuramente organizará a tela inicial toda manhã.

A interface deve estar preparada para isso.

Exemplo:

"Seu dia está organizado."

Aulas:

4h

Estudo planejado:

2h

Próximo compromisso:

Fundamentos às 08:00

Evento importante:

Prova em 6 dias

Tempo livre identificado:

16:00–18:00

Não criar notificações exageradas.

==================================================

14. DISCIPLINAS

==================================================

Página:

Disciplinas

Preferir tabela/lista.

Mostrar:

Nome

Código

Créditos

Período

Média atual

Faltas

Próxima avaliação

Exemplo:

Fundamentos Científicos e Modelagem para Eng. I

2000101

23 créditos

Anual

Introdução à Computação

MAC2166

4 créditos

Introdução à Estática

PME0101

4 créditos

==================================================

15. DETALHE DA DISCIPLINA

==================================================

Tabs:

Visão Geral

Conteúdo

Notas

Faltas

--------------------------------------------------

VISÃO GERAL

--------------------------------------------------

Professor

Créditos

Carga horária

Período

Próxima aula

Próxima avaliação

Média atual

Faltas

--------------------------------------------------

CONTEÚDO

--------------------------------------------------

Timeline acadêmica.

AGOSTO

✓ Sistemas lineares

✓ Vetores

SETEMBRO

→ Espaços vetoriais

○ Autovalores

○ Oscilações

OUTUBRO

○ Equações diferenciais

○ Otimização

Cada conteúdo pode mostrar:

Data

Aula

Status

Origem

==================================================

16. NOTAS

==================================================

Tabela:

Avaliação

Peso

Nota

Data

Exemplo:

P1

30%

8,0

P2

30%

—

Projeto

25%

8,5

Listas

15%

9,0

Botão:

+ Adicionar avaliação

Calcular:

Média atual

Média projetada

Quanto precisa tirar.

Exemplo:

Para terminar com média 8,0:

"Você precisa tirar 7,3 na P2."

Criar simulador:

"Se eu tirar..."

Input ou slider.

7,5

Resultado:

"Média final projetada: 8,12"

IMPORTANTE:

Se critérios ou pesos estiverem incompletos:

NÃO inventar.

Mostrar:

"Critério de avaliação incompleto."

==================================================

17. DISCIPLINAS ANUAIS

==================================================

Suportar:

semestral

anual

Exemplo:

Fundamentos Científicos e Modelagem para Eng. I

2000101

23 créditos

Anual

Pode aparecer visualmente no 1º e 2º semestre.

Mas:

não duplicar créditos;

não duplicar nota;

não criar duas disciplinas.

==================================================

18. GRADUAÇÃO

==================================================

Página:

Minha Graduação

Curso:

Engenharia Civil

Tabs:

1º

2º

3º

4º

5º

6º

7º

8º

9º

10º

Cada semestre:

Disciplina

Créditos

Nota

Situação

A média deve ser ponderada por créditos.

Fórmula:

soma(nota × créditos) / soma(créditos)

Não utilizar média simples.

Mostrar:

Média do semestre

Créditos concluídos

Disciplinas concluídas

Também:

Média acumulada do curso

==================================================

19. FALTAS

==================================================

Página:

Faltas

Tabela:

Disciplina

Faltas

Aulas realizadas

Percentual

Limite

Situação

Exemplo:

Fundamentos

8

45

17,8%

25%

Atenção

Computação

2

26

7,7%

25%

OK

IMPORTANTE:

Não assumir limite universal de 25%.

Se não existir informação:

"Limite não informado"

Permitir edição manual.

==================================================

20. CONTAGEM DE FALTAS POR PERÍODO

==================================================

Uma aula pode possuir vários períodos.

Exemplo:

Fundamentos

08:00–11:00

3 períodos.

Ao registrar falta:

"Esta aula corresponde a 3 períodos."

Botão:

Registrar 3 faltas

Permitir editar quantidade.

==================================================

21. PRESENÇA PELA AGENDA

==================================================

Ao abrir uma aula passada:

"Você esteve nesta aula?"

Presente

Faltou

Se selecionar:

Faltou

Mostrar:

Quantidade de períodos:

3

Confirmar.

Atualizar contador localmente.

==================================================

22. PROVENIÊNCIA DOS DADOS

==================================================

Quando relevante:

Importado do programa da disciplina

Importado da grade horária

Adicionado manualmente

Não mostrar em todos os elementos.

Apenas quando melhorar confiança e transparência.

==================================================

23. COMPONENTES REUTILIZÁVEIS

==================================================

Criar componentes como:

Sidebar

PageHeader

DailyTimeline

UpcomingEvents

WeeklyPreview

StudyPlan

StudySession

PlanningWizard

IntensitySelector

SubjectDifficultySelector

Calendar

CalendarEvent

WeeklySchedule

UploadDropzone

UploadItem

ReviewField

SemesterTabs

CourseTable

CourseRow

GradeTable

GradeSimulator

AbsenceTable

AttendanceDialog

Timeline

Drawer

Modal

EmptyState

StatusIndicator

Evitar abstrações desnecessárias.

==================================================

24. INTERAÇÕES FUNCIONAIS NO FRONTEND

==================================================

Implementar em React state/local state:

- navegar entre páginas;

- criar evento;

- editar evento;

- excluir evento;

- mover evento;

- trocar mês/semana;

- trocar semestre;

- abrir disciplina;

- trocar tabs;

- adicionar nota;

- editar nota;

- simular média;

- registrar falta;

- registrar presença;

- editar grade;

- revisar importação;

- editar informações importadas;

- criar planejamento;

- selecionar duração;

- selecionar dias;

- marcar dia sem estudo;

- escolher intensidade;

- definir dificuldade das disciplinas;

- gerar planejamento mockado;

- editar sessão de estudo;

- mover sessão;

- excluir sessão;

- reorganizar planejamento visualmente;

- marcar sessão como concluída.

Não precisa persistir após refresh.

==================================================

25. RESPONSIVIDADE

==================================================

Desktop como prioridade.

Tablet e mobile também devem funcionar bem.

No mobile:

- sidebar vira menu;

- tabelas viram listas quando necessário;

- agenda adapta;

- grade pode usar scroll horizontal;

- timeline diária deve funcionar muito bem;

- planejamento semanal deve continuar legível.

==================================================

26. O QUE NÃO ADICIONAR

==================================================

Não adicionar:

chatbot genérico

gamificação

ranking

pontos

conquistas

rede social

feed

mensagens

pricing

assinatura

login real

painel de professor

flashcards

pomodoro

landing page de marketing

funções não solicitadas

IMPORTANTE:

Quando o requisito falar em "landing", interpretar como:

tela inicial do aplicativo / Visão Geral.

Não criar site institucional.

==================================================

27. OBJETIVO FINAL

==================================================

Todas as páginas devem parecer partes do mesmo produto.

A disciplinIA deve conectar:

DOCUMENTOS

↓

DISCIPLINAS

↓

GRADE HORÁRIA

↓

AGENDA

↓

PROVAS E ENTREGAS

↓

NOTAS E FALTAS

↓

PLANEJAMENTO

↓

ORGANIZAÇÃO DIÁRIA

A experiência final deve transmitir:

"Eu não preciso montar minha vida acadêmica do zero todos os dias. A plataforma conhece minha graduação, meus compromissos e minhas dificuldades e me ajuda a organizar o que fazer."

==================================================

28. REVISÃO FINAL

==================================================

Depois de implementar todas as páginas:

Faça uma revisão visual completa.

Remova qualquer elemento que:

- pareça criado apenas para preencher espaço;

- pareça template genérico de IA;

- tenha decoração excessiva;

- gere redundância;

- use cards sem necessidade;

- use botões demais;

- prejudique leitura;

- deixe o produto com aparência infantil.

Garanta:

- consistência tipográfica;

- espaçamento consistente;

- excelente hierarquia visual;

- navegação funcional;

- estados locais funcionando;

- cálculos funcionando;

- planejamento visual funcionando;

- ausência de erros no console;

- TypeScript organizado;

- componentes reutilizáveis;

- boa responsividade.

Não implementar backend.

Não implementar banco.

Não conectar Supabase.

Não implementar autenticação.

O objetivo desta etapa é criar um frontend completo, moderno, educacional e profissional, preparado para receber posteriormente um backend próprio.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bccd21e0-e5c5-455b-8a48-da3401d3f925).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
