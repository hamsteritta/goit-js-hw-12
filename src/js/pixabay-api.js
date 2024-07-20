import axios from 'axios';
const apiKey = '45022873-80f77178c96ea8fdbff7ba9f5';

export async function findImg(query, page = 1, perPage = 15, image_type = 'photo', orientation = 'horizontal', safesearch = true) {  
  try {   
     const result = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
        image_type: image_type,
        orientation: orientation,
        safesearch: safesearch,
        page: page,
        per_page: perPage,
      },
     });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
}