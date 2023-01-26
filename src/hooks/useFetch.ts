import { useState, useEffect } from "react"
import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost/'
})

export const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | boolean>(false);

    useEffect(() => {
        api.post(url)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(err => {
                setError(true)
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, [])

    return { data, error, isFetching }
}