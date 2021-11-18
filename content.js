const allowCopyPaste = (e) => {
  e.stopImmediatePropagation();
  return true;
};

document.addEventListener('copy', allowCopyPaste, true);
document.addEventListener('paste', allowCopyPaste, true);
