import DefaultLayout from '../components/layouts/DefaultLayout';
import ComingSoonAlert from '../components/placeholders/ComingSoonAlert';

PricingPage.getLayout = (page) => {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default function PricingPage() {
    return <ComingSoonAlert></ComingSoonAlert>;
}
