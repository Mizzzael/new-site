export default {
    state: {
        _name: '',
        _email: '',
        _username: '',
        _following: 0,
        _followers: 0,
        _repos: 0,
        _blog: '',
    },
    mutations: {
        setName(state, name) {
            state._name = name
        },
        setEmail(state, email) {
            state._email = email
        },
        setUsername(state, username) {
            state._username = username
        },
        setFollowing(state, following) {
            state._following = following
        },
        setFollowers(state, followers) {
            state._followers = followers
        },
        setRepos(state, repos) {
            state._repos = repos
        },
        setBlog(state, blog) {
            state._blog = blog
        },
    },
    getters: {
        name(state) {
            return state._name
        },
        email(state) {
            return state._email
        },
        username(state) {
            return state._username
        },
        following(state) {
            return state._following
        },
        followers(state) {
            return state._followers
        },
        repos(state) {
            return state._repos
        },
        blog(state) {
            return state._blog
        },
    },
    actions: {},
}
