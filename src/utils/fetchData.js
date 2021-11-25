import { Md5 } from 'ts-md5/dist/md5';

//data needed for hash
const url = 'https://gateway.marvel.com:443/v1/public';
const publicKey = 'YOUR_PUBLIC_KEY';
const privateKey = 'YOUR_PRIVATE_KEY';
const timeStamp = Date.now();

//hash creation
const hash = Md5.hashStr(timeStamp + privateKey + publicKey);

const fetchData = {
    //return response/error
    getApiData: async(pathParam) => {
        return fetch(`${url}/${pathParam}?offset=20&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => response.json())
            .catch(err => err);
    }
};

export default fetchData;