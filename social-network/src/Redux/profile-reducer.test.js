import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 10}
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kam.com')


    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kam.com')


    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData[2].message).toBe('it-kam.com');
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(1);
});

test('after deleting length of messages should not be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});


