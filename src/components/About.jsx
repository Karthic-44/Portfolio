export default function About() {
   

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'python, java, javascript, react, PostgreSQL, mySQL.',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'M.C.A in Computer Science',
        },
        {
            name: 'Skills',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'network security, vulnerability assessment, security auditing, enumeration, reconnaissance, python scripting.',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

<div className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20">
            
<div className="flex-1 flex flex-col items-center">
                    <p className="mb-10 max-w-2xl font-Ovo">I am a penetration tester and a java backend developer passionate about building scalable and secure web applications. My goal is to secure systems and contribute to making the digital world a safer place.</p>

<ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
           
                    
                </div>
            </div>
        </div>
    )
}