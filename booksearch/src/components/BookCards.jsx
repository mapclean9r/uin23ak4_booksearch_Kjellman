import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookCard({bookname}){

    const [post, setPost] = useState()
    const [isbn, setIsbn] = useState()
    const amazonUrl = `https://www.amazon.com/s?k=${isbn}`

    const getBook = async() => {
        fetch(`https://openlibrary.org/search.json?title=${bookname}`)
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

//<img src={`https://covers.openlibrary.org/b/isbn/${item.i_cover}.jpg`} alt="image"></img>

console.log(bookname)
console.log(post)
console.log(isbn)

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
                <button onClick={()=>handleClick(item.isbn[0])}>
                    <a href={`https://www.amazon.com/s?k=${isbn}`}>Amazon store</a>
                </button>
                </li>)}
        </ul>
    </section>
)
}