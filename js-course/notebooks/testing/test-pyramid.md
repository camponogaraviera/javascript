# Test pyramid

1. Unit tests: it tests individual units of code, such as functions, classes, or modules without external dependencies (databases, files, etc.). They give fast feedback and are suggested for logic tests and edge cases.

2. Integration tests: it tests multiple units (functions, classes) together with their external dependencies. It usually involves I/O operations such as writing to and reading from a database.

3. End-to-end tests: test a complete flow of a feature from start to finish. They are slower and more expensive to write, therefore they should be used for key functions of the application.

# Popular tools for testing

1. Jasmine (unit): it is a behavior-driven development framework for testing.

2. Mocha (unit): popular framework in NPM running on Node.js. Does not include all features and, therefore, it is is often used with plugins such as Chai and Sinon.

3. Jest (unit): a newer framework developed by Facebook for react applications. It is a wrapper around Jasmine and provides a more convenient API.

4. Selenium (end-to-end): require testing the UI of the application. Provides a slow process, and a small change in the UI can break the test.
