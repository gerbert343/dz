function cors(req, res, next) {
    const { origin } = req.headers;

    console.log(origin);

    next();
}


module.exports = {
    cors
}