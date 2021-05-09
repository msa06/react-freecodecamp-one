import Book from './Book'
const BookList = ({books}) => {
    return (
        <div className="booklist">
            {books.map((book) => (
                <Book key={book.id} {...book}/>
            ))}
            
        </div>
    )
}

export default BookList
