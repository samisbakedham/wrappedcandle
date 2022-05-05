import { DashboardLayout } from '../../../components/layouts/DashboardLayout';

BridgePage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function BridgePage() {
    return <div></div>;
}
