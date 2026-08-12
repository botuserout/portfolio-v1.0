import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rakeshjena.dev";

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/photography`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectRoutes,
  ];
}
