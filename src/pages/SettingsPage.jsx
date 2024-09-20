import Header from "../components/common/Header"
import Dangerzone from "../components/settings/Dangerzone"
import Notification from "../components/settings/Notification"
import Profile from "../components/settings/Profile"

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
            < Header title='Settings Page' />
            <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
                <Profile />
                <Notification />
                <Dangerzone />
            </main>
    </div>
  )
}

export default SettingsPage
