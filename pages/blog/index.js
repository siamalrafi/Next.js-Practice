import Link from "next/link";

function PostList({ data }) {
    console.log(data);
    return (
        <div>
            <h1>This is the PostList.</h1>
            {
                data?.map(post => {
                    return (
                        <Link href={`/blog/${post.id}`}>
                            <div style={{ backgroundColor: "white", textAlign: 'center', border: '5px solid green ', color: 'black' }} key={post.id}>
                                <h1>{post.id}</h1>
                                <h1>{post.title.slice(0, 50)}</h1>
                                <h1>{post.body.slice(0, 10)}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(ctx) {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
};




export default PostList;