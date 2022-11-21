const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");//__dirname, "..", quando uso ".." é para o uso de localização do caminho e o tmp é a pasta que eu busco
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString("hex");//para evitar que arquivos possuam o mesmo nome e os mesmos sejam substituídos
            const fileName = `${fileHash}-${file.originalname}`;//aqui criamos o nome do file como um hash+o nome original

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
}