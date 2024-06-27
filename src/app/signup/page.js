import AuthenticationTemplate from '@/components/AuthenticationTemplate'
import SignupBox from '@/components/SignupBox'
import React from 'react'

const page = () => {
  return (
  
   <AuthenticationTemplate   secondPart={ <SignupBox/> }/>
  )
}

export default page