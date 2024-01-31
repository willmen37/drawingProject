import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Profile({ username, email }) {
    return ( 
        <section className=" max-w-4xl mx-auto p-8">
            <div className='flex flex-col items-center my-12 bg-white bg-opacity-15 rounded-md p-9'>
        
                
                <FontAwesomeIcon
					className="mt-5 text-[60px] w-20"
					icon={faUser}
					beatFade
					style={{ color: "#EF4444" }}
				/>

                <p className="mt-16 text-[#BFDBFE] text-[30px] max-w[500] text-center">
					Hello {username}, Welcome back to drAwIng please LOG IN to start!!
				</p>

                <h1 className="mt-6 font-extrabold text-[#EF4444] text-[40px]">Username: {username}</h1>
                <p className="mt-6 font-extrabold text-[#EF4444] text-[40px]">Email: {email}</p>
            </div>
        </section>
        
     );
}

export default Profile;