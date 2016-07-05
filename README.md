# angular-scaffold-grunt

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. 

What this scaffold app provides to you:

1. **Yeoman (Yo)** generators for your Angular 1.x app.
2. **JSHint** and **JSCS** for Linting and Code Standards for your Angular app. (Just running `grunt jshint` and `grunt jscs`.
3. Configured **Test Suite**: **Karma** with **Jasmine** with **Chrome** and **PhantomJS** for Unit and End To End testing. (Run tests with `grunt test`).
4. Karma **Code Coverage**. You can export code coverage report to different formats: HTML, XML (Jenkis), JSON. Just running `grunt coverage`. Running `grunt test` will also automatically generate coverage each time you run your suite.
5. **Bootstrap SASS** support. Support both awesome tools (https://github.com/twbs/bootstrap-sass) 

## Available Generatos

Always use generators to start scaffolding your code. This way you ensure each time you create a service, controller, directive, etc a default test is created for you in order to always add test case when you push code.

```shell
⇒  yo --generators
Available Generators:

  angular
    common
    constant
    controller
    decorator
    directive
    factory
    filter
    main
    provider
    route
    service
    value
    view
  fountain-webapp

  karma
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.
For only building `grunt build`

## Testing

Running `grunt test` will run the unit tests with karma. Current configuration open a Chrome browser to run the test suite against. If you run on a CI server with no User Interface you can change `karma.conf.js` to use `PhantomJS` instead.

## Distribute

Running `grunt build` will do generate a distributable application and will save it to the dist folder.

## TODO

Configure Jenkis for Continuos Integration

Happy Coding!
