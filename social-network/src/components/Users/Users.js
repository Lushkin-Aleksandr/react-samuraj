import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, setCurrentPage, totalUsersCount, pageSize, ...props}) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}/>
            {
                props.users.map(user => <User user={user}
                                              followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow}
                                              follow={props.follow}
                                              key={user.id}
                />)
            }
        </div>
    )
}


export default Users;


