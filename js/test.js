function resolveData(data) {
    let row = []
    for (const k in data) {
        str = k + '=' + data[k]
        row.push(str)
    }
    return row.join('&')
}

function ajax(obj) {
    let xhr = new XMLHttpRequest();
    resolveData(obj.data)
    if (obj.method.toUpperCase() === 'GET') {
        xhr.open(obj.method, obj.url + '?' + str)
        xhr.send()
    } else if (obj.method.toUpperCase() === 'POST') {
        xhr.open(obj.method, obj.url)

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(str)
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (JSON.parse(xhr.responseText).status === 200) {
                obj.success(JSON.parse(xhr.responseText))
            }

        }
    }
}