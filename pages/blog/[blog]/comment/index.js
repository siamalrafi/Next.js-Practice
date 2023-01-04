import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const id = router.query.comment;
    console.log(id);


    return (
        <div>
            <h1>This is the comment id : {id}</h1>
            <h1>commentcommentcomment</h1>
        </div>
    );
};

export default index;