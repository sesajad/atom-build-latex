'use babel';

export default {
  list : {
    PDFLaTeX : {
      name: 'PDFLaTeX',
      cmd: 'pdflatex',
      arg: '{FILE_ACTIVE_NAME}',
    },
    XeLaTeX: {
      name: 'XeLaTeX',
      cmd: 'xelatex',
      arg: '{FILE_ACTIVE_NAME}',
    }
  },
  defaultCompiler : 'PDFLaTeX',
};
