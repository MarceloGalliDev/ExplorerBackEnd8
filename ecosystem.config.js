module.exports = {
  apps : [{
    name: "app",
    script: "./src/server.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}

//alterar o script para o arquivo da raiz do projeto