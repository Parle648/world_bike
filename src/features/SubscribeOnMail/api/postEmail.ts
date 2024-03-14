export default function postEmail(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(data)
            }))
        } catch (err) {
            reject(err)
        }
    })
    .then((response: any) => response.json())
}