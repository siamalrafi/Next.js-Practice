import { useRouter } from 'next/router';
import React from 'react';

const commentId = () => {
    const router = useRouter();
    const { blog, commentId } = router.query;
    console.log(blog, commentId);



    return (
        <div>
            <h1>This is the CommentId.</h1>

            <p>commentId {commentId} for blog Number {blog}</p>






        </div>
    );
};

export default commentId;