const allowCopyPaste = (e) => {
  e.stopImmediatePropagation();
  console.log('you can now copy & paste');
  return true;
};

document.addEventListener('copy', allowCopyPaste, true);
document.addEventListener('paste', allowCopyPaste, true);
