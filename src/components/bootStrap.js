"use client"

import { useEffect } from 'react'

function BootStrap() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js')
    }, [])

    return null;
}

export default BootStrap;