#!/usr/bin/env node

import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: '¿Qué plantilla te gustaría generar?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input) || input === '.') return true;
      else return 'El nombre de los proyectos solo puede incluir letras, números, guiones medios y bajos o que el nombre sea un texto vacío.';
    },
  },
];

inquirer.prompt(QUESTIONS).then(answers => {
  const projectChoice = answers['project-choice'];
  console.log(projectChoice);
  const projectName = answers['project-name'];
  console.log(projectName);
  const templatePath = `${__dirname}/templates/${projectChoice}`;
  console.log(templatePath);

  if (projectName !== '.') {
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
  }

  createDirectoryContents(templatePath, projectName);
});
