  const fileinput =document.querySelector("input"),
  downbut=document.querySelector("button");

  downbut.addEventListener("click",e=>{
      e.preventDefault();
      fetchFile(fileinput.value);
  });

  function fetchFile(url){
      fetch(url).then(res =>res.blob()).then(file =>{
        let tempurl=URL.createObjectURL(file)
        let aTag=document.createElement("a");
        aTag.href=tempurl;
        aTag.download=url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  }