import bcrypt from "bcrypt"
import User from'../mongodb/User.js'
import jwt from "jsonwebtoken"

function generateToken(newUser) {
	const payload = {
		id: newUser._id,
		username: newUser.username,
	};

	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3000 });
}

async function register(req, res) {
    console.log("REGISTER/auth/register")
	try {
		//1. check if the user exists

		const foundUser = await User.findOne({ username: req.body.username });

		if (foundUser) {
			return res.status(400).json({ error: "user already exists" });
		}

		//2. encrypt password if not existent
		const encryptedPassword = await bcrypt.hash(req.body.password, 10);

		// console.log(req.body.password)
		console.log(encryptedPassword);

		//3. add new user to the database

		console.log({ ...req.body, password: encryptedPassword });
		const newUser = await User.create({
			...req.body,
			password: encryptedPassword,
		});
		console.log(newUser);

		//4. Provide user with the token JWT and return it to the user
        const token =  generateToken(newUser)
		console.log(token);

		res.status(200).json(token );
	} catch (err) {
		console.log(err.message, "authController");
        res.status(400).json({error: err.message})
	}
}

async function login (req,res) {
  console.log("LOGIN/auth/login")
  try{
       //1. check if user exists
       const foundUser = await User.findOne({ username: req.body.username });  
       
       if (!foundUser) {
        return res.status(400).json({ error: "User not found" });
        }

       //2. check is provided password matches the one on the DB
        const validPassword =await bcrypt.compare(req.body.password, foundUser.password)

        if(!validPassword){
            return res.status(400).json({ error: "Invalid password" });
        }
   
       //3. Generate a token and return it to the user
       const token= generateToken(foundUser)
       res.status(200).json(token) 


  }catch(error){
    console.log(error, "login")
    res.status(400).json({error: error.message})
  }

}

export default {
    register,
    login
}