import Link from 'next/link';

export interface NavigationProps {
    NAV_ITEMS: {
        href: string;
        label: string;
    }[];
}

const Navigation = ({ NAV_ITEMS }: NavigationProps) =>
    (
    <nav className="hidden md:flex space-x-8">
        {NAV_ITEMS.map(({ href, label }) => (
            <Link className="text-gray-700 hover:text-primary text-base lg:text-base md:text-[13px]" key={href} href={`/${href}`}>
                    {label}
            </Link>
        ))}
    </nav>
);

export default Navigation;
