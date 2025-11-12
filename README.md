# iter-lingua

## Description

## Setup
Download [python](https://www.python.org/downloads/)

Download [node](https://nodejs.org/en/download)

Install the concurrently package:
```
npm install -g concurrently
```

In `iter-app`:
```
npm install
```

In `iter-app/api`:
```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Usage

In `iter-app`:
```
npm run start
```
Go to the [homepage](http://localhost:5173/)


## Updating requirements

In `iter-app/api`:
```
pip freeze > requirements.txt
```
