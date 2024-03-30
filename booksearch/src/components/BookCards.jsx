import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookCard(){

    const [post, setPost] = useState()
    const [isbn, setIsbn] = useState()
    const amazonUrl = `https://www.amazon.com/s?k=${isbn}`

    const getBook = async() => {
        fetch("https://openlibrary.org/search.json?title=james-bond")
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error(error))
    }

    useEffect(()=>{
        getBook()
    },)

    const handleClick = (isbnurl)=>{
        setIsbn(isbnurl)
    }

//https://covers.openlibrary.org/a/olid/OL23919A-M.jpg < bilde

return(
    <section className="book-cards">
        <h1>Books</h1>  
        <ul className="book-items">
            {post?.docs?.map((item, i) => <li key={i}>
            
                <h2>{post?.docs[i].title}</h2>
                <p>Published: {post?.docs[i].first_publish_year}</p>
                <p>Author: {post?.docs[i].author_name}</p>
                <p>Average Rating: {post?.docs[i].ratings_average}</p>
                <button onClick={()=>handleClick(post?.docs[i].isbn[0])}>
                    <a href={`https://www.amazon.com/s?k=${isbn}`}>Amazon</a>
                </button>
                </li>)}
        </ul>
    </section>
)
}