import React from 'react'

import { BookLists } from '../components/BookLists'
import { FilterSort } from '../components/FilterSort'

import styled from 'styled-components'

export const Boooks = () => {

    return (
        <div>
            <h2>Books</h2>
            <BookPageWrapper>
                <FilterSortWrapper>
                    <FilterSort />
                </FilterSortWrapper>
                <BookListWrapper>
                    <BookLists />
                </BookListWrapper>
            </BookPageWrapper>
        </div>
    )
}

const BookPageWrapper = styled.div`
display:flex;
`;

const FilterSortWrapper = styled.div`
width:300px;
border:1px solid black;
`

const BookListWrapper = styled.div`
width:100%;
border:1px solid black;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(310px, max-content));
grid-gap:16px;
justify-content:center;
padding:initial;
`