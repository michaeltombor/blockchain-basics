pragma solidity ^ 0.4.17; //specifies version of solidity

contract Inbox { //defines a new class (contract) that will have
                 //some number of methods and variables
    string public message; //Declares all of the instance (storage) variables
    
    //Functions defined below that will be members of this contract. 
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}