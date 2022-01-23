import { NextPage } from "next"
import { useRouter } from "next/router"


const Room: NextPage = () => {
    const router = useRouter()

    return (
        <>
            <h1>
                Hello World
            </h1>
        </>
    )
}

export default Room