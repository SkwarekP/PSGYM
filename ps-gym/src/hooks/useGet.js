import {useEffect, useState} from "react";

function useGet(url) {
    const [getData, setData] = useState([])
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [url])
    
    return getData
}

export default useGet;