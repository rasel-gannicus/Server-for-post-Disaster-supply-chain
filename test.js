

const supplies = [
    {
        title : 'Plastic Aid Box',
        category : 'Medical Equipment',
        amount : 55 , 
        img : 'https://i.ibb.co/ZVVPJcZ/ploegerson-j-ped4-HD32-Q-unsplash.jpg',
        description : ''
    },
    {
        title : 'Medicin Holder Box',
        category : 'Medical Equipment',
        amount : 445 , 
        img : 'https://i.ibb.co/tx38KqP/laurynas-me-1-TL8-Ao-EDj-c-unsplash.jpg',
        description : ''
    },
    {
        title : 'Saline Packet',
        category : 'Medical Equipment',
        amount : 2000 , 
        img : 'https://i.ibb.co/8Mg0w6H/marcelo-leal-6pc-GTJDuf6-M-unsplash.jpg',
        description : ''
    },
    {
        title : 'Stethoscope',
        category : 'Medical Equipment',
        amount : 300 , 
        img : 'https://i.ibb.co/ZN4Twrw/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg',
        description : ''
    },
    {
        title : 'Paracetamol Tablet',
        category : 'Health',
        amount : 12000 , 
        img : 'https://i.ibb.co/85NQTn8/hal-gatewood-uo7x-JIV4-Awk-unsplash.jpg',
        description : ''
    },
    {
        title : 'Felazill Tablet',
        category : 'Health',
        amount : 12000 , 
        img : 'https://i.ibb.co/qC4X8zr/freestocks-nss2e-Rz-Qwgw-unsplash.jpg',
        description : ''
    },
    {
        title : 'Floor Cleaner',
        category : 'Health',
        amount : 600 , 
        img : 'https://i.ibb.co/9yDsv92/clay-banks-k-Baf0-Dw-BPb-E-unsplash.jpg',
        description : ''
    },
    {
        title : 'N-95 Mask',
        category : 'Health',
        amount : 1600 , 
        img : 'https://i.ibb.co/C1n0Vq5/ashkan-forouzani-f44b7g7c-M7-E-unsplash.jpg',
        description : ''
    },
    {
        title : 'One Time Gloves',
        category : 'Health',
        amount : 1900 , 
        img : 'https://i.ibb.co/h7CvT4v/clay-banks-c-Ez-MOp5-Ft-V4-unsplash.jpg',
        description : ''
    },
]


