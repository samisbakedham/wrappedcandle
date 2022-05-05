import { ChevronLeftIcon } from '@heroicons/react/solid';
import BetterLink from '../links/BetterLink';
import Image from 'next/image';
import { useRouter } from 'next/router';

const walletProviders = [
    {
        name: 'Metamask',
        description: 'Connect using browser wallet',
        url: 'https://metamask.io/',
        imageUrl: '/images/icons/metamask.svg',
    },
    {
        name: 'Coinbase Wallet',
        description: 'Connect using Coinbase Wallet',
        url: 'https://www.coinbase.com/',
        imageUrl: '/images/icons/coinbase.svg',
    },
    {
        name: 'Bitski Wallet',
        description: 'Connect using Bitski Wallet',
        url: 'https://bitski.com/',
        imageUrl: '/images/icons/bitski.svg',
    },
    {
        name: 'Venly',
        description: 'Connect using Venly Wallet',
        url: 'https://venly.io/',
        imageUrl: '/images/icons/venly.svg',
    },
    {
        name: 'Wallet Connect',
        description: 'Connect using mobile wallet',
        url: 'https://walletconnect.org/',
        imageUrl: '/images/icons/wallet-connect.svg',
    },
];

export default function Auth() {
    const router = useRouter();

    const nagivateBack = () => {
        router.back();
    };

    return (
        <div className="relative text-black dark:text-white flex min-h-screen flex-col items-center md:justify-center ">
            <div className="fixed -z-10 h-screen w-screen bg-gradient-to-br from-red-500 to-blue-500 md:bg-gradient-to-r"></div>

            <button
                className="m-8 flex items-center space-x-1 rounded-lg bg-white/60 py-3 pl-4 pr-6 font-bold shadow transition duration-300 hover:bg-white hover:shadow-xl dark:bg-zinc-900/60 dark:text-white dark:hover:bg-zinc-900 md:absolute md:top-0 md:left-0"
                onClick={nagivateBack}
            >
                <ChevronLeftIcon className="h-6 w-6" />
                <div>Back</div>
            </button>

            <div className="rounded-lg px-4 py-8 shadow bg-zinc-700/50 text-zinc-200 md:m-16 md:px-16">
                <div>
                    <h1 className="mb-8 flex items-center justify-center py-2 text-lg font-bold md:text-xl">
                        <div>Choose your preferred provider</div>
                    </h1>

                    <div className="mt-8 space-y-4">
                        {walletProviders.map((provider) => (
                            <BetterLink
                                key={provider.name}
                                href={provider.url}
                                target="_blank"
                                className="flex items-center space-x-2 bg-black/10 hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300"
                            >
                                <Image
                                    className="h-8 w-auto"
                                    src={provider.imageUrl}
                                    alt={provider.name}
                                    width={64}
                                    height={64}
                                />

                                <div className="flex-1">
                                    <div className="font-bold">
                                        {provider.name}
                                    </div>
                                    <div className="text-sm text-zinc-300">
                                        {provider.description}
                                    </div>
                                </div>
                            </BetterLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
