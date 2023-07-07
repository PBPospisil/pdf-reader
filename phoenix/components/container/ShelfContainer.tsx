import React, { useState } from 'react'
import { Book } from './BookContainer';

type Shelf = {
    name?: string;
    books?: Array<Book>;
}

interface ShelfProps {
    shelf: Shelf;
}

const ShelfContainer = (props: ShelfProps) => {
    const [books, setBooks] = useState(props.shelf);
}

export default ShelfContainer;