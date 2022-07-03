import React, { useEffect } from 'react'
import { BookCard } from './BookCard'
import styled from 'styled-components'
import { getBooks } from '../redux/app/action'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams, Link } from 'react-router-dom'
export const BookLists = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const books = useSelector(state => state.AppReducer.books)

    const loaction = useLocation()

    useEffect(() => {

        if (books.length === 0 || loaction.search) {
            const sortBy = searchParams.get('sortBy')

            let getBooksParams = {
                params: {
                    category: searchParams.getAll('category'),
                    _sort: sortBy && "release_year",
                    _order: sortBy
                }
            }
            dispatch(getBooks(getBooksParams))
        }

    }, [loaction.search])

    return (
        <>
            {books.length > 0 && books.map((e) => {
                return (
                    <BookCardWrapper key={e.id} >
                        <Link to={`/books/${e.id}`}>   <BookCard bookData={e} /></Link>
                    </BookCardWrapper>
                )
            })}
        </>
    )
}

const BookCardWrapper = styled.div`
border:1px solid blue;
width:310px;
padding:5px;
`