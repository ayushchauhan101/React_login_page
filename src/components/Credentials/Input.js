// contains input of email and password
import React from 'react'

function Email(){
    return(
        <div className="flex flex-col space-y-1">
        <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
        <input 
            type="email" 
            id="email" 
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
        </div>
    )
    
}

function Password(){
    return(
    <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
        </div>
        <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
            <input type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"/>
        <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>  
    </div>
    )
}

function Remember(){
    return(
        <div className="flex items-center space-x-2">
            <input type="checkbox"id="remember" className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"/>
            <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
        </div>
    )
}

function Input(){
    return (
        <div>
            <Email />
            <Password />
            <Remember />
        </div>
    )
}

export default Input