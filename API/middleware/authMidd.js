const JWT = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        // create new request " alluser"
        // authorization -> select bearer token -> token input -> paste token

        let token = req.headers.authorization;
        res.send(token);

        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Token is blanked..!"
            })
        }
        console.log(token);

        // for Remove Bearer with one space in token
        let newToken = token.slice(7);
        // console.log(newToken);

        JWT.verify(newToken, "secretKey", (err, decode) => {
            if(err){
                return res.status(401).send({
                    success: false,
                    message: "Token isn't valid..!"
                })
            }
            console.log(decode);

            req.user = decode.payload;
            // console.log(req.user);
            return next();
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

module.exports = {
    verifyToken
}