export class Contact {
    add = async (obj) => {
        const response = await fetch('http://18.229.26.163/landing/contact/add', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;charset=UTF-8',
                'Connection': 'keep-alive'             
            },
            body: JSON.stringify({
                NAME: obj.name,
                EMAIL: obj.email,
                COMPANY: obj.company,
                RUC: obj.ruc,
                MESSAGE: obj.message,
                PHONE: obj.phone
            })
        });
        let json = await response.json()
        return json
    }
}