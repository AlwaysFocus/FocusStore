export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_47BD24D2538892A0'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IIN3OGyJo8SOM9g2bPvsDzwNYqKfKrySuq2oFcDVDgVrGRmlbyQrSmLadH9mOeuICUuIC7lDauju5CQOk7AWwPe000gOuuZHn'

/**
 * Given an image, returns a URL
 * Works for local and deployed instances of Strapi.js
 * @param {any} image 
 */

export const fromImageToUrl = (image) => {
    if(!image){
        return '/vercel.svg';
    }

    if(image.url.indexOf('/') === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}