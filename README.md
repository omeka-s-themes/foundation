# Foundation S

This is an Omeka S theme based on ZURB Foundation Sites. It currently comes with a default stylesheet for prototyping as well as 3 other style options. 

Other theme configuration options include:

* **Browse view layouts**: Omeka resources can be displayed as lists, within a grid, or both by providing users with a toggle for preferred layouts.
* **Show view layouts**: Resource metadata can show display as stacked with properties as headings above their values, or inline with properties as headings inline with their values.
* **Navigation layouts**: Global navigation can display as a horizontal top bar or a left vertical column.

The following instructions are Foundation Sites' installation guide for using their sass compiling tools.

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

Use this command to set up a blank Foundation for Sites project with this template:

```bash
foundation new --framework sites --template basic
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/zurb/foundation-sites-template projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
```

Finally, run `npm start` to run the Sass compiler. It will re-run every time you save a Sass file.
