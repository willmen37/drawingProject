import jwt from "jsonwebtoken"

function authorize(req, res, next) {

    try{
        console.log("Authorizing...")
        //1. Check if the request has a token ( in authorization header)
    
        let token = req.header("Authorization")
    
        if(!token){
            return res.status(400).json({error: "No token provided"})
        }
        // console.log(token, "before")

        token = token.replace("Bearer ", "")

        // console.log(token, "AFTER")
    
        //2. check that the token is valid and not expired
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(payload)

        if(payload.error){
            return res.status(400).json({error: payload.error})
        }
       
    
        //3. attach payload information from the token to the request object (req)
        req.id = payload.id
        req.usermane = payload.username
    
        //4. Move on to the requested route (next)
        next()

    }catch(error){
        console.log(error.message)
        res.status(400).json({error: error.message})

    }

}

export default authorize
