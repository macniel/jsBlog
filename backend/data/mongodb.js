const mongoose = require('mongoose')();

export class DataStorage {

    connection = null;

    constructor() {
        connection = mongoose.connect('mongodb://localhost/blog');
    }

    getBlog() {
        if ( connection ) {
        }
    }

}