
import CommentList from "./CommentsSection";

function countComments(comments: any) {

    return comments.reduce((total: any, comment: any) => {
        const replyCount = comment.replies
            ? countComments(comment.replies)
            : 0;

        return total + 1 + replyCount;
    }, 0);
}



export default function CommentsContainer() {

    const comments =
        [
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
            },
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                replies:
                    [
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                            replies:
                                [
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                        replies:
                                            [
                                                {
                                                    name: "Sai Ganesh",
                                                    text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                                }
                                            ]






                                    }
                                ]
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        }
                    ]
            },
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
            },
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                replies:
                    [
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                            replies:
                                [
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                        replies:
                                            [
                                                {
                                                    name: "Sai Ganesh",
                                                    text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                                }
                                            ]

                                    }
                                ]
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        }
                    ]
            },
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                replies:
                    [
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                            replies:
                                [
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                        replies:
                                            [
                                                {
                                                    name: "Sai Ganesh",
                                                    text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                                }
                                            ]

                                    }
                                ]
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        }
                    ]
            },
            {
                name: "Sai Ganesh",
                text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                replies:
                    [
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                            replies:
                                [
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                                    },
                                    {
                                        name: "Sai Ganesh",
                                        text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                        replies:
                                            [
                                                {
                                                    name: "Sai Ganesh",
                                                    text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                                                }
                                            ]

                                    }
                                ]
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        },
                        {
                            name: "Sai Ganesh",
                            text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
                        }
                    ]
            },
        ];
    const total = countComments(comments);

    return (
        <div>
            <div className="font-bold p-2">{total} Comments:</div>
            <div>
                <div>
                    <CommentList comments={comments}></CommentList>
                </div>
            </div>
        </div >
    )
}