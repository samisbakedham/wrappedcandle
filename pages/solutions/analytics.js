import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

AnalyticsSolutionPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function AnalyticsSolutionPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
