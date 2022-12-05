module.exports = {
  bail: true,
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ],
}
//bail: se um teste falhar, ele para, normalmente ele vem false
//testMatch: "**/*.spec.js": quando utilizamos o **, significa que o teste é em qualquer pasta, e * significa que pode ser qualquer arquivo com qualquer nome, spec para diferenciar um arquivo de teste
//<rootDir>, é um especie de variável global, que vai direto na raiz do nosso projeto e direcionamos direto para pasta src, pulando os testes dentro do node_modules