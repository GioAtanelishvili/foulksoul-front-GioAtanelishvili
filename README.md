<h1>FolkSoul</h1>
<p>Platform for musical band, where you can get information about the band and its members</p>
<p>Production URL: <a href="https://folksoul.giorgi-atanelashvili.redberryinternship.ge" target="_blank">https://folksoul.giorgi-atanelashvili.redberryinternship.ge</a></p>

<section>
<h2>Table of Contents</h2>
<ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#resources">Resources</a></li>
</ul>
</section>

<section id="prerequisites">
    <h2>Prerequisites</h2>
    <ul>
        <li><img src="docs/assets/node.png" style="vertical-align:bottom;width:20px;"> NodeJS</li>
        <li><img src="docs/assets/npm.png" style="width:25px;"> npm</li>
    </ul>
</section>

<section id="tech-stack">
    <h2>Tech Stack</h2>
    <ul>
        <li><a href="https://reactjs.org/" target="_blank">ReactJS @18.2.0</a> - Front-end library</li>
        <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript @4.7.4</a> - Programming language</li>
        <li><a href="https://www.cypress.io/" target="_blank">Cypress @10.3.1</a> - Testing framework</li>
        <li><a href="https://reactrouter.com/" target="_blank">React router dom @6.3.0</a> - Routing library</li>
        <li><a href="https://react-hook-form.com/" target="_blank">React hook form @7.33.1</a> - Form validation library</li>
        <li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS @3.1.6</a> - Module for serving auto-gen swagger-ui</li>
        <li><a href="https://axios-http.com/" target="_blank">Axios @0.27.2</a> - HTTP service</li>
    </ul>
</section>

<section id="getting-started">
    <h2>Getting Started</h2>
    <ol>
        <li>Clone FolkSoul repository from GitHub:</li>
        <pre>git clone https://github.com/RedberryInternship/foulksoul-front-GioAtanelishvili.git</pre>
        <li>Create .env file:</li>
        <pre>cp .env.example .env</pre>
        <li>Replace example values with actual values in .env file.</li>
        <li>Create cypress.config.ts file</li>
        <pre>cp cypress.config.ts.example cypress.config.ts</pre>
        <li>Install dependencies:</li>
        <pre>npm install</pre>
        <li>Run application:</li>
        <pre>npm start</pre>
    </ol>
</section>

<section id="testing">
    <h2>Testing</h2>
    <p>FolkSoul is a test driven application. It uses Cypress for e2e testing.</p>
    <p>After following the instructions in the <a href='#getting-started'>Getting Started</a> section, you can run tests by running command: <pre>npx cypress open</pre> and follow further instructions.</p>
    <p>If you prefer terminal for running tests, you can also use command: <pre>npx cypress run</pre></p>
</section>

<section id="deployment">
    <h2>Deployment</h2>
    For deployment,
    <ol>
        <li>create .env file by running: <pre>cp .env.example .env</pre></li>
        <li>Replace the value of the base url variable in .env file with the actual url.</li>
        <li>Create Build directory with a production build by running:<pre>npm run build</pre></li>
    </ol>
</section>

<section id="project-structure">
    <h2>Project Structure</h2>
    <pre>
.
├── cypress                       # Cypress tests
├── docs                          # Readme resources
│   └── assets                      # Readme assets
├── public                        # Public resources
├── src                           # Source code
│   ├── assets                      # Project assets
│   │   └── fonts                     # Fonts
│   │   └── images                    # Images
│   ├── components                  # Shared components
│   │   ├── svgs                      # SVG components     
│   │   └── Components.tsx            # Component file
│   │   └── index.ts                  # Export components
│   ├── context                     # Contexts
│   │   ├── ContextName.tsx           # Context file
│   │   └── index.ts                  # Export contexts
│   ├── helpers                     # Helper functions
│   │   ├── utils.ts                  # Util functions
│   │   └── index.ts                  # Export util functions
│   ├── pages                       # Pages
│   │   ├── Page                      # Page folder
│   │   │   ├── components              # Local components
│   │   │   ├── urils.ts                # Page file
│   │   │   └── index.ts                # Export page
│   │   └── index.ts                  # Export pages
│   ├── services                    # Axios services
│   │   └── services.ts               # Services file
│   │   └── index.ts                  # Export services
│   ├── types                       # Types
│   │   ├── types.d.ts                # Types file
│   │   └── index.ts                  # export types
│   ├── App.tsx                     # App component
│   ├── index.css                   # CSS entry file
│   ├── App.tsx                     # Entry file
- .env.example                    # Example file for .env
- .eslint.json                    # Eslint config
- .gitignore                      # Untracked files/folders
- .prettier.json                  # Prettier config
-cypress.config.ts.example        # Example file for cypress config
- package-lock.json               # Dependencies
- package.json                    # Dependencies
- postcss.config.json             # PostCSS config
- README.md                       # Markdown file
- tailwind.config.json            # Tailwind config
- tsconfig.json                   # TypeScript config</pre>
</section>

<section id="resources">
    <h2>Resources</h2>
    <ul>
        <li><a href="https://www.figma.com/file/ferG8kznuy5s0hMhMZa2Hi/FolkSoul---Bootcamp?node-id=149%3A1344" target="_blank">Application design</a>
         <li><a href="https://folksoul-api.giorgi-atanelashvili.redberryinternship.ge/api-docs" target="_blank">API specification</a>
        <li>Application URL: <a href="https://folksoul.giorgi-atanelashvili.redberryinternship.ge" target="_blank">https://folksoul.giorgi-atanelashvili.redberryinternship.ge</a></li>
    </ul>
</section>