const supplies2 = [
    {
        "title": "Plastic Aid Box",
        "category": "Medical Equipment",
        "amount": 55,
        "img": "https://i.ibb.co/ZVVPJcZ/ploegerson-j-ped4-HD32-Q-unsplash.jpg",
        "description": "Crafted from durable plastic, this aid box is an essential component of any emergency medical kit. With ample storage space, it ensures all necessary medical supplies are securely organized and readily accessible during critical situations. Designed for reliability and portability, it provides peace of mind for first responders and healthcare professionals alike, enabling swift and efficient response to emergencies and disasters, thereby enhancing overall community resilience and healthcare delivery."
    },
    {
        "title": "Medicine Holder Box",
        "category": "Medical Equipment",
        "amount": 445,
        "img": "https://i.ibb.co/tx38KqP/laurynas-me-1-TL8-Ao-EDj-c-unsplash.jpg",
        "description": "This medicine holder box is a vital asset in any medical facility or emergency response unit. Its sturdy construction and multiple compartments allow for the safe and organized storage of various medications, ensuring quick access during urgent situations. From analgesics to antibiotics, this box accommodates a wide range of medicines, enabling healthcare providers to deliver prompt and effective treatment to those in need, thereby mitigating the impact of disasters on public health and well-being."
    },
    {
        "title": "Saline Packet",
        "category": "Medical Equipment",
        "amount": 2000,
        "img": "https://i.ibb.co/8Mg0w6H/marcelo-leal-6pc-GTJDuf6-M-unsplash.jpg",
        "description": "Each saline packet contains a life-saving solution for dehydration and medical emergencies. With precise formulations and sterile packaging, these packets deliver essential electrolytes and fluids, replenishing the body's vital resources and supporting patients' recovery. Whether used for rehydration therapy or wound irrigation, saline packets are indispensable in disaster response efforts, providing critical support to healthcare teams and affected communities. Compact and lightweight, they can be easily transported and deployed in any emergency setting, ensuring timely and effective medical care."
    },
    {
        "title": "Stethoscope",
        "category": "Medical Equipment",
        "amount": 300,
        "img": "https://i.ibb.co/ZN4Twrw/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg",
        "description": "A trusted tool in the hands of healthcare professionals, the stethoscope is an emblem of diagnostic excellence and patient care. With its precision-engineered design and superior acoustics, it enables clinicians to listen to internal body sounds with unparalleled clarity and accuracy. From detecting abnormal heart rhythms to assessing lung function, the stethoscope plays a pivotal role in diagnosing and monitoring patients in post-disaster scenarios. Lightweight yet durable, it withstands the rigors of emergency medical practice, ensuring reliable performance when every second counts."
    },
    {
        "title": "Paracetamol Tablet",
        "category": "Health",
        "amount": 12000,
        "img": "https://i.ibb.co/85NQTn8/hal-gatewood-uo7x-JIV4-Awk-unsplash.jpg",
        "description": "These paracetamol tablets offer swift relief from pain and fever, providing essential comfort and symptom management in times of distress. With their fast-acting formulation and proven efficacy, they alleviate discomfort and promote recovery, enabling individuals to resume their daily activities with confidence. Whether used for headaches, muscle aches, or febrile illnesses, paracetamol tablets are a cornerstone of symptomatic treatment in post-disaster healthcare settings, addressing common health issues and improving overall well-being within affected communities."
    },
    {
        "title": "Felazill Tablet",
        "category": "Health",
        "amount": 12000,
        "img": "https://i.ibb.co/qC4X8zr/freestocks-nss2e-Rz-Qwgw-unsplash.jpg",
        "description": "Each Felazill tablet represents a beacon of hope and healing for those in need. Formulated with precision and care, these tablets offer targeted treatment for a variety of health conditions, from infections to inflammations. With their potent therapeutic effects and minimal side effects, Felazill tablets empower healthcare providers to deliver comprehensive care to disaster-affected populations, alleviating suffering and restoring health. Trusted by medical professionals worldwide, these tablets embody the principles of compassion and efficacy, serving as a cornerstone of post-disaster medical interventions."
    },
    {
        "title": "Floor Cleaner",
        "category": "Health",
        "amount": 600,
        "img": "https://i.ibb.co/9yDsv92/clay-banks-k-Baf0-Dw-BPb-E-unsplash.jpg",
        "description": "A clean environment is essential for promoting health and preventing disease transmission, especially in disaster-affected areas. This floor cleaner is specifically formulated to remove dirt, debris, and pathogens from surfaces, ensuring hygienic conditions in healthcare facilities and temporary shelters. With its powerful cleaning agents and disinfecting properties, it provides peace of mind to healthcare workers and residents alike, reducing the risk of infections and supporting overall recovery efforts. Easy to use and effective in action, it contributes to a safer and healthier environment for all."
    },
    {
        "title": "N-95 Mask",
        "category": "Health",
        "amount": 1600,
        "img": "https://i.ibb.co/C1n0Vq5/ashkan-forouzani-f44b7g7c-M7-E-unsplash.jpg",
        "description": "Respiratory protection is paramount in disaster response settings, where airborne contaminants pose significant health risks. The N-95 mask sets the standard for respiratory protection, filtering out 95% of airborne particles, including viruses and bacteria. With its snug fit and advanced filtration technology, it forms a barrier against respiratory hazards, safeguarding the health of frontline workers and vulnerable individuals. From healthcare professionals to disaster responders, wearing an N-95 mask is essential for minimizing the spread of infectious diseases and ensuring occupational safety in high-risk environments."
    },
    {
        "title": "One Time Gloves",
        "category": "Health",
        "amount": 1900,
        "img": "https://i.ibb.co/h7CvT4v/clay-banks-c-Ez-MOp5-Ft-V4-unsplash.jpg",
        "description": "Disposable gloves are a fundamental component of infection control measures in healthcare settings, particularly during emergencies and disasters. These one-time gloves offer reliable hand protection for healthcare workers and volunteers, reducing the risk of cross-contamination and infection transmission. Made from high-quality materials and designed for single use, they provide a barrier against pathogens and hazardous substances, ensuring safe and hygienic patient care. Whether administering treatments or handling medical supplies, wearing one-time gloves is essential for maintaining aseptic conditions and upholding quality standards in"
    }
    ]
