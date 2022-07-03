import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getBooks } from '../redux/app/action';
import { Link } from 'react-router-dom';
export const SingleBooks = () => {

    const { id } = useParams();
    const dispatch = useDispatch()

    const books = useSelector(state => state.AppReducer.books)

    const [currentBook, setCurrentBook] = useState({})

    useEffect(() => {
        if (books?.length === 0) {
            dispatch(getBooks())
        }
    })

    useEffect(() => {
        if (id) {
            const temp = books?.find(book => book.id === Number(id))

            temp && setCurrentBook(temp)
        }
    }, [books, id])


    return (
        <div>
            <h2>{currentBook?.book_name}</h2>
            <div>{currentBook?.release_year}</div>

            <button><Link to={`books/${currentBook.id}`}>Edit</Link></button>
        </div>
    )
}
