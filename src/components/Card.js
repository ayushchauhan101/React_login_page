import React from 'react'
// This contains the login card ui

import Form from './Form'

function Card() {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-200 justify-center mx-auto object-contain">
      <div className="flex flex-col bg-white rounded-md shadow-lg">

        <div className="p-5 bg-white md:flex-1 rounded-md">
          <div>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          </div>
          <Form />
        </div>

      </div>
    </div>
  )
}

export default Card