document.addEventListener('DOMContentLoaded', () => {
    enableMenuVisibility();
    prepareCourseFiltering();
    presentCourses(courses);
    showFooter();


});

    
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: ['HTML', 'CSS'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

const courseGroup = document.getElementById('course-group');
const creditCount = document.getElementById('credit-count');


function enableMenuVisibility() {
    document.getElementById('hamburger-button').addEventListener('click',() => {
        document.querySelector('nav ul').classList.toggle('active');
    });
}

function prepareCourseFiltering() {
    document.getElementById('all-courses').addEventListener('click', () => presentCourses(courses));
    document.getElementById('wdd-courses').addEventListener('click', () => presentCourses(applyCourseFilter('WDD')));
    document.getElementById('cse-courses').addEventListener('click', () => presentCourses(applyCourseFilter('CSE')));
}

function applyCourseFilter(subject) {
    return courses.filter(course => course.subject === subject);
}


function presentCourses(filteredCourses) {
    courseGroup.innerHTML = '';

    const total = filteredCourses.reduce((sum, course) => {
        courseGroup.append(createSubjectElement(course));
        return sum + course.credits;
    }, 0);

    creditCount.textContent = `Total Credits: ${total}`;
}


function createSubjectElement(course) {
    const courseSection = document.createElement('div');

    const courseBta = document.createElement('button');
    courseBta.classList.add('course-cta');
    if (course.completed){
        courseBta.classList.add('completed');
    }
    courseBta.textContent = `${course.subject} ${course.number}`;

    const courseDescription = document.createElement('div');
    courseDescription.classList.add('course-description');
    courseDescription.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}<p>
        <p>${course.credits}<p>
        <p>${course.technology.join(',')}<p>
    `;
    courseBta.addEventListener('click', () => {
        courseDescription.classList.toggle('active');
    });

    courseSection.append(courseBta, courseDescription);
    return courseSection;
}


function showFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}