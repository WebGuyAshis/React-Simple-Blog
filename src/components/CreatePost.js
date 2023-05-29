import './css/createPost.css';

import {db} from '../firebase'

import { useFormInput } from './hooks';

function CreatePost(){

    const title = useFormInput('');
    const subTitle= useFormInput('');
    const content = useFormInput('');
    const url = useFormInput('');

    function handleSubmit(e){
        e.preventDefault();
        console.log("Title:", title);
        console.log("Subtitle:", subTitle);
        console.log("Content:", content);
        db.collection('posts')
            .add({
                title: title.value,
                subTitle: subTitle.value,
                content: content.value,
                url: url.value,
                createdAt : new Date()
            });
    }

    return (
        <div className="create-post">
            <h1 className='post-heading'>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="">Title:</label>
                    <input placeholder='Add Title' className='form-input' type="text" {...title} required/>
                </div>

                <div className="form-field">
                    <label htmlFor="">Sub-Title:</label>
                    <input placeholder='Add Sub-Title'className='form-input' type="text" {...subTitle} required />
                </div>
                <div className="form-field">
                    <label htmlFor="">Image URL:</label>
                    <input placeholder='Add Sub-Title'className='form-input' type="url" {...url} required />
                </div>

                <div className="form-field">
                    <label htmlFor="">Content:</label>
                    <textarea placeholder='Add Content' className='form-input' name="" id="" cols="30" rows="10" {...content} required></textarea>
                </div>

                <button className='create-post-btn'>Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;