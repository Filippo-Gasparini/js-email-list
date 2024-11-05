console.log('API')


console.log(axios)


//axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//.then ((res) => {
// qui abbiamo la risposta del server
  //  console.log('Risposta confermata', res)
    //const mail = res.data.response
  //  console.log(mail)
    
//})

//.catch ((err) => {
  //  console.log('Risposta errata', err)
// quando esce questo avviso, vuol dire che qualcosa non va 
//})


async function getRandomEmails(n) {
    const url = "https://flynn.boolean.careers/exercises/api/random/mail";
    const emails = [];

    for (let i = 0; i < n; i++) {
    try {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    emails.push(data.response);
    } else {
    console.log(`Errore ${response.status}`);
            }
        } catch (error) {
            console.log(`Errore nella richiesta ${error}`);
        }
    }
    return emails;
}


// Genera 10 email casuali
getRandomEmails(10).then(emails => {
    emails.forEach(email => console.log(email));
});











