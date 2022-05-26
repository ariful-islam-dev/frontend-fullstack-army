import { useEffect, useState } from 'react';

const useFetchData = (url, cb) => {
    const [data, setData]=useState([]);
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        setLoading(false)
        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            setData(cb(result))
        })
        setLoading(false)
    },[url])

    return{
        data,
        loading
    }
};

export default useFetchData;