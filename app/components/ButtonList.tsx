
export default function ButtonList() {

    const list = ["All", "Game", "Music", "Movies", "Sports", "News", "Live", "Fashion & Beauty", "Learning", "Comedy"];

    return (list.length > 0 && (
        list.map((item, index) => (
            <button key={index} className="h-8  font-bold mr-2 bg-gray-200 text-black-800 px-4 rounded hover:bg-gray-400">
                {item}
            </button>
        ))
    ));
}