const productDao = require("../models/productDao");


// == Best ==

const getonesubBestsell = async (id) => {
    return await productDao.getonesubBestsell(id)
}


const gettwosubBestsell = async (id) => {
    return await productDao.gettwosubBestsell(id)
}


const getallbestsell = async () => {
    return await productDao.getallbestsell()
}


// == Detail == 

const getDetail = async () => {
    return await productDao.getDetail()
}

const getdetailColors = async () => {
    return await productDao.getdetailColors()
}

const getdetailSizes = async () => {
    return await productDao.getdetailSizes()
}

const getdetailCompositions = async () => {
    return await productDao.getdetailCompositions()
}

module.exports = { getonesubBestsell, gettwosubBestsell, getallbestsell, getdetailColors, getdetailSizes, getdetailCompositions, getDetail };