import React from 'react';
import Newpost from './Newpost';

const Postlist = ({posts, tittle}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {tittle}
            </h1>
            
            {posts.map((post) =>
                <Newpost post={post} key={post.id}/>
                )}
        </div>
    );
};

export default Postlist;