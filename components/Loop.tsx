import LogoLoop from "./LogoLoop";

export default function BrandsSection() {
  const techLogos = [
    {
      src: "https://images.seeklogo.com/logo-png/43/2/ankara-valiligi-yeni-logo-png_seeklogo-431339.png",
      alt: "logo1",
      href: "/destekcilerimiz/ankara-valiligi",
    },
    {
      src: "https://supabase.rovand.cloud/storage/v1/object/public/media//adiyaman-valiligi-seeklogo.png",
      alt: "logo2",
      href: "/destekcilerimiz/adiyaman-valiligi",
    },
    {
      src: "https://odu.edu.tr/dist_theme/images/oduk.png",
      alt: "logo3",
      href: "/destekcilerimiz/ordu-universitesi",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/tr/9/92/B%C3%BClent_Ecevit_%C3%9Cniversitesi_logo.png",
      alt: "logo4",
      href: "/destekcilerimiz/bulent-ecevit-universitesi",
    },
    {
      src: "https://www.karabuk.edu.tr/belgeler/logo_pack/AmblemStyledBig_noBg.png",
      alt: "logo5",
      href: "/destekcilerimiz/karabuk-universitesi",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/tr/8/83/T%C3%BCrkiye_Cumhuriyeti_Konya_Valili%C4%9Fi_Kurumsal_Logosu.png",
      alt: "logo6",
      href: "/destekcilerimiz/konya-valiligi",
    },
    {
      src: "https://supabase.rovand.cloud/storage/v1/object/public/media//Screenshot_2026-05-06_at_21.58.27-removebg-preview.png",
      alt: "logo7",
      href: "/destekcilerimiz/yalova-valiligi",
    },
    {
      src: "https://www.ankara.edu.tr/assets/images/logo.png",
      alt: "logo8",
      href: "/destekcilerimiz/ankara-universitesi",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van_B%C3%BCy%C3%BCk%C5%9Fehir_Belediyesi_logo.svg/960px-Van_B%C3%BCy%C3%BCk%C5%9Fehir_Belediyesi_logo.svg.png",
      alt: "logo9",
      href: "/destekcilerimiz/van-valiligi",
    },
    
  ];

  
  return (
    <div className="w-full   bg-white dark:bg-black flex justify-center mb-20 mt-10">
      <div className="w-full  md:w-[60%] flex flex-col items-center">
        

        {/* YÜKSEKLİK EKLEMİYOR — sadece içerik kadar alan kaplıyor */}
        <div className="w-full relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={42}
            gap={35}
            hoverSpeed={0}
            fadeOut
            fadeOutColor=""
            ariaLabel=""
          />
        </div>
      </div>
    </div>
  );
}