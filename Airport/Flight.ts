export class Flight {
    private flightNumber: string;
    private date: Date;
    private departureTime: Date;
    private arrivalTime: Date;
    private status: FlightStatus;
    private crew: Crew[];
    private aircraft?: Aircraft;
    private airline?: Airline;
    private tickets: Ticket[];
    private gateNumber: number;

    constructor(
        flightNumber: string,
        date: Date,
        departureTime: Date,
        arrivalTime: Date,
        status: FlightStatus,
        crew: Crew[],
        tickets: Ticket[],
        gateNumber: number,
        aircraft?: Aircraft,
        airline?: Airline
    ) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.status = status;
        this.crew = crew;
        this.aircraft = aircraft;
        this.airline = airline;
        this.tickets = tickets;
        this.gateNumber = gateNumber;
    }

    getFlightNumber(): string {
        return this.flightNumber;
    }

    getDate(): Date {
        return this.date;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    getStatus(): FlightStatus {
        return this.status;
    }

    getCrew(): Crew[] {
        return this.crew;
    }

    getAircraft(): Aircraft | undefined {
        return this.aircraft;
    }

    getAirline(): Airline | undefined {
        return this.airline;
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }

    getGateNumber(): number {
        return this.gateNumber;
    }

    addPassenger(passenger: Passenger): void {
        // Add logic here to add passenger to the flight
        this.tickets.push(new Ticket("FareBasis", ClassType.Economy, "SeatNumber", MealType.Standard, passenger, this, new TicketClass("ID", "Name")));
    }

    toString(): string {
        const crewNames = this.crew.map(crew => crew.getName()).join(', ');
        const aircraftInfo = this.aircraft ? this.aircraft.getRegistrationNumber() : 'Not assigned';
        const airlineInfo = this.airline ? this.airline.getName() : 'Not assigned';
        return `
        Flight Number: ${this.flightNumber}, 
        Date: ${this.date.toISOString()}, 
        Departure Time: ${this.departureTime.toISOString()}, 
        Arrival Time: ${this.arrivalTime.toISOString()}, 
        Status: ${this.status}, Crew: [${crewNames}], 
        Aircraft: ${aircraftInfo}, 
        Airline: ${airlineInfo}, 
        Gate Number: ${this.gateNumber}
        `;
    }
}
