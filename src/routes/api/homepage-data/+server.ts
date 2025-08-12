import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import homepageData from '$lib/server/data/homepage.json';

export const GET: RequestHandler = async () => {
	return json(homepageData);
};
