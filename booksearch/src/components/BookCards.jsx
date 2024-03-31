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
//<img href={`https://covers.openlibrary.org/a${post?.docs[i].key}.jpg`}>e</img>
console.log(post)

return(
    <section className="book-cards">
        <h1>Book archive</h1>  
        <ul className="book-items">
            {post?.docs?.map((item, i) => <li key={i}>
            
                <h2>{item.title}</h2>
                <p>Published: {item.first_publish_year}</p>
                <p>Author: {item.author_name}</p>
                <p>Average Rating: {item.ratings_average}</p>
                <button onClick={()=>handleClick(item.isbn[0])}>
                    <a href={`https://www.amazon.com/s?k=${isbn}`}>Amazon store</a>
                </button>
                </li>)}
        </ul>
    </section>
)
}