import { useEffect, useState } from "react";

export default function BookShowcase({book}){


    const [result, setResult] = useState(null)
    console.log(book)
    const getBook = async() => {
        fetch(book)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error(error))
    }

    useEffect(()=>{
        getBook()
    },[])

    return(
        <h2>{result?.title}</h2>
    )
}