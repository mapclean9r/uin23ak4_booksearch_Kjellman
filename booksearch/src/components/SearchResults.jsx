import { useState } from "react"
import BookCard from "./BookCards"

export default function SearchResults(){

    const [search, setSearch] = useState("james bond")

    const handleChange = (event)=>{
        if(event.target.value.length >= 3){
            setSearch(event.target.value)
        }
    }

    console.log(search)

    //<input className="sub" type="submit" value="Search"></input>
    return(
        <>
        <h2 className="head">Book search</h2>
        <form className="searchbar">
            <input className="bar" type="txt" id="search" placeholder="james bond" onChange={handleChange}></input>
        </form>
        <BookCard bookname={search}/>
        </>
    )
}