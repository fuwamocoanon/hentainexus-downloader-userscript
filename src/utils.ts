import type { Image } from './download';
import { getImageFormat } from './settings';

export const sleep = (time: number) => new Promise((r) => setTimeout(r, time));

export const getImageUrl = (image: Image) => {
	switch (getImageFormat()) {
		case 'avif':
			return image.image_avif;
		case 'fallback':
			return image.image_fallback;
		case 'source':
			return image.image_source ?? image.image_fallback;
	}
};
