import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ProductviewPage from "./pages/ProductviewPage"
import OverviewPage from "./pages/OverviewPage";
import SettingsPage from "./pages/SettingsPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import UsersPage from "./pages/UsersPage";

function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element= {<OverviewPage />} />
        <Route path="/products" element= {<ProductviewPage />} />
        <Route path="/users" element= {<UsersPage />} />
        <Route path="/sales" element= {<SalesPage />} />
        <Route path="/analytics" element= {<AnalyticsPage />} />
        <Route path="/settings" element= {<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App;