import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

AssetsPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function AssetsPage() {
    return <div></div>;
}
