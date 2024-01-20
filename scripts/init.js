const contentful = require("contentful-management");
require("dotenv").config({
    path: `.env.local`,
});
const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

//Check if space exists

async function createSpace() {
    try {
        let spaceCreated = await client.createSpace({
            name: "next portfolio",
            defaultLocale: "en-US",
        });
        console.log("Space created succesfully with ID: ", spaceCreated.sys.id);
        return spaceCreated.sys.id;
    } catch (err) {
        console.error("Space creation failed with error: ", err);
    }
}
async function findEnvironment(spaceID) {
    try {
        let space = await client.getSpace(spaceID);
        let envID = await space.getEnvironment("master");
        return envID.sys.id;
    } catch (err) {
        return false;
    }
}
async function createContentTypes(envID, spaceID) {
    let space = await client.getSpace(spaceID);
    let env = await space.getEnvironment(envID);
    const urlValidation = [
        {
            regexp: {
                pattern:
                    "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
                flags: null,
            },
        },
    ];
    let profile_info = await env.createContentTypeWithId("portfolioInfo", {
        name: "portfolio Info",
        displayField: "name",
        fields: [
            {
                id: "name",
                name: "name",
                type: "Symbol",
                required: true,
            },
            {
                id: "location",
                name: "location",
                type: "Symbol",
                required: true,
            },
            {
                id: "about",
                name: "about",
                type: "Symbol",
                required: true,
            },
            {
                id: "email",
                name: "email",
                required: true,
                type: "Symbol",
                validations: [
                    {
                        regexp: {
                            pattern: "^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$",
                            flags: null,
                        },
                    },
                ],
            },
            {
                id: "github",

                name: "github",
                type: "Symbol",
                validations: urlValidation,
                required: true,
            },
            {
                id: "linkedin",

                name: "linkedin",
                type: "Symbol",
                validations: urlValidation,
            },
        ],
    });
    let technologies = await env.createContentTypeWithId("technologies", {
        name: "technologies",
        displayField: "name",
        fields: [
            {
                id: "name",
                name: "name",
                type: "Symbol",
                required: true,
            },
            {
                id: "color",
                name: "color",
                type: "Symbol",
            },
        ],
    });
    let projects = await env.createContentTypeWithId("project", {
        name: "project",
        displayField: "title",
        fields: [
            {
                id: "title",
                name: "title",
                type: "Symbol",
                required: true,
            },
            {
                id: "description",
                name: "description",
                type: "Symbol",
                required: true,
            },
            {
                id: "image",
                name: "image",
                type: "Link",
                linkType: "Asset",
                required: true,
            },
            {
                id: "github",
                name: "github",
                type: "Symbol",
                validations: urlValidation,
            },
            {
                id: "liveUrl",
                name: "liveUrl",
                type: "Symbol",
                validations: urlValidation,
            },
            {
                id: "technologies",
                name: "technologies",
                type: "Array",
                items: {
                    type: "Link",
                    linkType: "Entry",
                    validations: [
                        {
                            linkContentType: ["technologies"],
                        },
                    ],
                },
                required: true,
            },
        ],
    });
    await profile_info.publish();
    await technologies.publish();
    await projects.publish();
}

async function createOrFindEnvironment(spaceID) {
    let envID = await findEnvironment(spaceID);
    if (envID) {
        console.log("Environment exists with ID: ", envID);
        return envID;
    } else {
        console.log("Environment does not exist, creating new environment...");
        try {
            let space = await client.getSpace(spaceID);
            let envID = await space.createEnvironmentWithId("master", {
                name: "master",
            });
            console.log("Environment created succesfully with ID: ", envID.sys.id);
            return envID.sys.id;
        } catch (err) {
            console.error("Environment creation failed with error: ", err);
        }
    }
}
async function main() {
    client.getSpaces().then(async (spaces) => {
        let space = spaces.items.find((space) => space.name === "next portfolio");

        if (space) {
            console.log("Space exists, creating new environment...");
            space = space.sys.id;
        } else {
            console.log("Space does not exist, Creating new space...");
            space = await createSpace();
        }
        let envID = await createOrFindEnvironment(space);
        console.log("Creating content types ...");
        await createContentTypes(envID, space);
        console.log("Done, add this environment variable:");
        console.log("CONTENTFUL_SPACE_ID ='", space, "'");
    });
}
main();
//Check if environment exists
