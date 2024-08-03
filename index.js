const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = ({ title, description, installation, usage, contributing, tests, github, email }) =>
  `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For questions, please contact me on GitHub at [${github}](https://github.com/${github}) or email me at ${email}.
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can people contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples of how to run tests for your project:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Provide your GitHub username for questions:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide your email address for questions:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
