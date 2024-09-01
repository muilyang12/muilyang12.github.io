import Expand, { ExpandComponentName } from "./components/core/Expand.js";
import Modal, { ModalComponentName } from "./components/core/Modal.js";
import ModalButton, { ModalButtonComponentName } from "./components/core/ModalButton.js";
import Link, { LinkComponentName } from "./components/core/Link.js";
import LeftContents, { LeftContentsComponentName } from "./components/LeftContents.js";
import Introduction, { IntroductionComponentName } from "./components/Introduction.js";
import Experience, { ExperienceComponentName } from "./components/Experience.js";
import Project, { ProjectsComponentName } from "./components/Projects.js";
import Certifications, { CertificationsComponentName } from "./components/Certifications.js";
import Education, { EducationComponentName } from "./components/Education.js";

customElements.define(ExpandComponentName, Expand);
customElements.define(ModalComponentName, Modal);
customElements.define(ModalButtonComponentName, ModalButton);
customElements.define(LinkComponentName, Link);

customElements.define(LeftContentsComponentName, LeftContents);
customElements.define(IntroductionComponentName, Introduction);
customElements.define(ExperienceComponentName, Experience);
customElements.define(ProjectsComponentName, Project);
customElements.define(CertificationsComponentName, Certifications);
customElements.define(EducationComponentName, Education);
