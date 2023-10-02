import { contentfulClient } from "../contentful";

export async function GET(request: Request) {
  let entries = await contentfulClient.getEntries({
    content_type: "project",
  });
  let formatted_result = entries.items.map((entry) => {
    return {
      id: entry.sys.id,
      title: entry.fields.title,
      description: entry.fields.description,
      imageURL: entry.fields.image.fields.file.url,
      liveURL: entry.fields.liveUrl ?? null,
      githubURL: entry.fields.github ?? null,
      technologies: entry.fields.technologies!.map((technology) => ({
        name: technology.fields.name,
        color: technology.fields.color,
      })),
    };
  });
  return Response.json(formatted_result);
}
