import React, { useState, useEffect } from 'react'
import { Md5 } from 'ts-md5/dist/md5'

//data needed for hash
const url = 'https://gateway.marvel.com:443/v1/public'
const publicKey = '89dd9f6152897008a59e0050cecf5713'
const privateKey = 'e3e2db831d87d93f01ede25bfdc6bd0d46ac9fa6'
const timeStamp = Date.now()

//hash creation
const hash = Md5.hashStr(timeStamp + privateKey + publicKey)

export const ComicsData = () => {

    const [comics, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url + `/comics?limit=20&offset=20&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            const postData = await response.json()

            setData(postData.data.results)
        }

        fetchData()
    }, [])

    return(
        <div className="comics-container">
            {comics.map((comic, i) => {
                return(
                    <div key={i}>
                        <p>{comic.id}</p>
                    </div>
                )
            })}
        </div>
    )
    
}