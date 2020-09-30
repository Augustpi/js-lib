
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
 * Create an article
 * @param  {Object} article The article data
 */
var createArticle = function (url, method, headers, article) {
    fetch(url, {
        method: method,
        body: JSON.stringify(article),
        headers: headers
    }).then(function (response) {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(response)
    }).then(function (data) {
        console.log(data)
    }).catch(function (error) {
        console.warn(error)
    })
}

var headers = { 'Content-type': 'application/json; charset=UTF-8' }


// Create article about Harry Potter
createArticle('https://jsonplaceholder.typicode.com/posts', 'POST', headers, {
    title: 'Harry Potter',
    body: 'Made bad decisions and got out of them through a combination of luck and good friends.',
    userId: 1
})
