# Trybe News
---

Este é o repositório da aplicação Trybe News, uma aplicação que utiliza a API do IBGE na sua 3ª versão para obter as notícias mais recentes. A aplicação conta com quatro botões que carregam diferentes tipos de notícias, incluindo as mais recentes, releases, notícias e as notícias favoritas. Cada notícia exibe botões que redirecionam para a notícia original e permitem salvá-la no local storage da aplicação, onde as notícias salvas são exibidas.

---

## Tecnologias

<details>
<summary><strong>Tecnologias Utilizadas</strong></summary>

- React
- Redux
- Styled Components
- Jest para testes (utilizando mocks)
- Vitest para testes de unidade

</details>

---

## Orientações

<details>
<summary><strong>Como Utilizar a Aplicação </strong></summary>
Siga os passos abaixo para utilizar a aplicação:

1. **Clone o repositório:**
 ```bash
   git clone git@github.com:netoelix/trybe-news.git
```
2. **Acesse o diretório do projeto:**
```bash
   cd trybe-news
```
3. **Instale as dependências:**
```bash
   npm install
```
4. **Inicie a aplicação:**
```bash
   npm run dev
```
5. **Para rodar os testes:**
```bash
   npm run test
```

</details>

---

## Desafios Enfrentado

1. **Trabalhar com Diferentes Tipos de Chamadas de API**
   
Foi desafiador criar um código que pudesse lidar com três tipos diferentes de chamadas de API para o Redux, dependendo do botão pressionado na página. A solução envolveu a utilização de ações específicas para cada tipo de notícia e uma lógica de controle no Redux para processar as respostas de forma adequada.

2. **Gerenciamento do Local Storage**
   
Implementar o salvamento e a renderização das notícias salvas no local storage foi outro desafio. Foi necessário criar uma lógica para armazenar e recuperar as notícias salvas, garantindo uma experiência consistente para o usuário entre as sessões da aplicação.

3. **Testes da Aplicação**
   
Os testes, especialmente os relacionados ao botão de favoritos, foram desafiadores devido à integração com o local storage e à necessidade de criar mocks para simular as chamadas de API. A utilização da biblioteca Jest e da ferramenta Vitest proporcionou uma cobertura abrangente para garantir a estabilidade da aplicação.

Esperamos que aproveite a experiência de explorar as notícias do IBGE com a nossa aplicação!
Acesse atráves deste link:
[Trybe News](https://news-trybe.vercel.app/)
