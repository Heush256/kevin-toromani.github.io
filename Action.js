const isSubfolder = window.location.pathname.includes('/Image/') ||
    window.location.pathname.includes('/Resume/') ||
    window.location.pathname.includes('/Education/');

const prefix = isSubfolder ? "../" : "";

document.write(`
<ul>
  <li><a href="${prefix}index.html" id="home">Home</a></li>
  <li><a href="${prefix}Resume/index.html" id="res">Resume</a></li>
  <li><a href="${prefix}Education/index.html" id="edu">Education</a></li>
  <li><a href="${prefix}Image/index.html" id="image">Picture</a></li>
</ul>
`);
