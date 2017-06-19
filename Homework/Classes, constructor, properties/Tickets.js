function result(description, criteria) {
    class Tickets {
        constructor(description, criteria) {
            [this.description, this.criteria] = [description, criteria];
            let arrTicket = [];
            for(let unit of description) {
                let ticketUnits = unit.split('|');
                let ticket = {
                    destination: ticketUnits[0],
                    price: Number(ticketUnits[1]),
                    status: ticketUnits[2]
                };
                arrTicket.push(ticket);
            }
            if (criteria == 'destination') {
                arrTicket.sort((a,b) => a.destination>b.destination);
            }
            else if (criteria == 'price') {
                arrTicket.sort((a,b) => a.price-b.price);
            }
            else if (criteria == 'status') {
                arrTicket.sort((a,b) => a.status>b.status);
            }
            return arrTicket;
        }
    }
    return new Tickets(description, criteria);
}
let t = new Tickets(
        ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'
);
console.log(t);