/*
    bwH5LS.js by Bill Weinman 
    <http://bw.org/contact/>
    created 2011-04-16

    Copyright (c) 2011 The BearHeart Group, LLC
    This file may be used for personal educational purposes as needed. 
    Use for other purposes is granted provided that this notice is
    retained and any changes made are clearly indicated as such. 
*/

var _bwH5LS_version = "1.0.2";

// useful for finding elements
var element = function(id) { return document.getElementById(id); }
var errorMessage = undefined;

function getOpenDatabase() {
    try {
        if( !! window.openDatabase ) return window.openDatabase;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}

function getLocalStorage() {
    try {
        if( !! window.localStorage ) return window.localStorage;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}

function getSessionStorage() {
    try {
        if( !! window.sessionStorage ) return window.sessionStorage;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}

function bwTable( wrap ) {
    this.wrap = ( wrap == undefined ) ? true : wrap;    // default to true
    this.rows = new Array();
    this.header = [];

    this.setHeader = function( row ) {
        this.header = row;
    }

    this.addRow = function( row ) {
        this.rows.push(row);
    }

    this.getRow = function ( index ) {
        return this.rows[index];
    }

    this.countRows = function () {
        return this.rows.length;
    }

    this.getTableHTML = function () {
        var a = '';
        if(this.wrap) a += '<table class="bwTable">\n';
        a += this.getHeaderHTML();
        for(var row in this.rows) {
            a += this.getRowHTML(this.rows[row]);
        }
        if(this.wrap) a += '</table>\n';
        return a;
    }

    this.getHeaderHTML = function () {
        if( this.header.length == 0 ) return '';
        var a = '<tr>';
        for( var cell in this.header ) {
            a += '<th>' + this.header[cell] + '</th>';
        }
        a += '</tr>\n';
        return a;
    }

    this.getRowHTML = function (row ) {
        var a = '<tr>';
        for( var cell in row ) {
            var v= row[cell];
            if(v == null) v = '<span class="red">NULL</span>';
            a += '<td>' + v + '</td>';
        }
        a += '</tr>\n';
        return a;
    }

    this.writeTable = function () {
        document.write(this.getTableHTML());
    }

}

