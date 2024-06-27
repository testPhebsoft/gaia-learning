import AuthenticationTemplate from '@/components/AuthenticationTemplate'
import SigninBox from '@/components/SigninBox'
import React from 'react'

const page = () => {
  return (
   <AuthenticationTemplate secondPart={  <SigninBox /> }/>
  )
}

export default page