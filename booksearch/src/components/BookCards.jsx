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


//<img src={`https://covers.openlibrary.org/a${item.key}.jpg`} alt="image"></img> funker ikke ;()
console.log(bookname)
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