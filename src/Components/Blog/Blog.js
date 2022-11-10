import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Difference between SQL and NoSQL?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  1. Language SQL has been around for over 40 years, so it is recognizable, documented, and widely-used.
                  Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user
                  to working within a predefined tabular schema, and more care must be taken to organize and understand
                  the data before it is used. The dynamic schemata of NoSQL databases allow representation of
                  alternative structures, often alongside each other, encouraging greater flexibility. There is less
                  emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of
                  varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which
                  SQL provides, so more complex queries can be difficult to execute. Though there are many dialects of
                  SQL, all share a common syntax and almost-identical grammar. When querying relational databases,
                  fluency in one language translates to proficiency in most others. On the other hand, there is very
                  little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies.
                  Many NoSQL databases have a unique data manipulation language constrained by particular structures and
                  capabilities. 2. Scalability Most SQL databases can be scaled vertically, by increasing the processing
                  power of existing hardware. NoSQL databases use a master-slave architecture which scales better
                  horizontally, with additional servers or nodes. These are useful generalizations, but it’s important
                  to note: SQL databases can be scaled horizontally as well, though sharding or partitioning logic is
                  often the user’s onus and not well supported. NoSQL technologies are diverse and while many rely on
                  the master-slave architecture, options for scaling vertically also exist. Savings made using more
                  efficient data structures can overwhelm differences in scalability; most important is to understand
                  the use case and plan accordingly. 3. Structure SQL database schemata always represent relational,
                  tabular data, with rules about consistency and integrity. They contain tables with columns
                  (attributes) and rows (records), and keys have constrained logical relationships. NoSQL databases need
                  not stick to this format, but generally fit into one of four broad categories: Column-oriented
                  databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and
                  individual records with varying attributes. Key-Value stores are dictionaries which access diverse
                  objects with a key unique to each. Document stores hold semi-structured data: objects which contain
                  all of their own relevant information, and which can be completely different from each other. Graph
                  databases add the concept of relationships (direct links between objects) to documents, allowing rapid
                  traversal of greatly connected data sets. 4. Properties At a high level, SQL and NoSQL comply with
                  separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties: Atomicity means
                  all transactions must succeed or fail completely. They cannot be partially-complete, even in the case
                  of system failure. Consistency means that at each step the database follows invariants: rules which
                  validate and prevent corruption. Isolation prevents concurrent transactions from affecting each other.
                  Transactions must result in the same final state as if they were run sequentially, even if they were
                  run in parallel. Durability makes transactions final. Even system failure cannot roll-back the effects
                  of a successful transaction. NoSQL technologies adhere to the “CAP” theorem, which says that in any
                  distributed database, only two of the following properties can be guaranteed at once: Consistency:
                  Every request receives the most recent result, or an error. (Note this is different than in ACID)
                  Availability: Every request has a non-error result, regardless of how recent that result is. Partition
                  tolerance: Any delays or losses between nodes will not interrupt the system’s operation. 5. Support
                  and communities SQL databases represent massive communities, stable codebases, and proven standards.
                  Multitudes of examples are posted online and experts are available to support those new to programming
                  relational data. NoSQL technologies are being adopted quickly, but communities remain smaller and more
                  fractured. However, many SQL languages are proprietary or associated with large single-vendors, while
                  NoSQL communities benefit from open systems and concerted commitment to onboarding users. SQL is
                  available to most major platforms, from operating systems to architectures and programming languages.
                  Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is JWT, and how does it work??
              </summary>
              <div className="px-4 pb-4">
                <p>
                  JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for
                  securely transmitting information between parties as a JSON object. This information can be verified
                  and trusted because it is digitally signed. <br /> How do JSON Web Tokens work? In authentication,
                  when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since
                  tokens are credentials, great care must be taken to prevent security issues. In general, you should
                  not keep tokens longer than required. You also should not store sensitive session data in browser
                  storage due to lack of security. Whenever the user wants to access a protected route or resource, the
                  user agent should send the JWT, typically in the Authorization header using the Bearer schema.
                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the difference between javascript and NodeJS?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Differences Between Node.js and JavaScript? 1. JavaScript is a client-side scripting language that is
                  lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other
                  hand, is a V8-based server-side programming language. As a result, it is used to create
                  network-centric applications. It's a networked system made for data-intensive real-time applications.
                  If we compare node js vs. python, it is clear that node js will always be the preferred option. 2.
                  JavaScript is a simple programming language that can be used with any browser that has the JavaScript
                  Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the
                  JavaScript programming language. It requires libraries that can be conveniently accessed from
                  JavaScript programming to be more helpful. 3. Any engine may run JavaScript. As a result, writing
                  JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js,
                  on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in
                  any context, regardless of whether the V8 engine is supported. 4. A specific non-blocking operation is
                  required to access any operating system. There are a few essential objects in JavaScript, but they are
                  entirely OS-specific. Node.js, on the other hand, can now operate non-blocking software tasks out of
                  any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong
                  relationship with the system files, allowing companies to read and write to the hard drive. 5. The
                  critical benefits of JavaScript include a wide choice of interfaces and interactions and just the
                  proper amount of server contact and direct visitor input. Node.js, on the other hand, offers node
                  package management with over 500 modules and the capacity to handle many requests at the same time. It
                  also offers the unique ability to enable microservice architecture and the Internet of Things. Even
                  when comparing node js vs. react js, node js always wins.
                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does NodeJS handle multiple requests at the same time?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10
                  seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to
                  start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture
                  is not single-threaded. How NodeJS handle multiple client requests? NodeJS receives multiple client
                  requests and places them into EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and
                  processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request
                  without I/O blocking then the event loop would itself process the request and sends the response back
                  to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS
                  cluster module or worker_threads module.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
