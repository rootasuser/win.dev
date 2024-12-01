document.querySelector('#app').innerHTML = `
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">

      <a class="navbar-brand" href="#"></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" onclick="loadContent('home')">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="loadContent('about')">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#" onclick="loadContent('groups')">Groups</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadContent('projects')">Projects</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </nav>


  <div id="load-content" class="mt-5 pt-5"></div> 

`;

function loadContent(page) {
    const contentContainer = document.querySelector('#load-content');
  
    contentContainer.classList.add('fade-out');
  
    setTimeout(() => {

      switch (page) {
        case 'home':
            document.getElementById('offcanvasDarkNavbar').style.display = 'block';
          contentContainer.innerHTML = `
            <div class="container text-center mt-5" style="outline: none; border: none;">
              <div class="card" style="outline: none; border: none;">
                <div class="container">
                  <img src="src/assets/images/profile-win.png" class="rounded-circle" alt="profile" height="120" width="120" style="outline-style: solid; outline-color: rgba(149, 252, 255, 100);">
                </div>
                <h2>Win.Dev</h2>
                <small class='text-center text-secondary fw-lighter'>Frontend / Backend Developer</small>
                <div class="card-body d-flex justify-content-center align-items-center">
                  <div class='icons icons-container' style='row-gap: 20px; font-size: 30px;'>
                    <small class='text-center text-dark fw-lighter' style='color: #000; display: flex; align-items: center; justify-content: center; font-size: 20px;'>Contact Me</small>   
                    <a href='#'><i class="bi bi-facebook"></i></a>
                    <a href='#'><i class="bi bi-linkedin"></i></a>
                    <a href='#'><i class="bi bi-github"></i></a>
                    <a href='#'><i class="bi bi-tiktok"></i></a>
                    <a href='#'><i class="bi bi-envelope"></i></a>
                    <a href='#'><i class="bi bi-instagram"></i></a>
                    <a href='#'><i class="bi bi-discord"></i></a>
                    <div class='project-container mt-2'>
                      <a href='#' class='btn btn-secondary text-white' onclick="loadContent('projects')">Projects</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          break;
  
        case 'about':
            document.getElementById('offcanvasDarkNavbar').style.display = 'none';
          contentContainer.innerHTML = `
           <div class="d-flex justify-content-center align-items-center position-fixed top-50 start-50 translate-middle" style="width: 100%; height: 100vh; z-index: 1050;">
            <div class="card shadow rounded p-3" style="max-width: 700px; width: 100%; height: auto;">
                <div class="text-center">
                    <img src="src/assets/images/profile-win.png" class="img-fluid rounded-circle mb-3" alt="profile" style="max-width: 150px; height: 150px; outline-style: solid; outline-color: rgba(149, 252, 255, 100);">
                </div>
                <div class="card-body" style="max-height: 80vh; overflow-y: auto;">
                    <h5 class="card-title text-center">About Me</h5>
                    <p class="card-text text-justify">
                        Hello! I’m <strong>Windel Navales</strong>, a passionate and dedicated technology enthusiast from <strong>Bayawan, Negros Oriental</strong>. 
                        I hold a Bachelor of Science in Industrial Technology with a major in Computer Technology, a 4-year program that laid the foundation for my technical expertise.
                    </p>
                    <p class="card-text text-justify">
                        Since <strong>2022</strong>, I’ve been accepting commissions and successfully delivered projects for over <strong>10 clients</strong>. 
                        My skills include:
                    </p>
                    <ul class="small mb-3" style='color: blue;'>
                        <li><strong style='color: red;'>Front-End:</strong> TailwindCSS, Bootstrap, UI Kit, Semantic UI, ViteReactJS.</li>
                        <li><strong style='color: red;'>Back-End:</strong> PHP.</li>
                        <li><strong style='color: red;'>Databases:</strong> MySQL.</li>
                    </ul>
                    <p class="card-text text-justify">
                        I also develop desktop applications using VB Express 2010 and VB.NET with SQL databases. 
                        I’m passionate about turning ideas into impactful solutions!
                    </p>
                    <div class="text-center">
                        <a href="#" class="btn btn-secondary btn-sm icon-link icon-link-hover d-flex align-items-center justify-content-center" aria-hidden="true" onclick="loadContent('home')">
                            Go back <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
          break;
  
          case 'groups':
            contentContainer.innerHTML = `
              <div class="container mt-5">
                <h3 class="text-center mb-4">Facebook Groups</h3>
                <div class="list-group">
                  <a href="https://www.facebook.com/groups/549287493814959" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span>Programming Philippines</span>
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="https://www.facebook.com/groups/1235199260732089" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span>BSIT STUDENTS IN NORSU-BSC</span>
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="https://www.facebook.com/groups/575761201809519" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span>Lithe PHP Framework</span>
                    <i class="bi bi-link-45deg"></i>
                  </a>
                  <a href="https://www.facebook.com/groups/657771325900303" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span>Programmer Philippines Freelancers</span>
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            `;
            break;
          
  
            case 'projects':
                contentContainer.innerHTML = `
                <div class="container mt-5">
  <h3 class="text-center mb-4">My Projects</h3>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card shadow-sm d-flex flex-column h-100">
        <img src="src/assets/images/bms.png" class="card-img-top" alt="Project 1">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Barangay Management System</h5>
          <p class="card-text">A Barangay Management System where only an admin can view, delete, and edit residents' and non-residents' data, search for residents/non-residents, and generate barangay certificates or certificates of residency.</p>
          <a href="#" class="btn btn-primary mt-auto" target="_blank">View Project</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="card shadow-sm d-flex flex-column h-100">
        <img src="src/assets/images/dts.png" class="card-img-top" alt="Project 2">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Document Tracker System</h5>
          <p class="card-text">Document Tracker System allows users to add documents, search for documents, view documents, and update accounts.</p>
          <a href="#" class="btn btn-primary mt-auto" target="_blank">View Project</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="card shadow-sm d-flex flex-column h-100">
        <img src="src/assets/images/ojt.png" class="card-img-top" alt="Project 3">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">OJT Documentation System</h5>
          <p class="card-text">OJT Documentation System allows users to track their documentation, download all documentations, time-in and time-out, search for documentation, view documentations, and reset all documentations.</p>
          <a href="#" class="btn btn-primary mt-auto" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </div>
</div>

                `;
                break;
              
  
        default:
          contentContainer.innerHTML = `<p>Page not found.</p>`;
          console.error('Invalid page selected:', page);
      }
  

      contentContainer.classList.remove('fade-out');
      contentContainer.classList.add('fade-in');
  
      setTimeout(() => contentContainer.classList.remove('fade-in'), 500);
    }, 500); 
  }
  
  loadContent('home');

  





  
  