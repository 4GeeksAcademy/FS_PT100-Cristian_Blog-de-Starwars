const ContactService = {}
//---------- Character ----------//
ContactService.getAll = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!resp.ok) throw new Error('Error feching data getAll')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

ContactService.getOne = async id => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
        if (!resp.ok) throw new Error('error fetching data getOne')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

//---------- Type ----------//
ContactService.getAllType = async () => {
    try {
        const resp = await fetch('"https://pokeapi.co/api/v2/type');
        if (!resp.ok) throw new Error('Error feching data getAllType')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

ContactService.getOneType = async id => {
    try {
        const resp = await fetch('"https://pokeapi.co/api/v2/type/'+id);
        if (!resp.ok) throw new Error('error fetching data getOneType')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

//---------- Location ----------//
ContactService.getAllLocation = async () => {
    try {
        const resp = await fetch(' https://pokeapi.co/api/v2/location');
        if (!resp.ok) throw new Error('Error feching data getAllLocation')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

ContactService.getOneLocation = async id => {
    try {
        const resp = await fetch(' https://pokeapi.co/api/v2/location/'+id);
        if (!resp.ok) throw new Error('error fetching data getOneLocation')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default ContactService