const xhr = new XMLHttpRequest()
console.log(`Ready State - ${xhr.readyState}`)

const url = `https://jsonplaceholder.typicode.com/users`

xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)

console.log(c)
xhr.onreadystatechange  = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = ''
        for(let i=0; i < objectResponse.length; i++) {
                output += `
                <img src=${objectResponse[i].id} />
            `
        }
        console.log(output)
        document.querySelector('#my-container').innerHTML = output
    }
}
xhr.send()