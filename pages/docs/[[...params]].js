import Link from "next/link";
import { useRouter } from "next/router";

const params = () => {
    const router = useRouter();
    const params = router.query.params || [];
    console.log(params);

    return (
        <div>
            <h1>this is the params</h1>
            <p>Document Home page. </p>
            {
                params?.map((param, i) => <p key={i}>{param}</p>)
            }
          
        </div>
    );
};

export default params;