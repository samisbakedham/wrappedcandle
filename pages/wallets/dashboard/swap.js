import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

SwapPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function SwapPage() {
    return <div></div>;
}
