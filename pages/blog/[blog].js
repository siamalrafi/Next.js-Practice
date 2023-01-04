import Link from "next/link";
import { useRouter } from "next/router";

const blog = () => {
    const router = useRouter();
    const id = router.query.blog;
    console.log(id);

    return (
        <div>
            <h1>Blog {id}</h1>

            <Link href={'/'}>
                <h1>Go to Home</h1>
            </Link>
        </div>
    );
};

export default blog;