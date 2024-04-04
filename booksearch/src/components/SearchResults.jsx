import { useState } from "react"
import BookCard from "./BookCards"

export default function SearchResults(){

    const [search, setSearch] = useState("")
    const [result, setResult] = useState("james bond")

    const handleChange = (event)=>{
        if(event.target.value.length >= 3){
            setSearch(event.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setResult(search)
        
    }

    console.log(search)

    //<input className="sub" type="submit" value="Search"></input>
    return(
        <>
        <header className="header">
            <h1 className="head">Book-lookup</h1>
            <p className="subtext">Open Liberary API book lookup</p>
        </header>

        <form className="searchbar" onSubmit={handleSubmit}>
            <input className="bar" type="txt" id="search" placeholder="james bond" onChange={handleChange}></input>
            <input className="sub" type="submit" value="Search" ></input>
        </form>
        <BookCard bookname={result}/>
        </>
    )
}