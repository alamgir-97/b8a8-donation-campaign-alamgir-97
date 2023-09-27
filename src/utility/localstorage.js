const getStoredDonation = () => {
    const storedDonation =localStorage.getItem('donation');
    if(storedDonation){
    return JSON.parse(storedDonation)
    }
    return [];
}

const saveDonation = id =>{
    const storedDonations = getStoredDonation()
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.find(id);
        localStorage.setItem('donation', JSON.stringify('storedDonations'))
    }
}

export default {saveDonation}