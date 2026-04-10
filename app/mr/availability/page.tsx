import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import InventoryBadge from "@/components/InventoryBadge";

export const runtime = "edge";

export const metadata = {
  title: "उपलब्धता आणि किंमत | कुमार मॅग्नासिटी",
  description: "कुमार मॅग्नासिटीमधील उपलब्ध प्लॉट्सची माहिती मिळवा. ३००० ते ५००० चौ.फूट पर्यंतचे प्लॉट्स उपलब्ध."
};

export default function MarathiAvailabilityPage() {
  return (
    <PillarTemplate 
      isMarathi={true}
      title="प्लॉट्सची उपलब्धता" 
      subtitle="फेज १ मधील मर्यादित प्लॉट्स उपलब्ध. आजच तुमचा प्लॉट राखून ठेवा."
      badge="उपलब्धता"
    >
      <div className="bg-dark text-white p-12 rounded-[4rem] text-center space-y-8">
         <InventoryBadge text="शेवटचे १२ प्लॉट्स शिल्लक" />
         <div className="space-y-2">
           <p className="text-accent uppercase font-bold tracking-widest text-xs">किंमत सुरु</p>
           <p className="text-5xl md:text-6xl font-heading font-bold">₹२.२५ कोटी*</p>
         </div>
      </div>
      <div id="contact" className="mt-32 max-w-4xl mx-auto">
        <EnquiryForm 
          title="इन्व्हेंटरी लिस्ट मिळवा" 
          subtitle="उपलब्ध प्लॉट्स आणि किमतींची पीडीएफ मिळवण्यासाठी संपर्क करा."
          buttonText="लिस्ट डाउनलोड करा" 
        />
      </div>
    </PillarTemplate>
  );
}
