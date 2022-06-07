
const jwt = require('jsonwebtoken');

export function checkToken(token){
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    return payload
}