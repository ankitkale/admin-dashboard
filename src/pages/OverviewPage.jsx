import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      < Header title='Overview' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
        className='grid grid-col-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={Zap} value= '₹ 12,000,00' color= '#6366f1' />
          <StatCard name="New Users" icon={Users} value= '1,887' color= '#8b5cf6' />
          <StatCard name="Total Products" icon={ShoppingBag} value= '28' color= '#ec4899' />
          <StatCard name="Conversion Rate" icon={BarChart2} value= '22%' color= '#10b981' />
        </motion.div> 

        {/* charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          < SalesOverviewChart/>
        </div>
      </main>
    </div>
  )
}

export default OverviewPage