module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn: "1d",
    }
}

//armazenamento de chaves secretas
//md5 hash ou sha1 hash, utilizar md5hash generator