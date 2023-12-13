fetch("https://party-wedding.glitch.me/v1/party")
.then(res => res.json())
.then(data => { data
    console.log(data)

    data.forEach(x => {
        console.log(x.name ,x.VIP)
    })

    // data.forEach(x => {
    //     console.log(x.VIP)
    // })
})
.catch(e => console.log(e.text))