import React from 'react'
import ConfiguringRoutes from './components/1ConfiguringRoutes'
import Links from './components/2Links'
import ActiveLinks from './components/3ActiveLinks'
import Navigating from './components/4NavigatingProgrammatically'
import NestedRoutes from './components/5NestedRoutes'
import DynamicRoutes from './components/6DynamicRoutes'
import LazyLoading from './components/7LazyLoading'
import ProtectedRoutes from './components/8ProtectedRoutes'

export default function App() {
  return (
    <div>
      {/* <Links/> */}
      {/* <ActiveLinks /> */}
      {/* <ConfiguringRoutes /> */}
      {/* <Navigating /> */}
      {/* <NestedRoutes/> */}
      {/* <DynamicRoutes /> */}
      {/* <LazyLoading /> */}
      <ProtectedRoutes />
    </div>
  )
}
