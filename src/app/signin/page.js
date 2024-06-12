import AuthenticationTemalate from '@/components/AuthenticationTemplate'
import SigninBox from '@/components/SigninBox'
import React from 'react'

const page = () => {
  return (
  
   <AuthenticationTemalate   secondPart={  <SigninBox /> }/>
  )
}

export default page