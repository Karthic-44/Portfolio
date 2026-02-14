export default function Projects() {
     const projects = [
        {
            name: 'Fabricated Image Analyzer',
            description: <>Developed a Convolutional Neural Network (CNN) architecture for forgery detection, leveraging pre-trained models for feature extraction.
                         <br/><br/><strong>Technologies Used:</strong>  python, flask, tensorflow, keras, pil. </>,
            link:"https://github.com/Karthic-44/Fabricated-Image-Analyzer"
            
        },
        {
            name: 'StegKit ',
            description: <>A multi-steganography toolkit built using python. This toolkit consists of image, audio, video, text encoder and decoder. This toolkit uses LSB (Least Significant Bit) to encode and decode data.
                         <br/><br/><strong>Technologies Used:</strong>  python, os, wave, numpy, cv2, shutil. </>,
            link:"https://github.com/Karthic-44/StegKit"    
    },
        {
            name: 'File-Integrity-Monitor ',
            description: <>Developed a Convolutional Neural Network (CNN) architecture for forgery detection, leveraging pre-trained models for feature extraction.
                         <br/><br/><strong>Technologies Used:</strong>  python, hashlib, tkinter, ttkbootstrap, os </>,
            link:"https://github.com/Karthic-44/File-Integrity-Monitor" 

        },
        {
            name: 'Ecommerce Application ',
            description: <>Developed a production-grade marketplace and  Implemented microservices with separate customer, admin, and seller portals with real-time inventory management. Integrated enterprise-level authentication using Spring Security with JWT tokens . 
                         <br/><br/><strong>Technologies Used:</strong> java, spring boot, spring security, jwt, postgreSQL, react+vite, redux, tailwindCSS.  </>,
            link:"https://github.com/Karthic-44/E-commerce" 

        },
       
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"></p>
            <div className="grid grid-cols-auto gap-6 my-10">
                {projects.map((project) => (
<a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className="block border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={project.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{project.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{project.description}</p>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{project.gpa}</p>
                        
                        
                    </a>
                ))}
            </div>
            
            <a href="https://github.com/Karthic-44?tab=repositories" target="_blank" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>



        </div>
    )
}