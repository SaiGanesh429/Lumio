

export default function VideoPlayer() {
return (
    <div className="flex justify-center items-center h-screen">
        <video controls className="w-full max-w-4xl">
            <source src="/path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);
}