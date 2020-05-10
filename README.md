# Weather App - Node.js

A simple application that shows the weather of a city on the console.

## Installation

### Prerequisites

* To run this project, you must have Node.js installed.
* You must have a [Rapid](https://rapidapi.com/dev132/api/city-geo-location-lookup) API KEY.
* You must have an [Open Weather](https://home.openweathermap.org/users/sign_up) API KEY. 

### Step 1

Begin by cloning this repository to your machine, and installing all NPM dependencies.

```bash
$ git clone https://github.com/RickyCruz/Weather-App-Node.git
$ cd Weather-App-Node && npm install
```
### Step 2
Add your API keys in .env file

```bash
$ cp .env.example .env
```
### Step 3
Now just write the name of the city you want to know the weather, remember to use double quotes if the city name consists of two or more words.

```bash
$ node app --location California
$ node app -l Miami
$ node app --location "San Francisco, California" 
$ node app -l "Miami, Florida" 
```