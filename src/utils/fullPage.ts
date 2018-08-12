function fullPage() {
  try {
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.padding = '0px';
    document.body.style.margin = '0px';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  } catch (err) {}
}

export default fullPage;