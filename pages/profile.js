import {useGlobalContext} from "../store"

export default function Home() {
    const {session} = useGlobalContext()

    return (
        <div>
            <h1>Profile</h1>
            {JSON.stringify(session)}
        </div>
    )
}