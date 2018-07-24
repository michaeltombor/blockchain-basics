const assert = require('assert');
const ganache = require('ganache-cli');
//Constructor Web3
const Web3 = require('web3');
//instance web3
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    //Get a list of all accounts
    web3.eth.getAccounts()
    .then(fetchedAccounts => {
        console.log(fetchedAccounts);
    });
    //Use one of those accounts to deploy the contract
    
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        
    });
});
//***************************************************************//
//*********************This is a sample test*********************// 
//***************************************************************//

/*class Car {
    park() {
        return 'stopped';
    }
    
    drive() {
        return 'vroom';
    }
}*/

//beforeEach is fun before each it statement
/*let car;

beforeEach(() => {
     car = new Car();
    
});

describe('Car', () => {
    it('can park', () => {
       assert.equal(car.park(), 'stopped');
    });
    
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
})*/