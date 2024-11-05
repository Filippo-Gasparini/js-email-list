console.log('API')


console.log(axios)


axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then ((res) => {
    console.log('Risposta confermata', res)
// qui abbiamo la risposta del server
})
.catch ((err) => {
    console.log('Risposta errata', err)
// quando esce questo avviso, vuol dire che qualcosa non va 
})