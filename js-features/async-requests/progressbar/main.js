document.getElementById("file").onchange = function() {
    
    const fileDesc = document.querySelector(".input__wrapper-desc");
    console.log('fileDesc', fileDesc)

    let fileName = this.value.split("\\");
    console.log('fileName', fileName)
    fileName = fileName[fileName.length - 1];
    console.log('fileName 2', fileName)


    fileDesc.textContent = fileName;
  };