import React, { useState } from 'react'
import { Book } from './BookContainer'
import { ShelfPresenter } from '../presenter/ShelfPresenter';

type Shelf = {
    name?: string;
    books?: Array<Book>;
}

interface ShelfProps {
    shelf: Shelf;
}

const ShelfContainer = (props: ShelfProps) => 
{
    const [books, setBooks] = useState(props.shelf)

    return (
        <ShelfPresenter></ShelfPresenter>
    )
}

export default ShelfContainer;