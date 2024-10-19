"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let company = ['admin', 'user', 'boss', 'user1', 'user2', 'user3'];
company.forEach(company => { if (company === 'admin') {
    console.log('hello admin, you may login');
}
else {
    console.log(`hello ${company}, 'only admin can login.`);
} });
let aircrafts = ['B777', 'A300', 'DC10', 'B737', 'A310'];
aircrafts.forEach(aircrafts => {
    if (aircrafts === 'B777') {
        console.log('only eligoble aircraft for ETOPS', `${aircrafts}`);
    }
    else {
        console.log(`${aircrafts}, not eligible for etops`);
    }
});
aircrafts.forEach(aircrafts => {
    if (aircrafts === 'B777') {
        console.log('only eligoble aircraft for ETOPS', `${aircrafts}`);
    }
    else {
        console.log(`${aircrafts}, not eligible for etops`);
    }
});
