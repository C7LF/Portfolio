import React from 'react';
import Project from './project.js';

class Projects extends React.Component {
  render() {
    return (
      <>
        <div class="projects">
          <div class="container">
            <h2 class="text-center">Projects</h2>
            <p class="small text-center">Some of my Recent Work</p>
      
            <Project LoR="R" pTitle="Higher Education Portal" pSubTitle="Higher Education Computing App for Chesterfield College" pDesc="As part of the second year of my course, I was tasked with creating a portal for Higher Education computing students, where they could share thoughts through a group chat, forum and course reviews. Admins could also login to a custom CMS which would allow them to moderate reviews and add, edit and delete new pages and blog posts." pTechnologies={['ASP.NET','C#','CSS','HTML','MSSQL','Microsoft Azure']} pImage="hesite.jpg" codeLink="https://github.com/C7LF/HE-Site" />
            <Project LoR="L" pTitle="Wellness Nutrition Plus" pSubTitle="Nutrition Tips and eCommerce Website" pDesc="The client wanted this website to give readers tips, facts and overall information on everything relating to nutrition. The site uses WordPress as a CMS (content management system), along with WooCommerce, allowing users to purchase products from the site." pTechnologies={['WordPress','PHP','eCommerce','CSS','HTML','SEO']} pImage="wellnesssite.jpg" />
            <Project LoR="R" pTitle="Clicker Game" pSubTitle="Average number of clicks per second" pDesc="Built using ReactJS the aim is to get the highest number of clicks per second. The user has 10 seconds to click as fast as they can, upon completion the average clicks per second is worked out and displayed on screen." pTechnologies={['ReactJS','CSS']} pImage="clicker.jpg" codeLink="https://github.com/C7LF/Clicker" webLink="https://c7lf.github.io/Clicker/" />
            <Project LoR="L" pTitle="Bootstrap WordPress Blank Theme" pSubTitle="Blank WordPress Theme with Boostrap 4" pDesc="Using Bootstrap 4 as the main CSS framework, this WordPress theme comes barebones with minimal CSS and JavaScript and PHP (navwalker, widgets and pagination). The theme is completely free to use and can be expanded upon to meet the any requirements." pTechnologies={['PHP','Bootstrap 4','SQL','HTML','CSS','JavaScript']} pImage="bootstrap-wordpress.jpg" codeLink="https://github.com/C7LF/bootstrap4-wp-theme" />


          </div>
          <br />
          <p class="text-center">More on the way! <em>Want to find out more?</em> <a class="darklink" href="mailto:info@c7-dev.co.uk">Email me</a></p>
        </div>
      </>
    )
  }
}

export default Projects;
