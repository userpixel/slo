const commonTags = [ 'genai' ]

export default [
    {
        title: 'Success: Prompt Processing Error (server)',
        description: '',
        unit: 'prompts',
        good: 'no errors',
        valid: 'server',
        tags: [ ...commonTags, 'server' ],
    },
    {
        title: 'Success: Quality of output (genai)',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'Success: Response usefulness',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },  
    {
        title: 'Success: Response report',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },  
    {
        title: 'Success: Response retries',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'Success: Number of active users (sounds like a product metric? Maybe we are after hardware utilization As in number of users served per machine or GPU core?)',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Text:',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Text: Time to First Token',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Text: Time to generate response',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Text: Response token length',
        description: 'Ensure that the response is long enough (to be useful) but not too long (due to cost)',
        unit: 'tokens',
        good: '50 <= response tokens <= 1000',
        valid: 'response to all prompts which explicitly did not ask for a token limit',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Text: Chat length (can either show engagement or struggle to get a desired answer)',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
    {
        title: 'GenAI Image: Time to respond an image request',
        description: '',
        unit: '',
        good: '',
        valid: 'all',
        tags: [ ...commonTags, 'quality' ],
    },
]