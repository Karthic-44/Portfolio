export default function Education() {
    const educations = [
        {
            name: 'MCA',
            description: 'SRM UNIVERSITY ',
            gpa: "CGPA: 9.42"
        },
        {
            name: 'BCA',
            description: 'SRM UNIVERSITY ',
            gpa: "CGPA: 9.67"
        },
        {
            name: 'High School',
            description: 'SINDHI MODEL SENIOR SECONDARY SCHOOL',
            gpa:<>12th: 76%  <br/> 10th: 75%</>

        },
       
    ];
    return (
        <div id="educations" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">Education</h2>

            <div className="grid grid-cols-auto gap-6 my-10">
                {educations.map((education) => (
                    <div key={education.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={education.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{education.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{education.description}</p>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{education.gpa}</p>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    )
}