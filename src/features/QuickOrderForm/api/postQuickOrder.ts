export default function postQuickOrderRequest(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/api/quick-orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }))
        } catch (error) {
            reject(console.error(error))
        }
    })
    .then((response: any) => response.json())
    .then((respData: any) => console.log(respData))
}