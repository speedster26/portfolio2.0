interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;   
    _updatedAt: string;
}
interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    bgInfo: 'string';
    email: 'string';
    heroImage: Image;
    name: 'string';
    phoneNumber: 'string';
    role: 'string';
    profilePic: Image;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    icon: Image;
}
export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    icon: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    description: string;
    projectLink: string;
    projectImg: Image;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobtitle: string;
    company: string;
    dateStarted: date;
    dateEnded: date;
    description: string[];
    technologies: Technology[];
    companyImg: Image;
    isCurrentlyWorking: boolean;
}