import WalletsOnboardHeader from './headers/WalletsOnboardHeader';

export function WalletsOnboardLayout({ children }) {
    return (
        <>
            <WalletsOnboardHeader />
            <main className="w-full bg-zinc-800 text-white">{children}</main>
        </>
    );
}
