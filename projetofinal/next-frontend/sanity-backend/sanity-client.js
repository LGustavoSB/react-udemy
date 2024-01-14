import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'qc1q8477',
    dataset: 'production',
    apiVersion: "2024-01-18",
    useCdn: false
})


export default client
