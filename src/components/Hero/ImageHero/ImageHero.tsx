
const ImageHero = () => (
    <div className="lg:flex-1 mt-8 lg:mt-0 relative">
        <img
            src='assets/images/vectors/blue_vector_1.png'
            alt="Blue vector 1"
            className="absolute inset-0 w-[90%] h-full object-cover z-0 transform scale-125 blur-lg brightness-5"
        />
        <img
            src="/assets/images/bathroom_hero.png"
            alt="Bathroom refinishing"
            className="relative rounded-3xl w-full h-auto shadow-lg"
        />
    </div>
);

export default ImageHero;
