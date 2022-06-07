
const jwt = require('jsonwebtoken');

function checkToken(token){
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    return payload
}

module.exports = { checkToken }