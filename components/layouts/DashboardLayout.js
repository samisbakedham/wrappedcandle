import DashboardHeader from './headers/DashboardHeader';
import DashboardSidebar from './sidebars/DashboardSidebar';

export function DashboardLayout({ children, className }) {
    const contentCss = `${className} md:ml-64`;
    const sidebarCss = 'md:w-64';

    return (
        <div className="flex w-full h-screen">
            <DashboardSidebar className={sidebarCss} />
            <main
                className={`${contentCss} w-full flex flex-col bg-zinc-100 text-black scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 dark:bg-[#111113] dark:text-white dark:scrollbar-thumb-zinc-700 dark:scrollbar-track-zinc-800`}
            >
                <DashboardHeader label="vohoangphuc.com" dashboardMode={true} />
                {children}
            </main>
        </div>
    );
}
