import { User } from "lucide-react"
import SettingSection from "./SettingSection"

const Profile = () => {
  return(
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img src="\src\assets\WhatsApp Image 2024-08-01 at 09.14.08_b844adf5.jpg" alt="err" className='rounded-full w-20 h-20 object-cover mr-4' />
      
      <div>
        <h3 className='text-lg font-semibold text-gray-100'>Ankit Kale</h3>
        <p className='text-gray-400'>ankitkaleofficial@gamil.com</p>
      </div>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
    </SettingSection>
)
}

export default Profile