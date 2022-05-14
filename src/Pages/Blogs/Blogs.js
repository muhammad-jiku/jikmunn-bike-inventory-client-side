import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <div className="blogsImage"></div>
      <h2 className="blogsHeading">
        Welcome to the <span className="blogsSpan">blogs</span>
      </h2>
      <Container>
        <div className="blogsQuestion">
          <h4> Difference between javascript and nodejs?</h4>
          <p>
            <strong>Javascript</strong> is a programming language that is used
            for writing scripts on the website. It is basically used on the
            client-side. It can added with HTML and play with the DOM.{' '}
            <strong>Javascript</strong> can run in any browser engine. It is the
            upgraded version of ECMA script that uses Chrome's V8 engine written
            in C++.
            <strong>
              On the other hand, NodeJS is a Javascript runtime environment.
            </strong>{' '}
            Javascript can be run outside of the browser with the help from{' '}
            <strong>NodeJS</strong>. It is used for backend. It does not have
            capability to add HTML tags. V8 is the Javascript engine inside of
            <strong> node.js</strong> that parses and runs Javascript. It is
            written in C, C++ and Javascript.
          </p>
        </div>
        <div className="blogsQuestion">
          <h4>Differences between sql and nosql databases?</h4>
          <p>
            <strong>SQL databases are relational</strong>. These databases use
            structured query language and have a predefined schema. databases
            are vertically scalable, table-based. These databases are not suited
            for hierarchical data storage and are best suited for complex
            queries. <strong>SQL databases</strong> are better for multi-row
            transactions and follows ACID property.{' '}
            <strong>And NoSQL databases are non-relational.</strong> These
            databases have dynamic schemas for unstructured data. These
            databases are horizontally scalable, document, key-value, graph, or
            wide-column stores.
            <strong>
              {' '}
              NoSQL is better for unstructured data like documents or JSON.
            </strong>{' '}
            These databases are best suited for hierarchical data storage and
            are not so good for complex queries.{' '}
            <strong>
              NoSQL follows consistency, availability, partition tolerance.
            </strong>
          </p>
        </div>
        <div className="blogsQuestion">
          <h4>What is the purpose of jwt? and how does it work?</h4>
          <p>
            <strong>
              {' '}
              JWT authentication is a token-based stateless authentication
              mechanism.
            </strong>
            It is used as a client-side-based stateless session, this means the
            server doesn't have to completely rely on a data store or database
            to save session information. JWTs can be sometimes encrypted, but
            typically encoded & signed. Purpose of Signed JWT is not to hide the
            data but to ensure the authenticity of the data. And that is why it
            use with HTTPS with Signed JWTs.{' '}
            <strong>
              {' '}
              JWT structure is divided into three parts: header, payload,
              signature
            </strong>{' '}
            & is separated from each other by dot.
            <strong>The way of JWTs work are secure.</strong> When User sign-in
            using username and password. The authentication server verifies the
            credentials and issues a JWT signed using a private key. And then,
            the client will use the JWT to access protected resources by passing
            the JWT in the HTTP Authorization header. The resource server then
            verifies the authenticity of the token using the public key. The
            Identity Provider generates a JWT certifying user identity, and the
            resource server decodes and verifies the authenticity of the token
            using the public key. Since the tokens are used for authorization
            and authentication in future requests and API calls great care must
            be taken to prevent security issues. These tokens shouldn't be
            stored in publicly accessible areas like the browser's local storage
            or cookies. In case there are no other choices, then the payload
            should be encrypted.
          </p>
        </div>
        <div className="blogsQuestion">
          <h4>When should you use node js and when should you use mongodb?</h4>{' '}
          <p>
            MongoDB and NodeJS are two different technologies.
            <strong>
              NodeJS's responsibilty is especially to execute web application.
            </strong>{' '}
            It is a Javascript engine that can be written any application. It
            runs the Javascript code. And, it is used to build servers that can
            respond to web requests. When a web project needs a programming
            environment and a runtime library that offers basic programming
            tools/support and can compile and/or interpret the code. Nodejs is
            such as tool for the Javascript programming language. To write some
            kind of stand-alone program or server in Javascript, then nodejs wil
            be priority for it.
            <strong>
              {' '}
              On the contray, MonogDB is a database system which efficiently
              stores documents in a database and to perform operations like data
              updates, or to search documents by some criterias{' '}
            </strong>
            . When web application needs the ability to persistently stores data
            which can be efficiently query or update it later, then data could
            be use some form of database. MongoDB is a database engine. Code
            within some application or server uses MongoDB to save, query or
            update data in a database. There are many web servers built with
            nodejs that will then use MongoDB for storing data. MongoDB offers
            an API library that runs within a Nodejs application to give
            programmatic access to MongoDB so that Nodejs is a Javascript engine
            that you can write any application you want with (by programming in
            the Javascript language). It runs your Javascript code. Most
            commonly, it is used to build servers that can respond to web
            requests, though it can be used for lots of other types of code too.
            MongoDB is a database engine. Code within some application or server
            uses MongoDB to save, query or update data in a database. There are
            many web servers built with nodejs that will then use MongoDB for
            storing data.{' '}
            <strong>
              {' '}
              MongoDB offers an API library that runs within a Nodejs
              application
            </strong>{' '}
            to give you programmatic access to MongoDB so you can create
            databases and then add, query, update or delete data from the
            MongoDB database. MongoDB also has API libraries for other
            programming environments can be created and then add, query, update
            or delete data from the MongoDB database.
          </p>
        </div>

        <br />
      </Container>
    </div>
  );
};

export default Blogs;
