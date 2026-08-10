type VideoPageProps = {
    params: Promise<{ videoId: string }>;
};

export default async function VideoPage({ params }: VideoPageProps) {
    const { videoId } = await params;

    return (
        <div className="p-4">
            <div>
                <iframe width="760"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}?si=mQizzeLqhFeojYlm`}
                    title="YouTube video player"
                    frameBorder="0" allow="accelerometer;
                  autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>
            <p className="mt-2 text-gray-600">This is the video detail page for the selected video.</p>
        </div>
    );
}
