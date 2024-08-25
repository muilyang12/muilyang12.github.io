import Introduction, { IntroductionComponentName } from "./components/Introduction.js";
import Experience, { ExperienceComponentName } from "./components/Experience.js";
import Project, { ProjectsComponentName } from "./components/Projects.js";

customElements.define(IntroductionComponentName, Introduction);
customElements.define(ExperienceComponentName, Experience);
customElements.define(ProjectsComponentName, Project);
