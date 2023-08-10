const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    });
});



//linking github link with button
document.addEventListener('DOMContentLoaded', () => {
    const githubButton1 = document.getElementById('githubButton1');
    const githubRepoURL1 = 'https://github.com/SeyonSuriya/ToyLand_Webstore.git';
    githubButton1.addEventListener('click', () => {
      //window.location.href = githubRepoURL1;
      window.open(githubRepoURL1, '_blank');
    });

    const githubButton2 = document.getElementById('githubButton2');
    const githubRepoURL2 = 'https://github.com/SeyonSuriya/e-commerce_system_with_API.git';
    githubButton2.addEventListener('click', () => {
      //window.location.href = githubRepoURL2;
      window.open(githubRepoURL2, '_blank');
    });
  });

  //download CV
  document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('cv_button');
    const downloadLink = document.getElementById('downloadLink');
  
    const fileURL = 'cv.pdf';
  
    downloadButton.addEventListener('click', () => {
      // Set the file URL as the download link's href
      downloadLink.setAttribute('href', fileURL);
  
      // Set the desired file name for the downloaded file
      downloadLink.setAttribute('download', 'cv.pdf');
  
      // Click the download link programmatically to initiate the download
      downloadLink.click();
    });
  });
  