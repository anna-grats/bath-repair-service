import Header from '@/sections/Header/Header';
import { getDictionary } from '../dictionaries/dictionaries';

export default async function Certificate({ params: { lang } }: any) {
    const dict = await getDictionary(lang);

    return (
        <>
            <Header header={dict.header} />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex items-center justify-center">
                    <img src='/assets/images/certificate.jpg' alt="Certificate" className="max-w-[90%] max-h-[90vh] object-contain"/>
                </div>
            </div>
        </>
    );
}
