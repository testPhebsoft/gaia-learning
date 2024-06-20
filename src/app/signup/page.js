import AuthenticationTemplate from '@/components/AuthenticationTemplate'
import SingupBox from '@/components/SignupBox'
import React from 'react'

const page = () => {
  return (
  
   <AuthenticationTemplate   secondPart={ <SingupBox/> }/>
  )
}

export default page