import s from './Post.module.css';


function Post() {
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                Post 1
                <div><span>Like</span></div>
            </div>
        </div>
    )
}

export default Post;