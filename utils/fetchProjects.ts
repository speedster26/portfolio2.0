import { Project } from "typing";

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.json();
    return data.project as Project[];
};
