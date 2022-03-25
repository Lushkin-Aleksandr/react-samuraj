import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                {props.message}
                <div><span>{props.likesCount} Likes</span></div>
            </div>
        </div>
    )
}

export default Post;