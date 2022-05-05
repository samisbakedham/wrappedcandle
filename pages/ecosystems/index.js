import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

EcosystemsPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function EcosystemsPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
