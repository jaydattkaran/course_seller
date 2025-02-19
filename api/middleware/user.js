const jwt = require("jsonwebtoken");
const{ JWT_USER_PASSWORD } = require("../config")
const userModel = require("../routes/user")


// console.log(JWT_USER_PASSWORD, "jwt secret key")
function userMiddleware(req, res, next) {
    // console.log(req.headers, "All Request Headers"); // ✅ Debugging

    const authHeader = req.headers.authorization;
    // console.log(authHeader, "authHeader received in middleware"); // ✅ Debugging

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Access Denied - No token provided" });
    }

    const token = authHeader.split(" ")[1]; // ✅ Extract the token
    // console.log(token, "Extracted token for verification"); // ✅ Debugging

    try {
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);
        // console.log(decoded, "Decoded token payload"); // ✅ Debugging

        req.userId = decoded.id;
        next();
    } catch (err) {
        // console.error(err, "JWT Verification Error"); // ✅ Log error details
        return res.status(403).json({ message: "Invalid token" });
    }
}


module.exports = {
    userMiddleware: userMiddleware
}