import { useState } from "react"

export default function SearchResults(){

    const [search, setSearch] = useState("")

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    return(
        <form className="searchbar">
            <input className="bar" type="txt" id="search" placeholder="james bond" onChange={handleChange}></input>
            <input className="sub" type="submit" value="Search"></input>
        </form>
    )
}