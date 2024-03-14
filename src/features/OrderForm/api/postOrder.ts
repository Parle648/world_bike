export default function postOrder(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('https://wb-backend-a99n.onrender.com/api/order', {
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
}