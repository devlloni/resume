import React from "react";

interface ContactSocialData {
    name: string;
    url: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

interface ContactData {
    email: string;
    tel: string;
    social: Array<ContactSocialData>; 
}

interface EducationData {
    school: string;
    degree: string;
    start: string;
    end: string;
}

interface WorkData {
    company: string;
    link: string;
    badges: Array<string>;
    title: string;
    start: string;
    end: string;
    description: string;
}

export interface ResumeData {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    avatarUrl: string;
    personalWebsiteUrl: string;
    contact: ContactData;
    education: Array<EducationData>;
    work: Array<WorkData>;
    skills: Array<string>;
}