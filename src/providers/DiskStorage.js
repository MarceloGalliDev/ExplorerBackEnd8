const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )//rename usamos para mover o arquivo de lugar, mas da para usar para renomear um arquivo

        return file;
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadCOnfig.UPLOADS_FOLDER, file);
        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);
    }
}

module.exports = DiskStorage;

//usamos async e await com fs.promises, para que seja executado depois de realizando a execução das funções
//path.resolve, resolve uma seuqência de segmentos de caminho para um caminho absoluto, de acordo com o sistema operacional
/*
      const filePath = path.resolve(uploadCOnfig.UPLOADS_FOLDER, file);
        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);

aqui aqui usamos o modulo fs para verificar o estado do arquivo, se esta aberto, corrompido entre outros.
unlink é para remover o arquivo
*/