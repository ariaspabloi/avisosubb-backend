const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    CreatePostInput: {
      type: 'object',
      properties: {
        content: { type: ['null', 'string'] },
        title: { type: 'string' },
        published: { type: 'boolean' },
        authorId: { type: 'number' }
      },
      required: ['authorId', 'content', 'published', 'title']
    }
  }
} as const
export default schema.definitions
