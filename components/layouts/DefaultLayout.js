import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';

export default function DefaultLayout({ hideHeader, hideFooter, children }) {
    return (
        <>
            {hideHeader || <DefaultHeader />}
            <main className="min-h-screen w-full bg-zinc-800 text-white">
                {children}
            </main>
            {hideFooter || <DefaultFooter />}
        </>
    );
}
