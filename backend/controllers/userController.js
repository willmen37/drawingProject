import User from "../mongodb/User.js"

async function show (req, res){
    console.log("GET/api/users")
    try{
        const foundUser = await User.findById(req.id)

        res.status(200).json({
            username: foundUser.username,
            email: foundUser.email
        })

    }catch(error){  
        console.log(error.message)
        res.status(400).json({error: error.message})

    }
    

}

export default{show}