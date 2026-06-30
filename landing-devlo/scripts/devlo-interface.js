const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const selectFilesBtn = document.getElementById('selectFilesBtn');
const acceptedTypes = ['.zip', '.tar.gz', '.tgz'];

function isAcceptedFile(fileName) {
  const lowerName = fileName.toLowerCase();
  return acceptedTypes.some((type) => lowerName.endsWith(type));
}

function updateFileList(files) {
  if (!files.length) {
    fileList.innerHTML = '<li class="file-empty">Aún no se han añadido archivos.</li>';
    return;
  }

  const items = Array.from(files)
    .filter((file) => isAcceptedFile(file.name))
    .map((file) => `<li>${file.name}</li>`);

  fileList.innerHTML = items.length ? items.join('') : '<li class="file-empty">No se aceptaron archivos compatibles.</li>';
}

function handleFiles(selectedFiles) {
  const files = Array.from(selectedFiles).filter((file) => isAcceptedFile(file.name));
  updateFileList(files);
}

selectFilesBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (event) => {
  handleFiles(event.target.files);
});

dropzone.addEventListener('dragenter', (event) => {
  event.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropzone.classList.remove('dragover');
  handleFiles(event.dataTransfer.files);
});

dropzone.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    fileInput.click();
  }
});
