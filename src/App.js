import BookList from './components/BookList'
import {books} from './books'
export const App = (props) => {
    return (
        <div className="container"> 
            <h1>My Personal Library</h1>
            <BookList books={books}/>
        </div>
    )
}


export default App
