

const YOU_TUBE_API_KEY = "AIzaSyBdnrCqgUhnNOSHAdkLBp5h-NdntEguetc";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOU_TUBE_API_KEY}`;

export const YOUTUBE_COMMENTS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=30&myRating=like&regionCode=IN&key=${YOU_TUBE_API_KEY}`;
