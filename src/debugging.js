/**
 * Debugging helper for BackgroundPandaModel
 * 
 * Add this to your index.js or App.js to debug the section detection
 */

export function debugSectionDetection() {
  // Run this on component mount
  window.addEventListener('scroll', function() {
    // Basic scroll info
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    console.log("=== SECTION DETECTION DEBUG ===");
    console.log("Scroll position:", scrollY);
    console.log("Window height:", windowHeight);
    console.log("Document height:", documentHeight);
    
    // Find all sections
    const homeSection = document.querySelector('#home');
    const projectsSection = document.querySelector('#projects');
    const aboutSection = document.querySelector('#about'); 
    const contactSection = document.querySelector('#contact');
    
    console.log("Sections found:", {
      home: !!homeSection,
      projects: !!projectsSection,
      about: !!aboutSection,
      contact: !!contactSection
    });
    
    // Log section positions
    if (homeSection) {
      console.log("Home section:", {
        top: homeSection.offsetTop,
        height: homeSection.offsetHeight,
        bottom: homeSection.offsetTop + homeSection.offsetHeight
      });
    }
    
    if (projectsSection) {
      console.log("Projects section:", {
        top: projectsSection.offsetTop,
        height: projectsSection.offsetHeight,
        bottom: projectsSection.offsetTop + projectsSection.offsetHeight
      });
    }
    
    if (aboutSection) {
      console.log("About section:", {
        top: aboutSection.offsetTop,
        height: aboutSection.offsetHeight,
        bottom: aboutSection.offsetTop + aboutSection.offsetHeight
      });
    }
    
    if (contactSection) {
      console.log("Contact section:", {
        top: contactSection.offsetTop,
        height: contactSection.offsetHeight,
        bottom: contactSection.offsetTop + contactSection.offsetHeight
      });
    }
    
    // Determine current section
    let currentSection = "unknown";
    
    if (homeSection && scrollY < homeSection.offsetTop + homeSection.offsetHeight) {
      currentSection = "home";
    } else if (projectsSection && scrollY < projectsSection.offsetTop + projectsSection.offsetHeight) {
      currentSection = "projects";
    } else if (aboutSection && scrollY < aboutSection.offsetTop + aboutSection.offsetHeight) {
      currentSection = "about";
    } else if (contactSection) {
      currentSection = "contact";
    }
    
    console.log("CURRENT SECTION:", currentSection);
    console.log("===========================");
  });
}

/**
 * Alternative section detection for BackgroundPandaModel
 * 
 * If the normal section detection isn't working, you can use this simpler approach
 * that relies on scroll position relative to window height
 */
export function getSimpleSectionData(scrollY, windowHeight) {
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - windowHeight;
  const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
  
  // Simple approach - divide page into equal sections
  let currentSection = "home";
  let sectionProgress = 0;
  
  if (scrollY < windowHeight * 0.8) {
    // First 80% of first viewport height is home
    currentSection = "home";
    sectionProgress = scrollY / (windowHeight * 0.8);
  } else if (scrollY < windowHeight * 1.8) {
    // Next viewport height is projects
    currentSection = "projects";
    sectionProgress = (scrollY - windowHeight * 0.8) / windowHeight;
  } else if (scrollY < windowHeight * 2.8) {
    // Next viewport height is about
    currentSection = "about";
    sectionProgress = (scrollY - windowHeight * 1.8) / windowHeight;
  } else {
    // Rest is contact
    currentSection = "contact";
    sectionProgress = (scrollY - windowHeight * 2.8) / windowHeight;
  }
  
  return {
    currentSection,
    progress: Math.min(Math.max(sectionProgress, 0), 1),
    overallProgress: scrollProgress
  };
}

/**
 * Simple panda model position helper
 * 
 * This can be used to debug the panda model's positioning
 */
export function getPandaPositionForSection(section, progress, overallRotation) {
  // Default positions
  let position = { y: 0 };
  let rotation = { x: 0, y: 0, z: 0 };
  
  switch (section) {
    case "home":
      position.y = 2;
      rotation.x = 0;
      rotation.y = 0;
      rotation.z = overallRotation;
      break;
    case "projects":
      position.y = 0;
      rotation.x = 0;
      rotation.y = Math.PI / 2 + (progress * Math.PI / 4); // 90 degrees + up to 45 more
      rotation.z = overallRotation / 2;
      break;
    case "about":
      position.y = -1.5;
      rotation.x = 0.2;
      rotation.y = Math.PI + (progress * Math.PI / 6); // 180 degrees + up to 30 more
      rotation.z = overallRotation / 3;
      break;
    case "contact":
      position.y = -3;
      rotation.x = 0.4;
      rotation.y = 0;
      rotation.z = overallRotation;
      break;
    default:
      // Default fallback
      position.y = 0;
      rotation.x = 0;
      rotation.y = 0;
      rotation.z = overallRotation;
  }
  
  return { position, rotation };
} 