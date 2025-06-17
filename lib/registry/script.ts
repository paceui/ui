import * as fs from "node:fs/promises";
import path from "path";
import { RegistryItem } from "shadcn/registry";

import { blockRegistries } from "./blocks";
import { gsapComponentRegistries } from "./gsap-components";

// Registry paths
const REGISTRY_PATH = path.join(process.cwd(), "public/r/");
const GSAP_COMPONENT_REGISTRY_PATH = REGISTRY_PATH + "gsap/";
const BLOCKS_REGISTRY_PATH = REGISTRY_PATH + "blocks/";
const MCP_REGISTRY_PATH = REGISTRY_PATH + "/";

// Project source path
const SOURCE_PATH = path.join(process.cwd(), "/");

const buildMCP = async () => {
    const mcp = {
        $schema: "https://ui.shadcn.com/schema/registry.json",
        name: "PaceUI",
        homepage: "https://paceui.com",
        items: [
            {
                name: "index",
                type: "registry:style",
                dependencies: ["tw-animate-css", "class-variance-authority", "lucide-react"],
                registryDependencies: ["utils"],
                cssVars: {},
                files: [],
            },
            ...gsapComponentRegistries,
            ...blockRegistries,
        ],
    };
    await fs.writeFile(MCP_REGISTRY_PATH + "mcp.json", JSON.stringify(mcp), {
        encoding: "utf8",
    });
};

const buildRegistry = async (name: string, path: string, registries: RegistryItem[]) => {
    try {
        await fs.mkdir(path, { recursive: true });
    } catch (e) {
        console.info(e);
    }

    for (const item of registries) {
        const DEST = path + item.name + ".json";
        const newFiles = [];
        for (const file of item.files ?? []) {
            const content = await fs.readFile(SOURCE_PATH + `${name}/` + file.path, { encoding: "utf8" });
            newFiles.push({
                ...file,
                content,
            });
        }
        await fs.writeFile(DEST, JSON.stringify({ ...item, files: newFiles }), {
            encoding: "utf8",
        });
    }
};

const init = async () => {
    // registry:build - components/**
    await buildRegistry("components", GSAP_COMPONENT_REGISTRY_PATH, gsapComponentRegistries);
    await buildRegistry("demo/blocks", BLOCKS_REGISTRY_PATH, blockRegistries);
    await buildMCP();
};

init().then(() => {
    console.log("✅ Done!");
});
