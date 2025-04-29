const ContactService = {}

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

ContactService.getOne = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error feching data getOne')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default ContactService