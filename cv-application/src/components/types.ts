export interface Contact {
    phoneNumber: string;
    email: string;
    location: string;
    linkedin?: string;
    github?: string;
}

export interface Profile {
    profile: string;
}

export interface EmploymentHistory {
    company: string;
    position: string;
    achievements?: string;
    responsibilities: string;
    fromDate: string;
    toDate: string;
}

export interface Education {
    school: string;
    field: string;
    fromDate: string;
    toDate: string;
}

export interface Skills {
    skill: string;
}