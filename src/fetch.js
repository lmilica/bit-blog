export const fetchPosts = (url) => {
    return fetch(url)
    .then(resolve => resolve.json())
}

export const fetchSinglePost = (url) => {
    return fetch(url)
    .then(resolve => resolve.json())
}

export const fetchAuthors = (url) => {
    return fetch(url)
    .then(resolve => resolve.json())
}

export const fetchSingleAuthor = (url) => {
    return fetch(url)
    .then(resolve => resolve.json())
}

export const fetchAuthorComments = (url) => {
    return fetch(url)
    .then(resolve => resolve.json())
}