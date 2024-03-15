export default function postContactUsForm (data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/api/contact-withus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}