import Airtable from 'airtable'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = new Airtable.base(process.env.AIRTABLE_BASE_ID)

export default base
