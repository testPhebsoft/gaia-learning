import AuthenticationTemalate from '@/components/AuthenticationTemplate'
import SingupBox from '@/components/SignupBox'
import React from 'react'

const page = () => {
  return (
  
   <AuthenticationTemalate   secondPart={ <SingupBox/> }/>
  )
}

export default page