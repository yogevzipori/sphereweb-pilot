import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";


export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "zvr2an3u",
    dataset: "production",
    apiVersion: "2023-06-15",
  });

return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": projectImage.asset->url,
        url,
        projectDescription
        
    }`
        )
}