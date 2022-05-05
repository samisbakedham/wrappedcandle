import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

CommerceSolutionPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function CommerceSolutionPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
