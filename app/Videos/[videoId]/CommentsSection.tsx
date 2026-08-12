


export default function CommentList({ comments }: any) {
    return (comments.map((comment: any, index: any) => {
        return <>
            <CommentSection comment={comment} index={index}></CommentSection>
            <div className="pl-6">
                {comment.replies && comment.replies.length > 0 &&
                    <CommentList comments={comment.replies}></CommentList>}
            </div>
        </>
    }))
}



function CommentSection({ comment }: any) {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-gray-200">
            <div>
                <img src="https://yt3.ggpht.com/yti/ANjgQV9jxvdwyeKTogLZwtc1rKNwUzth0dl7S837oIkrl55bIgf4=s88-c-k-c0x00ffffff-no-rj" alt="Logo" className="w-8 h-8 rounded-full" />
            </div>
            <div>
                <div className="font-bold text-[0.9rem]">{comment.name}</div>
                <div className="text-[0.8rem]">{comment.text}</div>
            </div>
        </div>
    )

}