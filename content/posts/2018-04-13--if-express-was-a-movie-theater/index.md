---
title: If Express was a Movie Theater
subTitle: Explaining a Express.js webserver
cover: photo-1465070845512-2b2dbdc6df66-cover.jpg
---
![unsplash.com](./photo-1465070845512-2b2dbdc6df66.jpg)

# Understanding an Express app is as easy as a trip to the cinema

The internet is overflowing with really good introduction tutorials for how to use express.js. The [official docs][express.js documentation] tell you everything you need to know in order to start configuring it. And that's great if you already know the sort of thing that you'll be learning. But what if you want to understand what it is, and what it does? What if you don't know your middleware from your router from your server?

Looking at the Hello World example in the official [express.js][express.js hello-world] docs - "essentially the simplest Express app you can create" - we're already presented with terminology that assumes a degree of familiarity:

```javascript {.line-numbers}
const express = require('express' 4.16.3);
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

It's much easier to understand those concepts if you can find a real-world equivalent to base it upon. And it's much _much_ easier to remember that way.

We're going to work through the above example and identify the key components (and expand upon them), with the help of your local multiplex.

## Your app is a movie theater

You're the proud owner of a movie theater and you're anticipating a lot of customers. You want your customers to be able to see the film of their choice. You want them to have a good experience so they come back again!

But it's no good just opening the doors to the movie theatre and hoping that people wander in and find their way around! You need a team to help customers from the street to their seat.

## Express is the manager

The first thing we need is a manager. Enter Express. Express is ultimately responsible for customers getting to see the film of their choice. It does this by setting up the necessary processes to keep the cinema running smoothly and efficiently.

```javascript {.line-numbers}
const express = require('express' 4.16.3);
const app = express();
```

These two lines at the top of our app.js file bring in our manager. And our manager's name is `app`. Which is an unusual name, but it's easier to say than calling `"'express' 4.16.3"` every time refer to them.

## Middleware ensures customers abide by the rules

We want our cinema to be a fun place that people keep coming back to, but there are also a few rules that customers need to abide by.

1. Customers need a ticket to see a movie
2. Customers need to be the appropriate age for their film of choice. No kids in R-rated movies!

In the same way, your website might have areas that are only accessible if your customer has registered, and is logged in with the correct username and password.

Middleware is a term for a functions that are carried out between the client request and the server answer. A customer asks to see a film, we check their ticket and their age before showing them to their seat. A visitor to our website wants to access their profile, we check their username and password to make sure they are who they say they are before loading up their account.

```javascript {.line-numbers}
app.use(function(req, res, next) {
  const ticket = req.customer.ticket;
  const age = req.customer.age;
  const rating = req.film.rating;

  if (req.customer.ticket && (req.customer.age >= req.film.rating)) {
    next();
  }
});
```

So what's going on in the code above?  Let's break it down a bit:
We start off by calling `app.use()` which is an Express middleware function (as opposed to Express HTTP functions, such as `app.get()` or `app.post()`). In other words, if HTTP functions are like directions, middleware functions are our instructions.

So we pass an anonymous function to our middleware, which takes three parameters: a request, a response, and a next step.

In lines 2 - 4 we inspect the request, and in lines 6 - 8 we make sure that the customer has a ticket, and that the customer is old enough, before proceeding.

Great, now we can be sure that we're carrying out the appropriate checks. But this code will run on every request - even when the customer orders popcorn or asks for directions to the restrooms. Not so great.

To deal with this, we pass our middleware function an additional parameter: a route on which to run these checks. Maybe we only want to run these checks when a customer wants to go to into a film:

```javascript {.line-numbers}
app.use('/movie', function(req, res, next) {
  const ticket = req.customer.ticket;
  const age = req.customer.age;
  const rating = req.film.rating;

  if (req.customer.ticket && (req.customer.age >= req.film.rating)) {
    next();
  }
});
```

## The Ushers are the routers

1. Customers wanting to buy food should be directed to the concessions stand
2. Customers should be directed to the screen that is showing their chosen film

```javascript {.line-numbers}
app.get('/movie/star-wars', function (req, res) {
  res.send('screen one');
});

app.get('/movie/jaws', function (req, res) {
  res.send('screen two');
});

app.get('/movie/back-to-the-future', function (req, res) {
  res.send('screen three');
});
```

The Ushers direct customers to the right screen for their movie, or to the concessions stand if they want food. Or to the emergency exits, if something goes wrong.

Here's the scenario: when customers arrive at the cinema, we need someone to check whether or not they have a ticket (authentication). If not, we're going to send them to the ticket desk, we check their age (validation), take payment, and hand them over to the ushers.

The usher then checks their ticket, determines their film choice, establishes whether they need popcorn and drinks from the concessions stand, informs the customer of which screen will be showing their film, and sending them in the right direction.

***

### require statements - the cinema manager

### middleware

### routing

### App.listen

***


<!-- ```javascript
const express = require('express' 4.16.3);
const app = express();

app.use((req, res, next) => {
  console.log('Request: ', req);
  console.log('Response: ', res);
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
``` -->


<!-- Links -->
[express.js documentation]: http://expressjs.com/en/guide/routing.html
[express.js hello-world]: http://expressjs.com/en/starter/hello-world.html