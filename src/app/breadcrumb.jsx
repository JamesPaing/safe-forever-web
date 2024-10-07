'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DynamicHero() {
    const pathname = usePathname();

    const getPageTitle = () => {
        const path = pathname.split('/').filter(Boolean);
        if (path.length > 0) {
            const lastPath = path[path.length - 1];
            return (
                lastPath.charAt(0).toUpperCase() +
                lastPath.slice(1).replace(/-/g, ' ')
            );
        }
        return 'Home';
    };

    const getBreadcrumbs = () => {
        const path = pathname.split('/').filter(Boolean);
        return path.map((part, index) => {
            const href = `/${path.slice(0, index + 1).join('/')}`;
            const name =
                part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
            return { name, href };
        });
    };

    const pageTitle = getPageTitle();
    const breadcrumbs = getBreadcrumbs();

    return (
        <div className="hero-section section h-[70vh] relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/sf3.jpg')", opacity: 0.9 }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="container mx-auto h-full relative z-10">
                <div className="flex items-center h-full justify-center">
                    <div className="max-w-lg">
                        <div className="relative hero-content flex flex-col justify-center items-center">
                            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-mild my-4 whitespace-nowrap">
                                {pageTitle}
                            </h2>
                            <nav aria-label="Breadcrumb" className="mb-6">
                                <ol className="flex items-center space-x-2 text-mild">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-rosesecondary text-lg"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    {breadcrumbs.map((crumb, index) => (
                                        <li key={crumb.href}>
                                            <span className="mx-2 text-mild">
                                                /
                                            </span>
                                            {index ===
                                            breadcrumbs.length - 1 ? (
                                                <span aria-current="page">
                                                    {crumb.name}
                                                </span>
                                            ) : (
                                                <Link
                                                    href={crumb.href}
                                                    className="hover:text-rosesecondary text-lg"
                                                >
                                                    {crumb.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
