import React from 'react'

import Input from './Credentials/Input'
import GithubLogin from './Credentials/GithubLogin'
import SubmitButton from './Credentials/SubmitButton'

const Form = () => {
  return (
    <div>
        <form action="#" className="flex flex-col space-y-5">
          {/* email and password */}
          <Input />

          {/* submit login */}
          <SubmitButton />

          {/* github login */}
          <GithubLogin />

        </form>
    </div>
  )
}

export default Form