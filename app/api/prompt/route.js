import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    // Connect to the database
    await connectToDB();

    // Fetch prompts from the database and populate the creator details
    const prompts = await Prompt.find({}).populate('creator');

    // Disable caching or set cache-control headers to prevent stale data
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    // Return the data
    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
