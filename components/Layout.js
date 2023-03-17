import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main />
                <div>
                    {children}
                </div>
            <main/>
        </>
    )
}