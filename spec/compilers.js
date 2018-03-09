'use babel';

export default {
  list : {
    PDFLaTeX : {
      name: 'PDFLaTeX',
      exec: 'pdflatex',
      args: ['-file-line-error', '-interaction=nonstopmode', '{FILE_ACTIVE_NAME}'],
      errorMatch: '(?<file>[\\/0-9a-zA-Z\\._]+):(?<line>\\d+)(:(?<col>\\d+))?:\\s+(?<message>.+)',
      sh: false,
    },
    XeLaTeX: {
      name: 'XeLaTeX',
      exec: 'xelatex',
      args: ['-file-line-error', '-interaction=nonstopmode','{FILE_ACTIVE_NAME}'],
      errorMatch: '(?<file>[\\/0-9a-zA-Z\\._]+):(?<line>\\d+)(:(?<col>\\d+))?:\\s+(?<message>.+)',
      sh: false,
    }
  },
  defaultCompiler : 'PDFLaTeX',
};
