export default function Experience() {
     const experience = [
        {
            name: 'ZYBEAK TECHNOLOGIES PVT.LTD	(Chennai)',
            description: <>Jul 2024 – Sep 2024 
                         <br/><br/><strong>Penetration Tester</strong><ul><li>Conducted vulnerability assessments and penetration tests on various systems and applications. </li>
<li>Analyzed security protocols and identified potential vulnerabilities. </li>
<li>Collaborated with the security team to develop and implement security solutions. </li>
<li>Prepared detailed reports and presentations on findings and recommendations.</li></ul> </>,
            
        },
       
       
    ];
    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">Experience</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"></p>
<div className="grid grid-cols-auto gap-6 my-10 max-w-3xl mx-auto">
                {experience.map((experience) => (
<a key={experience.name}  target="_blank" rel="noopener noreferrer" className="block border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={experience.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{experience.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{experience.description}</p>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{experience.gpa}</p>
                        
                        
                    </a>
                ))}
            </div>
            
           


        </div>
    )
}