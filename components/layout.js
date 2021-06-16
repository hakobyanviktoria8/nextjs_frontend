import Link from 'next/link';

export default function Layout({ children, home }) {
    return <div>
        {children}
        {!home && (
            <div>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
        </div>
}