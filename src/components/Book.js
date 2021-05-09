import React from 'react'

const Book = ({name,author,coverimg,isread}) => {
    return (
        <div className={`book ${isread && 'isread'}`}>
            <img src={coverimg}/>
            <h2>{name}</h2>
            <h4>by {author}</h4>
        </div>
    )
}

export default Book
