# Controle de Metas e Finanças (Multiplataforma)

Projeto desenvolvido em **C#** utilizando **.NET MAUI Blazor Hybrid**, focado em gestão financeira detalhada no Desktop e acompanhamento rápido via Mobile.

## 💡 Motivação
Este projeto nasceu da frustração com aplicativos de metas existentes no mercado, que tornam a experiência de uso impossível devido ao excesso de anúncios a cada interação. O objetivo é criar uma ferramenta limpa, eficiente e totalmente customizável para atender às minhas necessidades específicas de organização, sem interrupções.

## 🛠️ Tecnologias e Decisões Técnicas
- **Backend**: C# (.NET).
- **Frontend**: HTML5, CSS e componentes Razor (Blazor).
- **Arquitetura**: Híbrida (Web View dentro de App Nativo).
- **Persistência**: SQL (Local).

## 📋 Módulos do Sistema

### 1. Fluxo de Caixa Mensal (Aba Finanças)
Interface inspirada em planilhas de controle de entradas e saídas.
- Listagem de saídas fixas e variáveis (Ex: Nubank, Celular, Condomínio).
- Listagem de entradas (Ex: Salário, Extras).
- Cálculo automático de saldo mensal e projeção anual.
- **Filtros Inteligentes**: Opção de filtrar a visão por Banco ou Cartão para facilitar a conferência com extratos reais.
- **Sincronização**: Itens de listas de compras e parcelas de metas aparecem automaticamente aqui conforme a data definida.

### 2. Gestão de Metas (Aba Metas)
Controle visual de objetivos com inteligência de projeção.
- Cadastro de meta com Valor Alvo, Valor Atual e Prazo.
- **Planejamento de Depósito**: Definição de quanto guardar por mês, dia do depósito, banco e método.
- **Automação**: Gera automaticamente uma linha de previsão no fluxo de caixa dos meses correspondentes.
- **Barra de Progresso**: Visualização percentual dinâmica do objetivo.

### 3. Listas de Compras e Eventos (Aba Listas)
Gerenciador de listas múltiplas para organização de gastos específicos.
- Criação de listas temáticas (Ex: Aniversário, Itens de Casa).
- Campos: Item, Valor, Lugar, Data/Mês e Link (URL).
- **Integração**: Ao definir uma data, o gasto é projetado no fluxo de caixa mensal.

## 🔔 Notificações e Alertas
- **Lembrete de Depósito**: Notificação no dia definido para guardar o dinheiro da meta.
- **Alerta de Vencimento**: Notificações matinais para itens que atingiram o status "Vencido" (Vermelho).
- **Canais**: Notificações nativas no celular ou envio de E-mail para a versão Web/Desktop.

## 🎨 Sistema de Status Visual (Cores)
- **Preto/Branco**: Itens planejados ou aguardando.
- **Verde**: Item pago, meta depositada ou concluída.
- **Vermelho**: Item vencido/atrasado.

## 📂 Estrutura de Pastas (Roadmap)
- `/Models`: Definição das classes de dados.
- `/Services`: Lógica de banco de dados, automações e cálculos.
- `/Data`: Configuração do SQLite.
- `/Components/Pages`: Telas em HTML/Razor.
- `/wwwroot`: CSS customizado e exportação de relatórios (CSV).

![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![.NET MAUI](https://img.shields.io/badge/.NET%20MAUI-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Blazor](https://img.shields.io/badge/Blazor-512BD4?style=for-the-badge&logo=blazor&logoColor=white)
