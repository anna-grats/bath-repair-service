const FeatureCard = ({ icon, text }) => (
    <div className="bg-white rounded-3xl p-4 flex items-center">
        <img src={icon} width={8} height={8}  alt="Icon" className="w-8 h-8 text-primary mr-4" />
        <span className="text-black text-[16px]">{text}</span>
    </div>
);

 export default FeatureCard;