'use babel';

export default {
  list : {
    PDFLaTeX : {
      name: 'PDFLaTeX',
      exec: 'pdflatex',
      args: ['{FILE_ACTIVE_NAME}'],
    },
    XeLaTeX: {
      name: 'XeLaTeX',
      exec: 'xelatex',
      args: ['{FILE_ACTIVE_NAME}'],
    }
  },
  defaultCompiler : 'PDFLaTeX',
};
