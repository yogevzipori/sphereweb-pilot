

const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'projectLocation',
      title: 'Project Location',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: "Picture's Description",
          type: 'string',
        }
      ]
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
   
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ]
};

export default project;
