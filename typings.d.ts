// Declare a module for an external library or module named "maath/random/dist/maath-random.esm"
declare module "maath/random/dist/maath-random.esm" {
  // Add your type definitions here

  // For example, export a function that returns a random number
  export function getRandomNumber(): number;
}

// Define an interface for Skill data
interface Skill_data {
  skill_name: string; // Skill name as a string
  Image: string; // URL or path to an image representing the skill
  width: number; // Width of the image
  height: number; // Height of the image
}

// Define an interface for Project data
interface Project_data {
  title: string; // Project title
  project_id: string; // Key for embedding a video
  technology_feature: string[]; // List of technology features
  description: string; // Description of the app
  package: string[]; // List of packages used
  githhub_link: string; // GitHub link
  frontend: string; // Frontend link
  backend: string; // Backend link
  project_image: string; // URL or path to the project image
  Type: string; // Project type
  project_Img_Mobile?: string[]; // Optional array of mobile project images
}

// Define an interface for links
interface Link {
  You_tube: string; // YouTube link
  Github: string; // GitHub link
  Dowload: string; // Download link
}

// Call a function named "checkFields" with an unspecified type argument
// checkFields<any>();
