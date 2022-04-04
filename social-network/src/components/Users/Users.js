import React from "react";
import styles from './Users.module.css'
import * as axios from "axios";
import avatarImg from '../../assets/images/avatar.png'

class Users extends React.Component {

    follow = (userId) => {
        this.props.follow(userId);
    }

    unfollow = (userId) => {
        this.props.unfollow(userId);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => {
                        return (
                            <div key={user.id}>
                            <span>
                                <div>
                                    <img
                                        className={styles.userAvatar}
                                        src={user.photos.small
                                            ? user.photos.small
                                            : avatarImg}
                                        alt=""/>
                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button onClick={() => this.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => this.follow(user.id)}>Follow</button>
                                    }

                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status ? user.status : 'Not status'}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'user.location.country'}
                                    </div>
                                    <div>
                                        {'user.location.city'}
                                    </div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;