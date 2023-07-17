import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Not__Found = () => {
       const navigate = useNavigate() 

        useEffect(() => {
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }, [])
        return <h1>ERROR 404 - NotFound</h1>
    }
