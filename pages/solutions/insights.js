import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

InsightsSolutionPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function InsightsSolutionPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
