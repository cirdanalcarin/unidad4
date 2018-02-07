function BaseException() {
    BaseException.prototype = new Error();
    BaseException.prototype.constructor = BaseException;

    BaseException.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
}

function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

function isEmptyException(){
    this.name="isEmptyException";
    this.message="Error: the list is empty";
}
isEmptyException.prototype=new BaseException();
isEmptyException.prototype.constructor=isEmptyException;

function isFullException(){
    this.name="isFullException";
    this.message="Error: the list is full";
}
isFullException.prototype=new BaseException();
isFullException.prototype.constructor=isFullException;

function indexLimitException(){
    this.name="indexLimitException";
    this.message="Error: the index is outside the limits";
}
indexLimitException.prototype=new BaseException();
indexLimitException.prototype.constructor=indexLimitException;