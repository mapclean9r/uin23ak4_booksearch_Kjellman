import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookCard({bookname}){

    const [post, setPost] = useState()
    const [isbn, setIsbn] = useState()
    const amazonUrl = `https://www.amazon.com/s?k=${isbn}`

    const getBook = async() => {
        try{
            const response = await fetch(`https://openlibrary.org/search.json?title=${bookname}`)
            const data = await response.json()
            setPost(data)
        } catch{
            console.error("api unable to load")
        }
    }

    useEffect(()=>{
        getBook()
    },[bookname])

    const handleClick = (isbnurl)=>{
        for(let i = 0 ; i < isbnurl.length; i++){
            if(isbnurl[i] != ""){
                setIsbn(isbnurl[i])
                return
            }
        }
    }


return(
    <section className="book-cards">
        <h1>Book archive</h1>  
        <ul className="book-items">
            {post?.docs?.map((item, i) => <li key={i}>
                <h2>{item.title}</h2>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}.jpg`} alt="image"></img>
                <p>Published: {item.first_publish_year}</p>
                <p>Author: {item.author_name}</p>
                <p>Average Rating: {item.ratings_average}</p>
                <button onClick={()=>handleClick(item.isbn)}>
                    <a href={`https://www.amazon.com/s?k=${isbn}`}>Amazon store</a>
                </button>
                </li>)}
        </ul>
    </section>
)
}