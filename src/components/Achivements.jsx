export default function Achivements() {
     const achivements = [
       
               {
            name: "TECHNORA'25",
            date: '18 sep 2025',
            description: <>
                         <br/><strong>Organizing Committe</strong><br/> Organized a national technical symposium with 200+ participants from multiple colleges. Worked with the technical team to resolve technical issues  </>,
            
        },

            {
            name: "TECHTRIX'24",
            date: '10 OCT 2024',
            description: <>
                         <br/><strong>Lead Organizer</strong><br/> Organized a national technical symposium with 400+ participants led a team of 50 organizers.  </>,
            
        },


        {
            name: "ALAN 0' BRIAN QUIZ (ONINE)",
            date: '28 jul 2024',
            description: <>
                         <br/><strong>Lead Organizer</strong><br/> Organized an international online technical quiz with 500+ participants from 15 countries and led a team of 10 organizers.  </>,
            
        },

       
        
       
       
    ];
    return (
        <div id="achivements" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">Achivements</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"></p>
<div className="grid grid-cols-auto gap-6 my-10 max-w-3xl mx-auto">
                {achivements.map((achivement) => (
<a key={achivement.name}  target="_blank" rel="noopener noreferrer" className="block border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={achivement.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{achivement.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{achivement.date}</p>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{achivement.description}</p>
                        
                        
                        
                    </a>
                ))}
            </div>
            
           


        </div>
    )
}