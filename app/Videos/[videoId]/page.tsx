export default function VideoPage({ params }: { params: { videoId: string } }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Video {params.videoId}</h1>
            <p className="mt-2 text-gray-600">This is the video detail page for the selected video.</p>
        </div>
    );
}
