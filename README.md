# DataSearch.js
Blazing fast full text search in Javascript

[![Build Status](https://travis-ci.org/llh1/DataSearch.svg?branch=master)](https://travis-ci.org/llh1/DataSearch)

DataSearch.js is an attempt to use the power of regular expression to search across the keys of a Javascript hash.

## Quick Start

```javascript
var DataSearch = require('datasearch');

var data = [
{name: {firstName: "Iron", lastName: "Man"}, country: "United States"},
{name: {firstName: "Sherlock", lastName: "Holmes"}, country: "United Kingdom"},
{name: {firstName: "Bruce", lastName: "Lee"}, country: "China"}
];

var dataSearch = new DataSearch(data);
dataSearch.search("iron states"); // => {name: {firstName: "Iron", lastName: "Man"}, country: "United States"}
```
