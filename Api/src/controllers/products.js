const findAllMotherboards = require("./findAllMotherboards");
const findAllMouses = require("./findAllMouses");
const findAllTeclados = require("./findAllTeclados");

export const findAllProducts = async () => {
    const motherboards = await findAllMotherboards();
    const mouses = await findAllMouses();
    const teclados = await findAllTeclados();
    const allProducts = [...motherboards, ...mouses, ...teclados];
    return allProducts;
};

