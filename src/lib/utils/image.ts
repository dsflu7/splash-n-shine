import { dev } from '$app/environment';

// Default qualities per format to balance size/clarity
const FORMAT_DEFAULT_QUALITY: Record<'avif' | 'webp' | 'jpeg', number> = {
	avif: 60,
	webp: 70,
	jpeg: 75
};

export type ImageFormat = 'avif' | 'webp' | 'jpeg';

/**
 * Build a Vercel Image Optimization URL
 */
function buildVercelUrl(src: string, width: number, quality: number, format?: ImageFormat) {
	const params = new URLSearchParams({ w: String(width), q: String(quality) });
	if (format) params.set('f', format);
	return `/_vercel/image?url=${encodeURIComponent(src)}&${params.toString()}`;
}

/**
 * Generate a srcset string for responsive images using Vercel Image Optimization.
 * Backwards compatible signature: optimize(src, widths, quality)
 * Now also supports a 4th "format" param to hint desired output format.
 */
export function optimize(
	src: string,
	widths: number[] = [640, 828, 1200],
	quality?: number,
	format?: ImageFormat
) {
	if (dev) return src;

	const q = quality ?? (format ? FORMAT_DEFAULT_QUALITY[format] : 75);

	return widths
		.slice()
		.sort((a, b) => a - b)
		.map((width, i) => {
			const url = buildVercelUrl(src, width, q, format);
			const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
			return url + descriptor;
		})
		.join(', ');
}