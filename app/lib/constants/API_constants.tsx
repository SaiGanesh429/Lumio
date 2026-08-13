
const searchQuery = "";
export const YOU_TUBE_API_KEY = "AIzaSyBdnrCqgUhnNOSHAdkLBp5h-NdntEguetc";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOU_TUBE_API_KEY}`;

export const YOUTUBE_COMMENTS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=30&myRating=like&regionCode=IN&key=${YOU_TUBE_API_KEY}`;


export const YOUTUBE_SEARCH_SUGGESTIONS_API_URL
    = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;


export const YOUTUBE_SEARCH_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;

export const YOUTUBE_LIVE_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=news&type=video&key=${YOU_TUBE_API_KEY}`;


export const YOUTUBE_VIDEO_BY_ID =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`