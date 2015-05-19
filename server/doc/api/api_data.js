define({ "api": [
  {
    "type": "post",
    "url": "/api/auth",
    "title": "",
    "name": "Auth",
    "group": "Auth",
    "description": "<p>Cria um novo JWT a partir de um usuário e uma senha</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do usuário</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth-route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth",
    "title": "",
    "name": "Get",
    "group": "Auth",
    "description": "<p>Retorna informações sobre o token atual</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth-route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/api/equipes",
    "title": "",
    "name": "delete",
    "group": "Equipe",
    "description": "<p>Excluir equipe</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID da equipe a ser excluída</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/equipe-route.js",
    "groupTitle": "Equipe"
  },
  {
    "type": "get",
    "url": "/api/equipes",
    "title": "",
    "name": "find",
    "group": "Equipe",
    "description": "<p>Lista de equipes</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/equipe-route.js",
    "groupTitle": "Equipe"
  },
  {
    "type": "get",
    "url": "/api/equipes",
    "title": "",
    "name": "findById",
    "group": "Equipe",
    "description": "<p>Retorna equipe com base no parâmetro</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID da equipe</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/equipe-route.js",
    "groupTitle": "Equipe"
  },
  {
    "type": "post",
    "url": "/api/equipes",
    "title": "",
    "name": "insert",
    "group": "Equipe",
    "description": "<p>Criar equipe</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do equipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "organizacao",
            "description": "<p>Organização da equipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "usuario",
            "description": "<p>Usuário da equipe</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/equipe-route.js",
    "groupTitle": "Equipe"
  },
  {
    "type": "put",
    "url": "/api/equipes",
    "title": "",
    "name": "update",
    "group": "Equipe",
    "description": "<p>Atualizar equipe</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "nome",
            "description": "<p>Nome do equipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "organizacao",
            "description": "<p>Organização da equipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "usuario",
            "description": "<p>Usuário da equipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID da equipe a ser atualizada</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/equipe-route.js",
    "groupTitle": "Equipe"
  },
  {
    "type": "delete",
    "url": "/api/organizacoes",
    "title": "",
    "name": "delete",
    "group": "Organizacao",
    "description": "<p>Excluir organização</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID da organização a ser excluída</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organizacao-route.js",
    "groupTitle": "Organizacao"
  },
  {
    "type": "get",
    "url": "/api/organizacoes",
    "title": "",
    "name": "find",
    "group": "Organizacao",
    "description": "<p>Lista de organizações</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organizacao-route.js",
    "groupTitle": "Organizacao"
  },
  {
    "type": "get",
    "url": "/api/organizacoes",
    "title": "",
    "name": "findById",
    "group": "Organizacao",
    "description": "<p>Retorna organização com base no parâmetro</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do organização</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organizacao-route.js",
    "groupTitle": "Organizacao"
  },
  {
    "type": "post",
    "url": "/api/organizacoes",
    "title": "",
    "name": "insert",
    "group": "Organizacao",
    "description": "<p>Criar organização</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "logo",
            "description": "<p>Logo da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ativo",
            "description": "<p>Se organização está ativa</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organizacao-route.js",
    "groupTitle": "Organizacao"
  },
  {
    "type": "put",
    "url": "/api/organizacoes",
    "title": "",
    "name": "update",
    "group": "Organizacao",
    "description": "<p>Atualizar organização</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "nome",
            "description": "<p>Nome da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "logo",
            "description": "<p>Logo da organização</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ativo",
            "description": "<p>Se organização está ativa</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID da organização a ser atualizado</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/organizacao-route.js",
    "groupTitle": "Organizacao"
  },
  {
    "type": "delete",
    "url": "/api/projetos",
    "title": "",
    "name": "delete",
    "group": "Projeto",
    "description": "<p>Excluir projeto</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do projeto a ser excluído</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/projeto-route.js",
    "groupTitle": "Projeto"
  },
  {
    "type": "get",
    "url": "/api/projetos",
    "title": "",
    "name": "find",
    "group": "Projeto",
    "description": "<p>Lista de projetos</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/projeto-route.js",
    "groupTitle": "Projeto"
  },
  {
    "type": "get",
    "url": "/api/projetos",
    "title": "",
    "name": "findById",
    "group": "Projeto",
    "description": "<p>Retorna projeto com base no parâmetro</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do projeto</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/projeto-route.js",
    "groupTitle": "Projeto"
  },
  {
    "type": "post",
    "url": "/api/projetos",
    "title": "",
    "name": "insert",
    "group": "Projeto",
    "description": "<p>Criar projeto</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "organizacao",
            "description": "<p>Organização do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ativo",
            "description": "<p>Se projeto está ativo</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/projeto-route.js",
    "groupTitle": "Projeto"
  },
  {
    "type": "put",
    "url": "/api/projetos",
    "title": "",
    "name": "update",
    "group": "Projeto",
    "description": "<p>Atualizar projeto</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "nome",
            "description": "<p>Nome do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "organizacao",
            "description": "<p>Organização do projeto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ativo",
            "description": "<p>Se o projeto está ativo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do projeto a ser atualizado</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/projeto-route.js",
    "groupTitle": "Projeto"
  },
  {
    "type": "delete",
    "url": "/api/tickets",
    "title": "",
    "name": "delete",
    "group": "Ticket",
    "description": "<p>Excluir ticket</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do ticket a ser excluído</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/ticket-route.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "get",
    "url": "/api/tickets",
    "title": "",
    "name": "find",
    "group": "Ticket",
    "description": "<p>Lista de tickets</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/ticket-route.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "get",
    "url": "/api/tickets",
    "title": "",
    "name": "findById",
    "group": "Ticket",
    "description": "<p>Retorna ticket com base no parâmetro</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do ticket</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/ticket-route.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "post",
    "url": "/api/tickets",
    "title": "",
    "name": "insert",
    "group": "Ticket",
    "description": "<p>Criar ticket</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "tipo",
            "description": "<p>Tipo do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "prioridade",
            "description": "<p>Prioridade do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sprint",
            "description": "<p>Sprint do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "data_inicio",
            "description": "<p>Data ínicio do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "data_prevista",
            "description": "<p>Data pravista do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "data_criacao",
            "description": "<p>Data de criação do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "criador",
            "description": "<p>Criado do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "atribuido",
            "description": "<p>Atribuído ao ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "ativo",
            "description": "<p>Se ticket está ativo</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/ticket-route.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "put",
    "url": "/api/tickets",
    "title": "",
    "name": "update",
    "group": "Ticket",
    "description": "<p>Atualizar ticket</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "titulo",
            "description": "<p>Título do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "descricao",
            "description": "<p>Descrição do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "tipo",
            "description": "<p>Tipo do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "prioridade",
            "description": "<p>Prioridade do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "sprint",
            "description": "<p>Sprint do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "data_inicio",
            "description": "<p>Data ínicio do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "data_prevista",
            "description": "<p>Data pravista do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>Status do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "data_criacao",
            "description": "<p>Data de criação do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "criador",
            "description": "<p>Criado do ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "atribuido",
            "description": "<p>Atribuído ao ticket</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "ativo",
            "description": "<p>Se ticket está ativo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do ticket a ser atualizado</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/ticket-route.js",
    "groupTitle": "Ticket"
  },
  {
    "type": "delete",
    "url": "/api/usuarios",
    "title": "",
    "name": "delete",
    "group": "Usuario",
    "description": "<p>Excluir usuário</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário a ser excluído</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/usuarios",
    "title": "",
    "name": "find",
    "group": "Usuario",
    "description": "<p>Lista de usuários</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/usuarios",
    "title": "",
    "name": "findById",
    "group": "Usuario",
    "description": "<p>Retorna usuário com base no parâmetro</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "",
    "name": "insert",
    "group": "Usuario",
    "description": "<p>Criar usuário</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "organizacao",
            "description": "<p>Organização do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "ativo",
            "description": "<p>Se o usuário está ativo</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "put",
    "url": "/api/usuarios",
    "title": "",
    "name": "update",
    "group": "Usuario",
    "description": "<p>Atualizar usuário</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token com o JWT</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "nome",
            "description": "<p>Nome do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "organizacao",
            "description": "<p>Organização do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>E-mail do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "senha",
            "description": "<p>Senha do usuário</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "ativo",
            "description": "<p>Se o usuário está ativo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário a ser atualizado</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuario"
  }
] });