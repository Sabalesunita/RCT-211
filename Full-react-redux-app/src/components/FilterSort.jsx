import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useDispatch } from 'react-redux'

export const FilterSort = () => {

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const urlCategory = searchParams.getAll('category')

    const urlSort = searchParams.get('sortBy')
    const [category, setCategory] = useState(urlCategory || [])

    const [sortBy, setSortBy] = useState(urlSort || "")

    const handleChangebox = (e) => {
        const option = e.target.value;
        let newCateogry = [...category];

        if (category.includes(option)) {
     
            newCateogry.splice(newCateogry.indexOf(option), 1)

        } else {
            newCateogry.push(option)
        }
        setCategory(newCateogry)
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        if (category || sortBy) {
            let params = {};
            category && (params.category = category);
            sortBy && (params.sortBy = sortBy)
            setSearchParams(params)
        }
    }, [category, dispatch, setSearchParams, sortBy])

    return (
        <div>
            <h3>FilterSort</h3>
            <div>
                <input onChange={handleChangebox} type="checkbox" value="Novel" defaultChecked={category.includes('Novel')} />
                <label>Novel</label>
            </div>

            <div>
                <input onChange={handleChangebox} type="checkbox" value="Science_Fiction" defaultChecked={category.includes('Science')} />
                <label>Science_Fiction</label>
            </div>

            <div>
                <input onChange={handleChangebox} type="checkbox" value="Thriller" defaultChecked={category.includes('Thirller')} />
                <label>Thriller</label>
            </div>

            <div>
                <input onChange={handleChangebox} type="checkbox" value="Motivational" defaultChecked={category.includes('Thirller')} />
                <label>Motivational</label>
            </div>
            <h3>Sort</h3>
            <div onChange={handleSort}>
                <input type="radio" value="asc" name='sortBy' defaultChecked={sortBy === 'asc'} /> Ascending
                <input type="radio" value="desc" name='sortBy' defaultChecked={sortBy === 'desc'} /> Descending
            </div>
        </div>
    )
}
