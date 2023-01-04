function blogDetails({ data }) {
    console.log(data);
    
    return (
        <div>
            Enter
        </div>
    );
}

export async function getStaticProps(ctx) {
    const { params } = ctx;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } } // See the "paths" section below
        ],
        fallback: true,  // See the "fallback" section below
    };
}

export default blogDetails;