const host = 'https://jsonplaceholder.typicode.com';

const Get = async (path) => {
    const promise = await new Promise (resolve => {
        fetch(`${host}/${path}`)
            .then(response => response.json())
            .then(result => resolve(result))
    });

    return promise;
}

export default Get;