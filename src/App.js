import BookList from './components/BookList'

export const App = (props) => {
    return (
        <div className="container"> 
            <h1>My Personal Library</h1>
            <BookList/>
        </div>
    )
}


export default App
