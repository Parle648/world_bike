export default function postOrder(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }))
        } catch (err) {
            reject(err)
        }
    })
    .then((response: any) => response.json())
    // .then((data: any) => console.log(data))
}