export default function Certifications() {
    const certifications = [
           {
            name: 'CHFIv11',
            description: 'Computer Hacking Forensic Investigator EC-Council v11',
            
        },
        {
            name: 'CEHv12',
            description: 'Certified Ethical Hacker EC-Council v12',
            
        },
      
    ];
    return (
        <div id="certifications" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">Certifications</h2>

            <div className="grid grid-cols-auto gap-6 my-10">
                {certifications.map((certification) => (
                    <div key={certification.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={certification.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{certification.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{certification.description}</p>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{certification.gpa}</p>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    )
}