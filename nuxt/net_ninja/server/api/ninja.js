export default defineEventHandler(async (event) => {

    const { name } = getQuery(event);
    const { age } = await readBody(event);
    return {
    message:  `Hello, ${name || 'Ninja'}! You are ${age} old. Welcome to our API.`,
    }
});