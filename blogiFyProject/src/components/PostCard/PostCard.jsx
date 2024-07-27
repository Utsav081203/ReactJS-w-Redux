import React from "react";
import appwriteService from '../../appwrite/config';
// we can fetch post from state too if we would have updated it
// but we haven't so we directly fetch through requests
import {Link} from 'react-router-dom';

function PostCard({
    $id,
    title, 
    featuredImage
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {/* we insert image preview (url)*/}
                    {/* image url */}
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
                </div>
                <h2
                className="text-xl font-bold"
                >{title}</h2>
            </div>
        </Link>
        // wherever we exist in web, and we mean to use Link tag
        // just insert url that is further ahead
    )
}

export default PostCard;