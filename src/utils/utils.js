export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}