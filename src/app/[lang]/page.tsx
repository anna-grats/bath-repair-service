import Header from '@/sections/Header/Header';
import { getDictionary } from './dictionaries/dictionaries';
import Hero from '../../sections/Hero/Hero';
import Certified from '../../sections/Certified/Certified';
import Benefits from '../../sections/Benefits/Benefits';
import Compare from '../../sections/Compare/Compare';
import Reviews from '../../sections/Reviews/Reviews';
import Works from '../../sections/Works/Works';
import ContactForm from '../../sections/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import Calculator from '../../sections/Calculator/Calculator';
import ScrollToTop from '../../components/Top/top';
import FAQ from '../../components/FAQ/FAQ';




export default async function Home({ params: { lang } }: any) {
    const dict = await getDictionary(lang)

    return(
            <>
                <Header header={dict.header} />
                <Hero hero={dict.hero} />
                <Certified certified={dict.certified} />
                <Benefits benefits={dict.benefits} />
                <Compare compare={dict.compare} />
                <Reviews />
                <Works works={dict.works} />
                <Calculator dictionary={dict.calculator} />
                <FAQ faqData={dict.faq} />
                <ScrollToTop />
                <ContactForm contact={dict.contact} />
                <Footer />
        </>
    )
}
