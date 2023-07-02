import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schema';

const config = defineConfig({
  projectId: "zvr2an3u",
  dataset: "production",
  title: "Sphere Remodeling",
  apiVersion: "2023-06-15",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas},
});

export default config;
