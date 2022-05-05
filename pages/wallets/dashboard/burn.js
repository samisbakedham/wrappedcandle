import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

BurnPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function BurnPage() {
    return <div></div>;
}
