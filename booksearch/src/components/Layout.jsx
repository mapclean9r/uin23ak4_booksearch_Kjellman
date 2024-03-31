import SearchResults from "./SearchResults";

export default function Layout({children}){
    return(
        <>

            <SearchResults/>

        <main>
            {children}
        </main>
        <footer>API openlibrary</footer>
        </>
    )
}