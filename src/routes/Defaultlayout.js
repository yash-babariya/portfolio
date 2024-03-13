import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Defaultlayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
