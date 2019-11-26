define({ "api": [
  {
    "type": "delete",
    "url": "/pokemons/:id",
    "title": "Delete Pokémon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Operation completed successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Bulbasaur has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/PokemonController.js",
    "groupTitle": "Pokemons",
    "name": "DeletePokemonsId"
  },
  {
    "type": "get",
    "url": "/pokemons",
    "title": "List Pokémons",
    "group": "Pokemons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "pokemon",
            "description": "<p>Pokémon informations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.id",
            "description": "<p>Pokémon identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.name",
            "description": "<p>Pokémon Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "profile.type",
            "description": "<p>Pokémon type</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "profile.habilities",
            "description": "<p>Pokémon skills</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.userId",
            "description": "<p>User creator identification</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pokemon.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pokemon.updatedAt",
            "description": "<p>Last update date</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "pokemon.__v",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5ddca1376782e415b631829d\",\n    \"name\": \"Bulbasaur\",\n    \"type\": [\n      \"Grama\",\n      \"Veneno\"\n    ],\n    \"habilities\": [\n      \"chlorophyll\",\n      \"overgrow\"\n    ],\n    \"userId\": 9,\n    \"createdAt\": \"2019-11-26T03:51:19.681Z\",\n    \"updatedAt\": \"2019-11-26T03:51:19.681Z\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/PokemonController.js",
    "groupTitle": "Pokemons",
    "name": "GetPokemons"
  },
  {
    "type": "get",
    "url": "/pokemons/:id",
    "title": "List Pokémon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pokemon",
            "description": "<p>Pokémon informations.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.id",
            "description": "<p>Pokémon identification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.name",
            "description": "<p>Pokémon Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "profile.type",
            "description": "<p>Pokémon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "profile.habilities",
            "description": "<p>Pokémon skills.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pokemon.userId",
            "description": "<p>User creator identification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pokemon.createdAt",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "pokemon.updatedAt",
            "description": "<p>Last update date.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "pokemon.__v",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"5ddca1376782e415b631829d\",\n   \"name\": \"Bulbasaur\",\n   \"type\": [\n     \"Grama\",\n     \"Veneno\"\n   ],\n   \"habilities\": [\n     \"chlorophyll\",\n     \"overgrow\"\n   ],\n   \"userId\": 9,\n   \"createdAt\": \"2019-11-26T03:51:19.681Z\",\n   \"updatedAt\": \"2019-11-26T03:51:19.681Z\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/PokemonController.js",
    "groupTitle": "Pokemons",
    "name": "GetPokemonsId"
  },
  {
    "type": "post",
    "url": "/pokemons",
    "title": "Create Pokémon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Operation completed successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Pokémon created\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/PokemonController.js",
    "groupTitle": "Pokemons",
    "name": "PostPokemons"
  },
  {
    "type": "put",
    "url": "/pokemons/:id",
    "title": "Update Pokémon",
    "group": "Pokemons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Operation completed successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully updated Pokemon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/PokemonController.js",
    "groupTitle": "Pokemons",
    "name": "PutPokemonsId"
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "Create Session",
    "group": "Sessions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "authInfo",
            "description": "<p>User authentication information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "authInfo.user",
            "description": "<p>User informations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "authInfo.user.id",
            "description": "<p>User identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authInfo.user.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authInfo.user.email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authInfo.token",
            "description": "<p>User JWT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"id\": 12,\n    \"name\": \"Usuário Teste\",\n    \"email\": \"teste@liveon.com\"\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU3NDc0MjMxOSwiZXhwIjoxNTc1MzQ3MTE5fQ.od-DMbM168tRcfCBDQhmTbDDEKAZNb-UaGWN1tSgnNU\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/SessionController.js",
    "groupTitle": "Sessions",
    "name": "PostSessions"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "CreateUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>User profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>User identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.email",
            "description": "<p>Users email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 11,\n  \"name\": \"Vinícius Monteiro\",\n  \"email\": \"teste@liveon.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/UserController.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Optional name of the User for update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Optional email address for update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password[oldPassword]",
            "description": "<p>Required for password changes only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword[confirmPassword]",
            "description": "<p>Confirmation for password change</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>User profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>User identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "profile.email",
            "description": "<p>Users email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 11,\n  \"name\": \"Vinícius Monteiro\",\n  \"email\": \"teste@liveon.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/controllers/UserController.js",
    "groupTitle": "Users",
    "name": "PutUsers"
  }
] });
