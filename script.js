document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.querySelector('.project-list');

    // Defining the different projects and their categories
    const projects = [
        {
            title: 'Formula 1 Dashboard',
            imgSrc: 'path_to_f1_dashboard_image.jpg',
            categories: ['all', 'javascript']
        },
        {
            title: 'American Food Access',
            imgSrc: 'path_to_american_food_access_image.jpg',
            categories: ['all', 'javascript']
        },
        {
            title: 'Antmanirbhar Tarun Manch (Self Reliance)',
            imgSrc: 'path_to_antmanirbhar_image.jpg',
            description: 'A non-profit initiative to provide a platform for the newly launched and growing local businesses in Indore.',
            categories: ['all', 'android']
        },
        {
            title: 'Psyche Inspired Review App',
            imgSrc: 'path_to_psyche_inspired_review_app_image.jpg',
            description: 'An internal system to submit and review NASA Psyche Inspired Intern Applications',
            categories: ['all', 'html', 'css']
        },
        {
            title: 'Path to FBLA',
            imgSrc: 'path_to_path_to_fbla_image.jpg',
            description: 'Android app which helps prepare for objective tests hosted by the Future Business Leaders of America. The user can take quizzes from 10 different categories with over 150 questions.',
            categories: ['all', 'html', 'css']
        },
        {
            title: 'UAB Automation Scripts',
            imgSrc: 'C:\Users\lohit\OneDrive\Desktop\portfolio\python.jpeg',  // Update with actual image path
            description: 'Python scripts to automate Blazernet and Canvas tasks. Includes utilities for class search and availability.',
            categories: ['all', 'python']
        }
    
    ];

    function setRandomButtonColors() {
        const buttons = document.querySelectorAll('.filter-button');
        
        buttons.forEach(button => {
            // Generate random RGB values
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
    
            button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
    
    // Call the function to apply random colors
    setRandomButtonColors();
    

    const buttons = document.querySelectorAll('.project-filter button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.innerText.toLowerCase();

            // Clearing previous projects
            projectList.innerHTML = '';

            // Filtering and displaying projects
            projects.forEach(project => {
                if (project.categories.includes(category)) {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('project-card');

                    const projectImg = document.createElement('img');
                    projectImg.setAttribute('src', project.imgSrc);
                    projectImg.setAttribute('alt', project.title);

                    const projectTitle = document.createElement('p');
                    projectTitle.innerText = project.title;

                    projectCard.appendChild(projectImg);
                    projectCard.appendChild(projectTitle);

                    if (project.description) {
                        const projectDesc = document.createElement('p');
                        projectDesc.innerText = project.description;
                        projectCard.appendChild(projectDesc);
                    }

                    projectList.appendChild(projectCard);
                }
            });
        });
    });
});
