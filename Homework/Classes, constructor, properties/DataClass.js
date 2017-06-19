class Request {
    constructor(method, uri, version, message, response, fulfilled=false) {
        [this.method, this.uri, this.version, this.message, this.response, this.fulfilled] = [method, uri, version, message, response, fulfilled]
    }
    toString() {
        return `${this.method}, ${this.uri}, ${this.version}, ${this.message}, ${this.response}, ${this.fulfilled}`
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);