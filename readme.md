# Warbler Solution

## Getting started

1.  In the `warbler-server` folder

    * `npm install`
    * `nodemon` (if installed) or `node index.js`

2.  In the `warbler-client` folder

    * `npm install`
    * `npm start`

# set up git for this repo, warbler4

# install httpie 

with npm install

see errors and fix

httpie

``` http POST localhost:8081/api/auth/signin password=secret email=elie@elie.com```

## see all my messages

5aacetc is the id 

``` http GET localhost:8081/api/users/5aac9etc/messages```

not found

# POST not a GET

inside our router we don't have a GET we only have a POST

``` http POST localhost:8081/api/users/5aac9etc/messages text="WE DID IT!"```

we don't want just anyone to POST to someone else's messages 

we need to start using the Token that we saw when we logged in successfully

