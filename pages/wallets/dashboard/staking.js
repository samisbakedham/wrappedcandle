import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

StakingPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function StakingPage() {
    return <div></div>;
}
