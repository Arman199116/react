import React, {useDeferredValue }from 'react';

const Comments = ({ comments }) => {
    //կեշավորել արդյունքը(значение) նշել՝ որպես ոչ առաջնային փոփոխությունների ժամանակ, կատարել հին արդյունքը
    const value = useDeferredValue(comments);

    return (
        <ul>
            {
                value.map(item => {
                    return (
                        <li className='box' key={item.id} >
                            <h5>{item.name}{item.body}</h5> 
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Comments;