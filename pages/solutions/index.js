import DefaultLayout from '../../components/layouts/DefaultLayout';
import ComingSoonAlert from '../../components/placeholders/ComingSoonAlert';

SolutionsPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function SolutionsPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
