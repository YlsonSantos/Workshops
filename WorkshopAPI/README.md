# WorkshopAPI

WorkshopAPI é uma API para gerenciamento de colaboradores e oficinas. Ela oferece operações para criar, ler, atualizar e excluir informações de colaboradores e oficinas, utilizando um banco de dados **SQLite** e **Swagger** para documentação da API.

## 🛠 Tecnologias Utilizadas

- **C# (ASP.NET Core)**
- **Swagger** para documentação da API
- **SQLite** para armazenamento dos dados
- **Entity Framework** para interação com o banco de dados

## 📌 Endpoints

A API oferece os seguintes endpoints para interagir com os dados:

### 🔹 Colaboradores

- `GET /api/ColaboradoresControlador` - Retorna todos os colaboradores cadastrados.
- `POST /api/ColaboradoresControlador` - Cria um novo colaborador.
- `GET /api/ColaboradoresControlador/{id}` - Retorna um colaborador específico, identificado pelo ID.
- `PUT /api/ColaboradoresControlador/{id}` - Atualiza um colaborador existente.
- `DELETE /api/ColaboradoresControlador/{id}` - Exclui um colaborador específico.

### 🔹 Oficinas

- `GET /api/Oficina` - Retorna todas as oficinas cadastradas.
- `POST /api/Oficina` - Cria uma nova oficina.
- `GET /api/Oficina/{id}` - Retorna uma oficina específica, identificada pelo ID.
- `PUT /api/Oficina/{id}` - Atualiza uma oficina existente.
- `DELETE /api/Oficina/{id}` - Exclui uma oficina específica.

### 🔹 OficinasControlador

- `GET /api/OficinasControlador` - Retorna todas as oficinas cadastradas.
- `POST /api/OficinasControlador` - Cria uma nova oficina.
- `GET /api/OficinasControlador/{id}` - Retorna uma oficina específica, identificada pelo ID.
- `PUT /api/OficinasControlador/{id}` - Atualiza uma oficina existente.
- `DELETE /api/OficinasControlador/{id}` - Exclui uma oficina específica.

## 🚀 Como Rodar o Projeto

### 🔹 Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas:

- **.NET Core SDK**
- **SQLite**

### 🔹 Passos para Execução

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/YlsonSantos/Workshops.git
   cd  Workshops/WorkshopAPI
    ```
2. Restaure as dependências do projeto:

    ```bash
    dotnet restore
    ```

3. Compile o projeto:
    ```bash
    dotnet build
    ```

4. Execute a aplicação:
    ```bash
    dotnet run
    ```

## API em Execução

A API estará rodando em **[http://localhost:5000](http://localhost:5000)** e você pode acessá-la via **Swagger**.

## Testando a API com Swagger

Após iniciar a API, você pode acessar a documentação interativa no **Swagger** através do link:

🔗 **[http://localhost:5000/swagger](http://localhost:5000/swagger)**

No **Swagger**, você pode explorar todos os endpoints e testar as operações de **GET**, **POST**, **PUT** e **DELETE** diretamente na interface.

## Banco de Dados

A aplicação usa **SQLite** como banco de dados local. O banco de dados será criado automaticamente na primeira vez que você rodar a aplicação.
