import React, {useEffect, useState, useTransition} from 'react';
import Comments from './Comments';

const filterBySearch = (comments, search) => comments.filter(item => (item.name.concat(item.body))
.includes(search))


function UseTransition () {
    const [comments, setComment] = useState([]);
    const [search, setSearch] = useState('');
    const [isPanding, startTransistion] = useTransition();

    const handleSearch = (e) => {
        // startTransistion(() => {
            setSearch(e.target.value);

        // })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=8')
            .then(res => res.json())
            .then(setComment)
    },[])
    return (
        <>
            <input  onChange={handleSearch}  />
            <Comments comments={filterBySearch(comments, search)} />
    )   </>
    )
}

export default UseTransition;