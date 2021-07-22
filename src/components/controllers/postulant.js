export class Postulant {
    add = async (obj) => {
        const response = await fetch('http://18.229.26.163/landing/postulant/add', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;charset=UTF-8',
                'Connection': 'keep-alive'             
            },
            body: JSON.stringify({
                NAME: obj.name,
                EMAIL: obj.email,
                DNI: obj.dni,
                POSITION: obj.position,                
                PHONE: obj.phone,
                CV: obj.cv,
                CVNAME: obj.cvname
            })
        });
        let json = await response.json()
        return json
    }
}