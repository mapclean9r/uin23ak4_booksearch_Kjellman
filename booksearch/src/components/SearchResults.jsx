import { useState } from "react"
import BookCard from "./BookCards"

export default function SearchResults(){

    const [search, setSearch] = useState("james bond")

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    console.log(search)

    return(
        <>
        <form className="searchbar">
            <input className="bar" type="txt" id="search" placeholder="james bond" onChange={handleChange}></input>
            <input className="sub" type="submit" value="Search"></input>
        </form>
        <BookCard bookname={search}/>
        </>
    )
}