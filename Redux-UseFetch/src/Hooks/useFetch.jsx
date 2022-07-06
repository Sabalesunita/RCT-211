import React from 'react'
import { useEffect, useState } from 'react'
export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = () => {
        fetch("https://api.github.com/search/users?q=masai")
            .then((r) => r.json())
            .then((r) => { setData(r.items); setLoading(false) })
            .catch((e) => { setError(true); setLoading(false) })

    }
    useEffect(() => {
        fetchData()
    }, [])

    return {
        data, loading, error
    }
}
