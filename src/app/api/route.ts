import { contentfulClient } from "./contentful";
export async function GET(request: Request) {
  let entry = (
    await contentfulClient.getEntries({
      content_type: "portfolioInfo",
    })
  ).items[0];

  return Response.json({
    name: (entry.fields.name! as string).split(" ").map(titleCase).join(" "),
    location: titleCase(entry.fields.location as string),
    about: entry.fields.about,
    email: entry.fields.email,
    github: entry.fields.github,
    linkedin: entry.fields.linkedin,
  });
}

function titleCase(string: string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
