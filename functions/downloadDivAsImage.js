import { toPng } from 'html-to-image';

export const downloadDivAsImage = (divId) => {
  const node = document.getElementById(divId);
  if (node) {
      toPng(node)
          .then((dataUrl) => {
              const link = document.createElement('a');
              link.href = dataUrl;
              link.download = 'div-image.png';
              link.click();
          })
          .catch((error) => {
              console.error('oops, something went wrong!', error);
          });
  } else {
      console.error('Element not found!');
  }
};