# cra-template-dapla-js-lib

This little template repository can be used as a cra-template when creating new JavaScript libraries and/or React 
components. Basing a new project on a cra-template can be quite powerful and lets you skip the boring part of a new 
project setup. Following the official documentation on [templates for React](https://create-react-app.dev/docs/custom-templates), 
this template offers a good start for any JavaScript Library built for Statistics Norway Data Platform (Dapla).

## How to set it up
### Locally
1. Clone this repository
2. Create your new library by running 
`yarn create react-app [lib-name] --template file:[path-to-this-repository]`

For example, if you want to start a new project called `new-dapla-lib` and you cloned this repository to 
`/Users/me/Projects/react-templates/cra-template-dapla-js-lib` the command would be
`yarn create react-app new-dapla-lib --template file:/Users/me/Projects/react-templates/cra-template-dapla-js-lib`.

### From npm
_Coming soon!_

#### Things to remember
Even though this type of setup for a new project skips a lot of configuration and setup there are still some small 
things you have to change and/or add in your new project. 

First of all, some important properties are still missing from the `package.json`-file in your newly created project, 
and should be added:
* A `description`
* Link to the repository through `repository`
* An `author`
* A `license` where you specify the one from the `licenses` array
* `directories` because they use that in the official documentation

These are all included in the `template.json` file found in this repository, but cra-templates for React is not quite
at the level of copying every property from the template-json yet.

Secondly, some things needs to be changed:
* In `public/index.html` change:
    * `content` in `<meta name="description" />`
    * `<title>`
* In `public/manifest.json` change `short_name` and `name`

Phew! Now you should be good to go!

Another thing you might want to consider is moving all Rollup, Babel and Testing Library dependencies from `dependencies` 
to `devDependencies` in your new project (in the `package.json` file). The template should have done this for you but at 
the moment cra-templates does not support declaring `devDependencies` in a template. This is a matter of subjective
choice though, because when you build your application for production Rollup will not include these libraries anyways,
even though they are listed as `dependencies`, not `devDependencies`, if you have declared them as external in 
`rollup.config.js`.

## Under the hood
So, what does this template actually give you? 
* It pre-installs some dependencies, mainly:
    * [Babel](https://github.com/babel/babel)
    * [Rollup](https://github.com/rollup/rollup)
    * SemanticUI with its [React integration](https://react.semantic-ui.com)
    * [React](https://create-react-app.dev/docs/getting-started)
* Configures Babel and Rollup correctly
* Sets up CI for JavaScript libraries with Azure Piplines on [BIP](https://github.com/statisticsnorway/platform)
    * Configures SonarQube
* Sets up a skeleton for the library and its associated React example application
